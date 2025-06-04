"use client";
import { lisencesData } from "@/app/data/lisences";
import { ILisencesData } from "@/app/types/lisences";
import { Award, ExternalLink, CalendarDays, BrainCircuit } from "lucide-react";

export default function Certificate() {
    return (
        <section id="certificate" className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-gray-800 text-white">
            <div className="container mx-auto max-w-5xl"> {/* Max width set for content area */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight">
                        Licenses & <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">Certifications</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        A showcase of my professional qualifications and ongoing commitment to learning and development in the tech industry.
                    </p>
                </div>

                <div className="grid gap-8 md:gap-10"> {/* Grid for certificate items */}
                    {lisencesData && lisencesData.length > 0 ? (
                        lisencesData.map((lisence: ILisencesData) => (
                            <div key={lisence.id} className="bg-gray-900 rounded-xl shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-yellow-500/20 hover:ring-1 hover:ring-yellow-500/30">
                                <div className="p-6 md:p-8 flex flex-col sm:flex-row items-start gap-6">
                                    <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 bg-gray-800 rounded-lg flex items-center justify-center shadow-md overflow-hidden">
                                        {/* Using standard <img> tag */}
                                        <img 
                                            src={lisence.logoUrl} 
                                            width={80} // Intrinsic width
                                            height={80} // Intrinsic height
                                            alt={`Logo of ${lisence.company}`}
                                            className="object-contain w-full h-full"
                                            // Fallback placeholder if the primary src fails
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                target.src = `https://placehold.co/80x80/374151/9ca3af?text=${lisence.company.substring(0,3).toUpperCase()}`;
                                                target.onerror = null; 
                                            }}
                                        />
                                    </div>
                                    <div className="flex-grow">
                                        {lisence.lisenceUrl ? (
                                            <a 
                                                href={lisence.lisenceUrl} 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className="group inline-flex items-center"
                                            >
                                                <h3 className="text-xl md:text-2xl font-semibold text-yellow-400 group-hover:text-amber-500 group-hover:underline transition-colors">
                                                    {lisence.name}
                                                </h3>
                                                <ExternalLink size={18} className="ml-2 text-gray-500 group-hover:text-yellow-400 transition-colors opacity-75 group-hover:opacity-100" />
                                            </a>
                                        ) : (
                                            <h3 className="text-xl md:text-2xl font-semibold text-yellow-400">{lisence.name}</h3>
                                        )}
                                        <p className="text-md text-gray-300 mt-1">{lisence.company}</p>
                                        
                                        <div className="text-sm text-gray-400 mt-2 space-y-1">
                                            <div className="flex items-center gap-2">
                                                <CalendarDays size={16} className="flex-shrink-0 text-gray-500" />
                                                <span>Issued: {lisence.issuedDate}</span>
                                            </div>
                                            {lisence.credentialID && (
                                                <div className="flex items-center gap-2">
                                                    <Award size={16} className="flex-shrink-0 text-gray-500" />
                                                    <span>Credential ID: {lisence.credentialID}</span>
                                                </div>
                                            )}
                                        </div>
                                        
                                        {lisence.skills && (
                                            <div className="mt-4">
                                                <h4 className="text-sm font-semibold text-gray-300 mb-1 flex items-center gap-2">
                                                    <BrainCircuit size={16} className="text-yellow-500"/>
                                                    Skills Covered:
                                                </h4>
                                                <p className="text-xs text-gray-400 leading-relaxed bg-gray-800 p-2 rounded-md">
                                                    {lisence.skills}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-500 text-lg">No licenses or certifications to display at the moment.</p>
                    )}
                </div>
            </div>
        </section>
    )
}
