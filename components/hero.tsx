
export default function Hero() {
    return (
        <section className="pt-10 text-center isolate md:isolation-auto">
            <div className="relative min-h-[650px]">
                <svg className="absolute bottom-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#f3f4f5" fillOpacity="1"
                          d="M0,192L40,213.3C80,235,160,277,240,288C320,299,400,277,480,234.7C560,192,640,128,720,90.7C800,53,880,43,960,48C1040,53,1120,75,1200,90.7C1280,107,1360,117,1400,122.7L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
                </svg>
                <div className="grid px-4 md:px-6 lg:px-8  grid-cols-2 gap-2 flex-row md:flex-row">
                    <div className="flex items-center basis-1/2">
                        <div className="w-full">
                            <h1 className="text-4xl md:text-6xl font-bold mb-4 ">
                                Hi, I'm <span className="text-yellow-400">MPRX Zero One</span>
                            </h1>
                            <p className="text-lg md:text-2xl mb-6">
                                I'm a full stack developer based in Jakarta, Indonesia.
                            </p>
                            <p className="text-gray-300 mb-8">
                                I'm a passionate developer and designer dedicated to building modern, scalable, and
                                user-friendly solutions. Let's bring ideas to life, one project at a time.
                            </p>
                        </div>
                    </div>
                    <div className="basis-1/2">
                        <img src="person.png" className="mx-auto drop-shadow-xl w-[400px] rounded-full" alt="hero"/>
                    </div>
                </div>
            </div>
        </section>
    )
}