"use client";
import { projectsData } from "@/app/data/project";
import { IProjectData } from "@/app/types/project";
import { ExternalLink, Code2, Briefcase } from "lucide-react"; // Added icons

export default function Project() {
    return (
        <section id="project" aria-label="Navigate to project" className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-gray-800 text-white">
            <div className="container mx-auto max-w-6xl"> {/* Increased max-width for projects */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight">
                        Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">Projects</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Here are some of the projects I&apos;ve worked on, showcasing my skills in full-stack development and problem-solving.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {projectsData && projectsData.length > 0 ? (
                        projectsData.map((project: IProjectData) => (
                            <div 
                                key={project.id} 
                                className="bg-gray-900 rounded-xl shadow-2xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-yellow-500/20 hover:ring-2 hover:ring-yellow-500/40 transform hover:-translate-y-1 group"
                            >
                                <div className="relative w-full h-56 md:h-64 overflow-hidden">
                                    <img
                                        src={project.imgUrl ?? ""}
                                        alt={`Screenshot or logo for ${project.projectName}`}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.src = `https://placehold.co/400x300/374151/9ca3af?text=Image+Not+Found`;
                                            target.onerror = null; 
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                                </div>
                                
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-xl lg:text-2xl font-semibold text-yellow-400 mb-2 group-hover:text-amber-500 transition-colors">
                                        {project.projectName}
                                    </h3>
                                    
                                    <div className="mb-3 text-sm text-gray-400 flex items-center">
                                        <Briefcase size={16} className="mr-2 text-gray-500" />
                                        <span>{project.projectOwner}</span>
                                    </div>

                                    <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-grow">
                                        {project.description}
                                    </p>

                                    <div className="mb-4">
                                        <h4 className="text-xs font-semibold text-gray-500 uppercase mb-2 flex items-center">
                                            <Code2 size={14} className="mr-1.5 text-yellow-500"/> Tech Stack
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {project.techStack.split(',').map(tech => (
                                                <span key={tech.trim()} className="px-2.5 py-1 text-xs bg-gray-700 text-gray-300 rounded-full shadow-sm">
                                                    {tech.trim()}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    
                                    {project.projectUrl && (
                                        <a
                                            href={project.projectUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-auto inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-center text-gray-900 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-lg hover:from-yellow-500 hover:to-amber-600 focus:ring-4 focus:ring-yellow-300/50 dark:focus:ring-yellow-900 transition-all duration-300 ease-in-out group-hover:shadow-lg"
                                        >
                                            View Project
                                            <ExternalLink size={16} className="ml-2" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="col-span-full text-center text-gray-500 text-lg">No projects to display at the moment.</p>
                    )}
                </div>
            </div>
        </section>
    );
}