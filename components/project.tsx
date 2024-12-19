import { projectsData } from "@/app/data/project";
import { IProjectData } from "@/app/types/project";

export default function Project() {
  return (
    <section id="certificate" className="py-4 px-4 md:px-6 lg:px-8">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <div>
        {projectsData.map((project: IProjectData) => (
          <div>
            <div className="flex mt-4">
              <div className="flex-shrink-0">
                <img
                  src={`${project.imgUrl}`}
                  className="mt-2 aspect-square"
                  width={80}
                  height={80}
                  alt={`logo of }`}
                />
              </div>

              <div className="pl-2">
                <h2 className="font-bold">
                  {project.projectName}
                </h2>
                <p>{project.projectOwner}</p>
                <p className="text-slate-600">
                  Tech Stack: {project.techStack}
                </p>
                <p className="text-slate-600">
                  Link:{" "}
                  <a
                    href={`${project.projectUrl}`}
                    className="font-thin italic aspect-square"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click Me
                  </a>
                </p>
                <p className="text-justify my-2 max-w-[75%]">
                  <span className="font-bold">Description:</span> {project.description}
                </p>
              </div>
            </div>
            <hr />
          </div>
        ))}
      </div>
    </section>
  );
}
