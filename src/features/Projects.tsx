"use client";

import ProjectCard from "@/src/components/ui/ProjectCard";
import { useLanguage } from "@/src/contexts/LanguageContext";
import { projects } from "@/src/data/projects";


export default function Projects() {
  const { translations } = useLanguage();
  const translate = translations.projects;
  return (
    <section
      id="projects"
      className="
        min-h-screen
        px-6
        py-20
        xl:px-20
      "
    >
      <div className="mx-auto max-w-300">

        <div className="flex flex-col items-center text-center">
          <span
             className="
              font-heading
              bg-linear-to-r
              from-brand-middle
              to-accent
              bg-clip-text
              text-5xl
              font-bold
              tracking-tight
              text-transparent
              md:text-6xl
            "
          >
            {translate.pageTitle}
          </span>
          <div
              className="
                mt-5
                h-1
                rounded-full
                w-20
                bg-linear-to-r
                from-brand-middle
                to-accent
              "
            />

          <h2
            className="
              mt-5
              max-w-3xl
              text-md
              text-muted-foreground
              md:text-xl
            "
          >
            {translate.subTitle}
          </h2>
        </div>

        <div
          className="
            mt-14
            grid
            gap-6
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
        
           {projects.map((project, index) => 
           {
            const translatedProject = translate.projects[index];

            const experienceData = {
              ...project,
              description: translatedProject.description,
      
            };
            return (
              <ProjectCard
                key={index}
                project={experienceData}
              />
            )
          })}
          
        </div>

      </div>
    </section>
  );
}