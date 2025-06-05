"use client"

import React, { useEffect, useState, useCallback } from "react"; 

// Mock implementation for useScramble for preview purposes
const useScrambleMock = ({ text, effectKey }: { text: string; effectKey: number }) => {
  const [currentText, setCurrentText] = useState(text);
  const ref = React.useRef(null);

  useEffect(() => {
    // Simulate the scramble effect by changing text slightly over time
    // This effect will now re-run when 'text' or 'effectKey' changes.
    setCurrentText(''); // Reset text at the beginning of the effect for a fresh start
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        // This is a very basic mock, a real library would do character scrambling
        setCurrentText(text.substring(0, i + 1) + text.substring(i + 1).split('').map(() => Math.random() > 0.5 ? String.fromCharCode(Math.floor(Math.random() * (126 - 33 + 1) + 33)) : ' ').join(''));
        i++;
      } else {
         setCurrentText(text); // Ensure final text is correct
         clearInterval(interval);
      }
    }, 50); // Adjust speed of mock scramble
    return () => clearInterval(interval);
  }, [text, effectKey]); // Dependency array updated to use effectKey

  const replay = useCallback(() => {
    // This function is memoized to prevent unnecessary re-renders in Hero's useEffect.
    // The actual re-triggering of the scramble is handled by the effectKey change.
    // We can still clear text here for immediate visual feedback if desired,
    // though the useEffect in the mock already resets it.
    // setCurrentText(''); 
    console.log("Scramble replay triggered (mock via useCallback)");
  }, []); // Empty dependency array as setCurrentText is stable

  return { ref, replay, currentText }; 
};


export default function Hero() {
    const [key, setKey] = useState(0); // This key will be used as effectKey
    const { ref: scrambleRef, replay, currentText: scrambledText } = useScrambleMock({ 
        text: "I'm a full stack developer based in Jakarta, Indonesia.",
        effectKey: key // Pass the key state to the mock hook
      });

    const [bioSuggestions, setBioSuggestions] = useState("");
    const [isLoadingSuggestions, setIsLoadingSuggestions] = useState(false);
    const [errorSuggestions, setErrorSuggestions] = useState<string | null>(null);

    const initialBio = "I am an IT Developer with expertise in Node.js, .NET Core, and Next.js, dedicated to delivering high-quality, scalable web applications. Currently contributing to datamigas.esdm.go.id, I am passionate about driving innovation and applying my skills to solve complex challenges in the tech industry.";

    useEffect(() => {
        const animationDuration = 4000; // Increased duration for mock scramble to complete
        const timeoutId = setTimeout(() => {
          if (typeof replay === 'function') { 
            replay(); // Call the memoized replay function
          }
          setKey((prev) => prev + 1); // Increment key to re-trigger the scramble effect in the mock
        }, animationDuration);
    
        return () => clearTimeout(timeoutId); 
      }, [replay, key]); // Dependencies for Hero's useEffect

    const handleSuggestBio = async () => {
        setIsLoadingSuggestions(true);
        setErrorSuggestions(null);
        setBioSuggestions(""); 

        const internalApiUrl = '/api/suggest-bio'; 

        try {
            const response = await fetch(internalApiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ bio: initialBio }) 
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error("Internal API Error:", errorData);
                throw new Error(errorData.message || `API request failed with status ${response.status}`);
            }

            const result = await response.json();

            if (result.suggestion) {
                setBioSuggestions(result.suggestion);
            } else {
                console.error("Unexpected API response structure from internal API:", result);
                throw new Error("Could not retrieve valid suggestions from the internal API.");
            }
        } catch (error) {
            if (error instanceof Error) {
                console.error("Error fetching bio suggestions via internal API:", error);
                setErrorSuggestions(error.message);
            } else {
                console.error("Unexpected error type:", error);
                setErrorSuggestions("An unexpected error occurred.");
            }
        } finally {
            setIsLoadingSuggestions(false);
        }
    };

    return (
        <section className="text-center bg-gradient-to-br from-gray-900 to-gray-800 text-white isolate md:isolation-auto">
            <div className="relative min-h-screen flex flex-col justify-center items-center p-4 overflow-hidden">
                
                <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2 filter blur-2xl"></div>
                <div className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-400 rounded-full opacity-20 translate-x-1/2 translate-y-1/2 filter blur-2xl"></div>

                <div className="absolute bottom-0 left-0 right-0 w-full z-0">
                    <svg className="w-full h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#111827" fillOpacity="1"
                              d="M0,192L40,181.3C80,171,160,149,240,149.3C320,149,400,171,480,197.3C560,224,640,256,720,250.7C800,245,880,203,960,186.7C1040,171,1120,181,1200,192C1280,203,1360,213,1400,218.7L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
                    </svg>
                </div>

                <div className="container z-10 grid gap-10 md:gap-16 px-4 md:px-6 lg:px-8 grid-cols-1 md:grid-cols-5 items-center w-full max-w-6xl mx-auto my-auto">
                    
                    <div className="md:col-span-3 flex flex-col items-center text-center md:items-start md:text-left order-2 md:order-1 "> {/* Removed py-8 md:py-0 for text col */}
                        <div className="w-full">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-3 tracking-tight">
                                Hi, I&apos;m <br className="md:hidden" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">Minter Prasetyo R.</span>
                            </h1>
                            <p 
                                ref={scrambleRef} 
                                onMouseOver={replay} 
                                onFocus={replay}
                                className="text-lg sm:text-xl md:text-2xl mb-6 min-h-[4em] md:min-h-[4.8em] lg:min-h-[5em] text-gray-300 font-light"
                            >
                                {scrambledText}
                            </p>
                            <p className="text-gray-400 mb-8 text-base sm:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
                                {initialBio}
                            </p>
                            
                            <button 
                                type="button"
                                onClick={handleSuggestBio}
                                disabled={isLoadingSuggestions}
                                className="mb-6 px-8 py-3 bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-gray-900 font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2 text-lg"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L1.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.25 12L17.437 9.154a4.5 4.5 0 00-3.09-3.09L11.5 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L18.25 12zm0 0l.813 2.846a4.5 4.5 0 003.09 3.09L25.000 12l-2.846-.813a4.5 4.5 0 00-3.09-3.09L18.25 5.25l-.813 2.846a4.5 4.5 0 003.09 3.09L18.25 12z" />
                                </svg>
                                <span>{isLoadingSuggestions ? "Thinking..." : "Enhance My Bio"}</span>
                            </button>

                            {isLoadingSuggestions && (
                                <div className="mt-4 p-4 border border-sky-700 rounded-lg bg-sky-900 bg-opacity-50 text-sky-300 animate-pulse">
                                    <p>Ai is crafting suggestions...</p> {/* Changed from Gemini to Ai */}
                                </div>
                            )}
                            {errorSuggestions && (
                                <div className="mt-4 p-4 border border-red-600 rounded-lg bg-red-900 bg-opacity-50 text-red-300">
                                    <p className="font-semibold">Oops! Something went wrong:</p>
                                    <p className="text-sm">{errorSuggestions}</p>
                                </div>
                            )}
                            {bioSuggestions && !isLoadingSuggestions && (
                                <div className="mt-6 p-6 border border-green-700 rounded-xl bg-green-900 bg-opacity-40 text-green-200 shadow-xl">
                                    <h3 className="font-semibold text-xl mb-3 text-green-400">Bio Enhancement Ideas:</h3>
                                    <div className="whitespace-pre-wrap text-left text-sm sm:text-base space-y-2"> 
                                        {bioSuggestions.split('\n').map((line, index) => (
                                            <p key={index}>{line}</p>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="md:col-span-2 flex justify-center items-center py-8 md:py-2 order-1 md:order-2"> {/* Removed py-8 md:py-0 for image col */}
                        <div className="relative group">
                             <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-yellow-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                            <img 
                                src="/chatgpt-make.png" 
                                onError={(e) => {
                                    e.currentTarget.src = 'https://placehold.co/400x400/e2e8f0/64748b?text=M.P.R';
                                    e.currentTarget.onerror = null; 
                                }}
                                className="relative mx-auto rounded-full object-cover shadow-2xl
                                           w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 
                                           xl:w-[22rem] xl:h-[22rem] 2xl:w-[24rem] 2xl:h-[24rem]"
                                style={{ aspectRatio: '1 / 1' }} 
                                alt="Minter Prasetyo Rajagukguk - Full Stack Developer" 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
