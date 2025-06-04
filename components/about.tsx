"use client";
import React from "react";
import { UserCircle, BrainCircuit, Briefcase, GraduationCap, ChevronLeft, ChevronRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { skillList } from "@/app/data/skill";
import Autoplay from "embla-carousel-autoplay"; // Import Autoplay plugin if you choose to use it
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";


export default function About() {
  // // For Autoplay with Embla Carousel, if you choose to use it:
  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }) // Example Autoplay config
    // For now, let's disable autoplay for simplicity in this mock environment
    // If you enable it, make sure to import Autoplay from "embla-carousel-autoplay"
  );

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-gray-900 text-white" id="about">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12 md:mb-16">
            <UserCircle size={48} className="mx-auto mb-4 text-yellow-400" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">Me</span>
            </h2>
        </div>
        
        <div className="grid gap-8 md:gap-12 items-start">
            <div className="md:col-span-2 space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                I&apos;m Minter Prasetyo Rajagukguk, a dedicated Software Developer specializing in Node.js, .NET Core, and Next.js. With a strong foundation in building scalable and efficient web applications, I focus on delivering high-quality solutions that meet complex technical challenges.
                </p>
                <p>
                Currently, I contribute to the development of datamigas.esdm.go.id, a project under the Ministry of Energy and Mineral Resources, through my role at PT Sigma Cipta Utama, a subsidiary of Elnusa Tbk. My work involves creating and maintaining web applications that handle intricate data related to the oil and gas sector.
                </p>
                <p>
                Previously, I have implemented and supported ERP applications for palm oil companies in North Sumatra, demonstrating my adaptability to diverse industries and business needs.
                </p>
                <p>
                I am passionate about driving innovation and continuously enhancing my skills to solve complex problems in the tech industry. My commitment to excellence is reflected in my ongoing pursuit of professional development and my dedication to delivering impactful technological solutions.
                </p>
            </div>
            
        </div>

        <Tabs defaultValue="skills" className="mt-16 md:mt-20">
          <TabsList className="h-100 grid w-full grid-cols-1 sm:grid-cols-3 gap-2 bg-gray-800 p-2 rounded-lg shadow-md">
            <TabsTrigger value="skills" className="data-[state=active]:bg-yellow-500 data-[state=active]:text-gray-900 data-[state=inactive]:hover:bg-gray-700 data-[state=inactive]:text-gray-300 px-4 py-3 text-md font-semibold rounded-md transition-all flex items-center justify-center gap-2">
                <BrainCircuit size={18} /> Skills
            </TabsTrigger>
            <TabsTrigger value="experience" className="data-[state=active]:bg-yellow-500 data-[state=active]:text-gray-900 data-[state=inactive]:hover:bg-gray-700 data-[state=inactive]:text-gray-300 px-4 py-3 text-md font-semibold rounded-md transition-all flex items-center justify-center gap-2">
                <Briefcase size={18} /> Experience
            </TabsTrigger>
            <TabsTrigger value="education" className="data-[state=active]:bg-yellow-500 data-[state=active]:text-gray-900 data-[state=inactive]:hover:bg-gray-700 data-[state=inactive]:text-gray-300 px-4 py-3 text-md font-semibold rounded-md transition-all flex items-center justify-center gap-2">
                <GraduationCap size={18} /> Education
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="skills" className="mt-8 p-6 bg-gray-800 rounded-lg shadow-inner">
            <Carousel
              plugins={autoplayPlugin.current ? [autoplayPlugin.current] : []} // Enable if Autoplay is configured
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-full"
            >
              <CarouselContent className="-ml-4">
                {skillList.map((skill, index) => (
                  <CarouselItem key={index} className="pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6">
                    <div className="p-1">
                      <Card className="bg-gray-700 border-gray-600 shadow-md hover:shadow-yellow-500/20 transition-shadow">
                        <CardContent className="flex flex-col items-center justify-center p-4 h-36 md:h-40">
                          <img 
                            src={skill.imgUrl} 
                            alt={skill.name} 
                            width={64} // Adjusted size for consistency
                            height={64} // Adjusted size for consistency
                            className="mb-2 object-contain h-16 w-16" // Ensure image fits
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = `https://placehold.co/64x64/374151/9ca3af?text=Logo`;
                                target.onerror = null; 
                            }}
                          />
                          <span className="text-xs sm:text-sm font-medium text-gray-200 text-center">{skill.name}</span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-[-15px] top-1/2 -translate-y-1/2 p-2 bg-gray-700 hover:bg-yellow-500 text-white hover:text-gray-900 rounded-full shadow-lg transition-all disabled:opacity-50 disabled:hover:bg-gray-700">
                <ChevronLeft size={20} />
              </CarouselPrevious>
              <CarouselNext className="absolute right-[-15px] top-1/2 -translate-y-1/2 p-2 bg-gray-700 hover:bg-yellow-500 text-white hover:text-gray-900 rounded-full shadow-lg transition-all disabled:opacity-50 disabled:hover:bg-gray-700">
                <ChevronRight size={20} />
              </CarouselNext>
            </Carousel>
          </TabsContent>

          <TabsContent value="experience" className="mt-8 p-6 bg-gray-800 rounded-lg shadow-inner">
            <ul className="space-y-4">
              {[
                { title: "IT Developer", company: "PT Sigma Cipta Utama (Subsidiary of Elnusa Tbk)", period: "Current" },
                { title: "Enterprise Resources Planning Implementation Consultant", company: "Cv. Ascend Solution", period: "Previous" },
                { title: "Project Freelancer Web", company: "Kantor Hukum Binsar Siringoringo, S.H., & Rekan", period: "Previous" }
              ].map((exp, index) => (
                <li key={index} className="p-4 bg-gray-700 rounded-lg shadow-md hover:bg-gray-600/70 transition-colors">
                  <h4 className="text-lg font-semibold text-yellow-400">{exp.title}</h4>
                  <p className="text-sm text-gray-300">{exp.company}</p>
                  <p className="text-xs text-gray-500">{exp.period}</p>
                </li>
              ))}
            </ul>
          </TabsContent>

          <TabsContent value="education" className="mt-8 p-6 bg-gray-800 rounded-lg shadow-inner">
            <ul className="space-y-4">
                {[
                    { degree: "Bachelor of Computer Science", institution: "Universitas Sumatera Utara", field: "Computer Science" },
                    { degree: "Fresh Graduate Academy - Microsoft Azure Fundamentals", institution: "Kominfo", field: "Cloud Computing" }
                ].map((edu, index) => (
                    <li key={index} className="p-4 bg-gray-700 rounded-lg shadow-md hover:bg-gray-600/70 transition-colors">
                        <h4 className="text-lg font-semibold text-yellow-400">{edu.degree}</h4>
                        <p className="text-sm text-gray-300">{edu.institution}</p>
                        <p className="text-xs text-gray-500">{edu.field}</p>
                    </li>
                ))}
            </ul>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}