"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import Autoplay from "embla-carousel-autoplay";
import { skillList } from "@/app/data/skill";

import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import { Fade } from "react-awesome-reveal";
import Image from "next/image";


export default function About() {
  return (
    <section className="py-10 px-4 md:px-6 lg:px-8" id="about">
      <Label className="text-2xl md:text-3xl font-bold mb-4"> About</Label>
      <section className="text-lg text-justify flex flex-col gap-2">
        <Fade>
          <p className="mt-4">
          I&apos;m Minter Prasetyo Rajagukguk, a dedicated Software Developer specializing in Node.js, .NET Core, and Next.js. With a strong foundation in building scalable and efficient web applications, I focus on delivering high-quality solutions that meet complex technical challenges.
          </p>
        </Fade>
        <Fade>
        <p>
        Currently, I contribute to the development of datamigas.esdm.go.id, a project under the Ministry of Energy and Mineral Resources, through my role at PT Sigma Cipta Utama, a subsidiary of Elnusa Tbk. My work involves creating and maintaining web applications that handle intricate data related to the oil and gas sector.
        </p>
        </Fade>
        <Fade>
        <p>
        Previously, I have implemented and supported ERP applications for palm oil companies in North Sumatra, demonstrating my adaptability to diverse industries and business needs.
        </p>
        </Fade>
        <Fade>
        <p>
        I am passionate about driving innovation and continuously enhancing my skills to solve complex problems in the tech industry. My commitment to excellence is reflected in my ongoing pursuit of professional development and my dedication to delivering impactful technological solutions.
        </p>
        </Fade>
      </section>

      <Tabs defaultValue="skills" className="mt-4">
        <TabsList>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="experience">Experiences</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
        </TabsList>
        <TabsContent value="skills">
          <Carousel
            plugins={[
              Autoplay({
                delay: 1500,
              }),
            ]}
            className="w-full max-w-full"
          >
            <CarouselContent className="-ml-1">
              {skillList.map((skill, index) => (
                <div key={index}>
                  <CarouselItem className="pl-1 md:basis-1/3 lg:basis-1/3">
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6 h-32" >
                          <Image src={`${skill.imgUrl}`} alt={skill.name} width={100} height={100} />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                </div>
              ))}
            </CarouselContent>
            {/* <CarouselPrevious />
            <CarouselNext /> */}
          </Carousel>
        </TabsContent>
        <TabsContent value="experience">
          <ul className="list-disc text-sm px-4 text-slate-600 font-bold">
            <li>IT Developer at PT Sigma Cipta Utama</li>
            <li>Enterprise Resources Planning Implementation Consultant at Cv. Ascend Solution</li>
            <li>
              Project Freelancer Web Kantor Hukum Binsar Siringoringo, S.H., &
              Rekan
            </li>
          </ul>
        </TabsContent>
        <TabsContent value="education">
          <ul className="list-disc text-sm px-4 text-slate-600 font-bold">
            <li>Bachelor of Computer Science at Universitas Sumatera Utara</li>
            <li>Fresh Graduate Academy by Kominfo for Microsoft Azure Fundamentals</li>
          </ul>
        </TabsContent>
      </Tabs>
    </section>
  );
}
