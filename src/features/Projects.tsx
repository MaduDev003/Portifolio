"use client";
import { useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { projects } from "@/src/data/projects";
export default function Projects() {
const [hoveredProject,setHoveredProject] = useState<string | null>(null);
    

  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-20 xl:px-34"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center">
          <span className="font-heading text-5xl font-bold tracking-tight text-brand-middle md:text-6xl">
            Projetos
          </span>

          <div className="mt-5 h-px w-20 bg-brand-middle/40" />

          <h2 className="mt-5 max-w-3xl text-lg text-muted-foreground md:text-2xl">
            Transformando ideias em produtos digitais.
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <article
              onMouseEnter={() => setHoveredProject(project.title)}
              onMouseLeave={() => setHoveredProject(null)}
              key={project.title}
              className="group w-120 h-140 gap-3 rounded-md backdrop:blur-sm border border-border bg-card transition-all duration-300 hover:-translate-y-2 hover:border-brand-middle/40"
            >

             <div className="relative overflow-hidden rounded-t-md">
                {project.contrast && (
                  <span
                    className="
                        absolute top-4 right-4 z-10
                        inline-flex items-center gap-2
                        overflow-hidden
                        rounded-full
                        border border-white/10
                        bg-linear-to-r from-brand-middle/80 to-brand-hover
                        px-4 py-2
                        text-sm font-semibold text-white
                        shadow-lg
                        backdrop-blur
                        transition-all duration-300
                       
                    "
                    >
                    <FaRegStar className=" group-hover:scale-110 group-hover:rotate-45 transition-all duration-300 relative z-10 text-base" />
                    <span className="relative z-10">Destaque</span>
                    </span>
                )}

                <img
                    src={hoveredProject === project.title ? project.gif : project.image}
                    alt={project.title}
                    className="
                    aspect-video
                    w-full
                    object-cover
                    transition
                    duration-700
                    group-hover:scale-105
                    hover:border-brand-middle
                    "
                />
                </div>

              <div className="space-y-5 p-6">
                <div>
                  <h3 className="text-2xl font-semibold">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-muted-foreground">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-brand-middle/30 bg-brand-middle/10 px-3 py-1 text-sm text-brand-middle"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

               <div className="flex gap-3 py-5">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={project.demo}
                        className="
                        group relative overflow-hidden rounded-xl
                        bg-linear-to-r from-brand-middle/80 to-brand-hover
                        px-5 py-2.5
                        font-semibold text-white
                        shadow-md shadow-brand-primary/20
                        transition-all duration-300
                        hover:-translate-y-1
                        hover:shadow-xl hover:shadow-brand-primary/40
                        active:translate-y-0
                        "
                    >
                        <span className="relative z-10">Demo</span>

                    </a>

                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={project.github}
                        className="
                        group relative overflow-hidden rounded-xl
                        border border-border
                        bg-brand-primary/10 backdrop-blur-sm
                        px-5 py-2.5
                        font-semibold
                        transition-all duration-300
                        hover:-translate-y-1
                        hover:border-brand-middle
                        hover:shadow-lg hover:shadow-brand-primary/20
                        active:translate-y-0
                        "
                    >
                        <span className="relative z-10">GitHub</span>

            
                    </a>
                    </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}