"use client"

import {useScramble} from "use-scramble";
import { useEffect, useState } from "react";
import Image from "next/image";

import { Fade } from "react-awesome-reveal";

export default function Hero() {
    const [key, setKey] = useState(0);

    const { ref, replay } = useScramble({ 
        text: "I'm a full stack developer based in Jakarta, Indonesia.",
        range: [49, 95],
        step: 5,
        tick: 1,
        scramble: 5,
        seed:2,
        chance: 1,
        speed: 0.3
      });

      useEffect(() => {
        const animationDuration = 3000; // Adjust based on the length of the animation (in ms)
        const delay = setTimeout(() => {
          
          setKey((prev) => prev + 1); // Increment to restart animation
        }, animationDuration);
    
        return () => clearTimeout(delay); // Cleanup timeout on unmount
      }, [key]); // Add key to the dependency array to trigger a new animation on mount and restartkey);
    return (
        <section className="text-center isolate md:isolation-auto">
            <div className="relative min-h-[calc(60vh)] md:min-h-[calc(90vh)] flex justify-center items-center">
                <svg className="absolute bottom-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#f3f4f5" fillOpacity="1"
                          d="M0,192L40,213.3C80,235,160,277,240,288C320,299,400,277,480,234.7C560,192,640,128,720,90.7C800,53,880,43,960,48C1040,53,1120,75,1200,90.7C1280,107,1360,117,1400,122.7L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
                </svg>
                <div className="grid px-4 md:px-6 lg:px-8 grid-cols-1  md:grid-cols-2 gap-2 flex-row md:flex-row">
                    <div className="flex items-center justify-center md:basis-1/2">
                        <div className="w-full">
                            <h1 className="text-4xl md:text-6xl font-bold mb-4 ">
                                <Fade>Hi, I&apos;m <span className="text-yellow-400">Minter Prasetyo Rajagukguk</span></Fade>
                            </h1>
                            <p className="text-lg md:text-2xl mb-6 h-[2rem] overflow-hidden">
                                <a 
                                    ref={ref} key={key}
                                    onMouseOver={replay} 
                                    onFocus={replay}
                                    />
                                    
                            </p>
                            <Fade delay={200} duration={1000} fraction={0.5} triggerOnce>
                                <p className="text-gray-500 mb-8">I&apos;m a passionate developer and designer dedicated to building modern, scalable, and
                                user-friendly solutions. Let&apos;s bring ideas to life, one project at a time. </p>
                            </Fade>
                           
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <Image src="person.svg" className="mx-auto drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] w-[400px] rounded-full" width={0} height={0} alt="hero"/>
                    </div>
                </div>
            </div>
        </section>
    )
}