"use client";

import { useState } from "react";
import { FaRegStar } from "react-icons/fa";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    image: string;
    video?: string;
    github: string;
    demo: string;
    technologies: string[];
    contrast?: boolean;
  };
}

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="
        group
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-2xl
        border
        border-border
        bg-card
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-brand-middle/40
      "
    >

      <div className="relative overflow-hidden">

        {isHovered && project.video ? (
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
              animate-in
              fade-in
              duration-500
              transition
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
            from-black/40
            via-transparent
            to-transparent
          "
        />

        {project.contrast && (
          <span
            className="
              absolute
              left-4
              top-4
              flex
              items-center
              gap-1
              rounded-lg
              bg-brand-hover/90
              px-3
              py-1
              text-xs
              font-semibold
              text-white
              shadow-lg
            "
          >
            <FaRegStar className="transition group-hover:rotate-45" />
            Destaque
          </span>
        )}

      </div>


      <div
        className="
          flex
          flex-1
          flex-col
          gap-3
          p-4
        "
      >

        <div>
          <h3
            className="
              text-lg
              font-semibold
              text-foreground
            "
          >
            {project.title}
          </h3>

          <p
            className="
              mt-1
              text-md
              leading-relaxed
              text-muted-foreground
            "
          >
            {project.description}
          </p>
        </div>


        <div
          className="
            mt-2
            border-t
            border-border
            pt-3
          "
        >

          <div
            className="
              flex
              flex-wrap
              gap-1.5
            "
          >

            {project.technologies.map((tech) => (
              <div
                key={tech}
                className="
                  relative
                  overflow-hidden
                  rounded-full
                  border
                  border-brand-middle/30
                  bg-brand-middle/10
                  px-3
                  py-1
                  text-[13px]
                  text-brand-middle
                "
              >
                {tech}

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
            ))}

          </div>

        </div>


        <div
          className="
            mt-auto
            flex
            gap-2
            pt-3
          "
        >

          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex-1
              rounded-lg
              bg-brand-hover
              py-2
              text-center
              text-[13px]
              font-semibold
              text-white
              transition-all
              hover:-translate-y-0.5
            "
          >
            Ver projeto ↗
          </a>


          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="
              relative
              flex-1
              overflow-hidden
              rounded-lg
              border
              border-border
              py-2
              text-center
              text-[13px]
              font-semibold
              text-muted-foreground
              transition-all
              hover:border-brand-middle
              hover:text-brand-middle
            "
          >
            <span>
              Código
            </span>

            <span
              className="
                absolute
                inset-0
                translate-y-full
                bg-linear-to-r
                from-brand-middle/10
                to-brand-hover/10
                transition-transform
                duration-300
                group-hover:translate-y-0
              "
            />

          </a>

        </div>

      </div>

    </article>
  );
}