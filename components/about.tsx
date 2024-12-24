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
      <Label className="text-3xl font-bold mb-4"> About</Label>
      <section className="text-lg text-justify flex flex-col gap-2">
        <Fade>
          <p className="mt-4">
          Hi, I&apos;m a Computer Science graduate from Universitas Sumatera Utara. During my studies, I acquired the necessary knowledge and skills in computer science, including programming, data analysis, and software development.
          </p>
        </Fade>
        <Fade>
        <p>
        I&apos;m an enthusiastic and honest individual with strong critical thinking skills. In terms of hard skills, I have proficiency in Node.js, .NET Core, HTML CSS, and Next JS. As an IT Developer, I have been working at PT Sigma Cipta Utama, a subsidiary of Elnusa Tbk, where I&apos;m responsible for developing the web application for datamigas.esdm.go.id, including the portal and landing page.
        </p>
        </Fade>
        <Fade>
        <p>
        Furthermore, I have experience in implementing and supporting an ERP application for a palm oil company in North Sumatra. I can adapt easily with new working environments and possess the ability to solve problems with critical thinking. I continuously enhance my skills through relevant training programs. I have obtained a global certificate from Microsoft through Fresh Graduate Academy by Kominfo for Microsoft Azure Fundamentals. Additionally, I also took course for Talend and Data Warehouse system on professional level.
        </p>
        </Fade>
        <Fade>
        <p>
        With my technical proficiency as well as strong soft skills such as honesty, enthusiasm, critical thinking, and adaptability, I&apos;m ready to take on challenges in application development field and make a positive contribution in the workplace.
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
