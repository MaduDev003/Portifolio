"use client";

import { useState } from "react";
import ProjectCard from "@/src/components/ui/ProjectCard";
import { projects } from "@/src/data/projects";


export default function Projects() {
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
              text-5xl
              font-bold
              tracking-tight
              text-brand-middle
              md:text-6xl
            "
          >
            Projetos
          </span>

          <div className="mt-5 h-px w-20 bg-brand-middle/40" />

          <h2
            className="
              mt-5
              max-w-3xl
              text-lg
              text-muted-foreground
              md:text-2xl
            "
          >
            Transformando ideias em produtos digitais.
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
        
           {projects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
              />
            ))}
        </div>

      </div>
    </section>
  );
}