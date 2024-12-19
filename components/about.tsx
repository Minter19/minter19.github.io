import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {Label} from "@/components/ui/label";


export default function About() {
    return (
        <section className="py-10 px-4 md:px-6 lg:px-8" id="about">
            <Label className="text-3xl font-bold mb-4"> About</Label>
            <section className="text-lg text-justify">
                <p className="mt-4">Hi, I am an enthusiastic and honest individual with strong critical thinking skills. In terms of hard skills, I have proficiency in Node.js, .NET Core, and HTML CSS, Next JS. As an IT Developer, I have been working at PT Sigma Cipta Utama, a subsidiary of Elnusa Tbk, where I am responsible for developing the web application datamigas.esdm.go.id, including the portal and landing page.</p>
                <p>Furthermore, I have experience in implementing and supporting an ERP application for a palm oil company in North Sumatra. I am easily adaptable to work environments and possess the ability to solve problems with critical thinking.</p>
                <p>I continuously enhance my skills through relevant training programs. I have obtained a global certificate from Microsoft through the Fresh Graduate Academy Kominfo for Microsoft Azure Fundamentals. Additionally, I have a certificate in Talend learning.</p>
                <p>I am a graduate of Sumatera Utara University with a major in Computer Science. During my studies, I acquired the necessary knowledge and skills in computer science, including programming, data analysis, and software development.</p>
                <p>With my technical proficiency in Node.js, .NET Core, and HTML, as well as strong soft skills such as honesty, enthusiasm, critical thinking, and adaptability, I am ready to take on challenges in the application development field and make a positive contribution in the workplace.</p>
            </section>
            <Tabs defaultValue="skills" className="w-[400px] mt-4">
                <TabsList>
                    <TabsTrigger value="skills">Skills</TabsTrigger>
                    <TabsTrigger value="experience">Experiences</TabsTrigger>
                    <TabsTrigger value="education">Education</TabsTrigger>
                </TabsList>
                <TabsContent value="skills">
                    <ul className="list-disc text-sm px-4 text-slate-600 font-bold">
                        <li>Node.js</li>
                        <li>React</li>
                        <li>Typescript</li>
                        <li>Dotnet</li>
                        <li>Next.js</li>
                        <li>Tailwind CSS</li>
                        <li>Jenkins</li>
                        <li>Git</li>
                        <li>PostgreSQL</li>
                    </ul>
                </TabsContent>
                <TabsContent value="experience">
                    <ul className="list-disc text-sm px-4 text-slate-600 font-bold">
                        <li>IT Developer at PT Sigma Cipta Utama</li>
                        <li>Enterprise Resources Planning Implementation Consultant</li>
                        <li>Project Freelancer Web Kantor Hukum Binsar Siringoringo, S.H., & Rekan</li>
                    </ul></TabsContent>
                <TabsContent value="education">
                    <ul className="list-disc text-sm px-4 text-slate-600 font-bold">
                        <li>Bachelor of Computer Science at Universitas Sumatera Utara</li>
                    </ul>
                </TabsContent>
            </Tabs>
        </section>
    )
}