"use client";

import { useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub, FaRegStar } from "react-icons/fa";

import { projects } from "@/src/data/projects";

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

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

          {projects.map((project, index) => (
            <article
              key={index}
              onMouseEnter={() => setHoveredProject(project.title)}
              onMouseLeave={() => setHoveredProject(null)}
              className="
                group
                overflow-hidden
                rounded-md
                border
                border-border
                bg-card
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-brand-middle/40
                cursor-pointer
              "
            >

              <div className="relative overflow-hidden">

                {hoveredProject === project.title ? (
                  <video
                    src={project.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="
                      aspect-video
                      w-full
                      object-cover
                      transition
                      duration-700
                      group-hover:scale-105
                    "
                  />
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                      aspect-video
                      w-full
                      object-cover
                      transition
                      duration-700
                      group-hover:scale-105
                    "
                  />
                )}


                <div
                  className="
                    absolute
                    inset-0
                    bg-linear-to-t
                    from-black/30
                    via-transparent
                    to-transparent
                  "
                />


                {project.contrast && (
                  <span
                    className="
                      absolute
                      top-4
                      right-4
                      z-10
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-white/10
                      bg-linear-to-r
                      from-brand-middle/80
                      to-brand-hover
                      px-4
                      py-2
                      text-sm
                      font-semibold
                      text-white
                      shadow-lg
                      backdrop-blur
                    "
                  >
                    <FaRegStar
                      className="
                        text-base
                        transition-all
                        duration-300
                        group-hover:scale-110
                        group-hover:rotate-45
                      "
                    />

                    Destaque
                  </span>
                )}

              </div>


              <div className="flex flex-col gap-5 p-6">

                <div>
                  <h3
                    className="
                      text-2xl
                      font-semibold
                      text-brand-middle/80
                    "
                  >
                    {project.title}
                  </h3>


                  <p className="mt-2 text-muted-foreground">
                    {project.description}
                  </p>
                </div>


                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <>
                    <div
                      key={index}
                      className="
                        group
                        relative
                        rounded-full
                        border
                        border-brand-middle/30
                        overflow-hidden
                        bg-brand-middle/10
                        px-3
                        py-1
                        text-sm
                        text-brand-middle
                      "
                    >
                   <span>{tech}</span>
                    <span
                      className="
                        pointer-events-none
                        absolute
                        -top-4
                        -left-5
                        h-16
                        w-8
                        rotate-12
                        bg-white/10
                        blur-lg
                        transition-transform
                        duration-700
                        group-hover:translate-x-20
                      "
                    />
                    </div>
                   
                    </>
                  ))}
                </div>


                <div
                  className="
                    flex
                    items-center
                    justify-between
                    border-t
                    border-border
                    pt-5
                  "
                >
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.demo}
                    className="
                      group
                      inline-flex
                      items-center
                      gap-2
                      rounded-xl
                      bg-linear-to-r
                      from-brand-hover/70
                      to-brand-hover
                      px-4
                      py-2
                      text-md
                      font-semibold
                      text-white
                      shadow-lg
                      shadow-brand-middle/30
                      transition-all
                      duration-300
                      hover:-translate-y-1
                    
                    "
                  >
                    Ver projeto

                    <FiExternalLink
                      size={16}
                      className="
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                        group-hover:-translate-y-1
                      "
                    />
                  </a>


                  <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.github}
                  className="
                    group
                    relative
                    inline-flex
                    items-center
                    gap-2
                    overflow-hidden
                    rounded-xl
                    border
                    border-muted-foreground/20
                    bg-brand-hover/10
                    px-4
                    py-2
                    text-md
                    font-semibold
                    text-muted-foreground
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-brand-hover/20
                  "
                >
                  <span
                    className="
                      absolute
                      inset-0
                      translate-y-full
                      bg-linear-to-r
                      from-brand-middle/20
                      to-brand-hover/20
                      transition-transform
                      duration-300
                      group-hover:translate-y-0
                    "
                  />

                  <FaGithub
                    size={17}
                    className="
                      relative
                      z-10
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                  />

                  <span className="relative z-10">
                    Código
                  </span>
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