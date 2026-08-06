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
            bg-linear-to-bt
            from-black/60
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
                gap-2
                rounded-full
                border
                border-accent/30
                bg-card/80
                px-3
                py-1
                text-[12px]
                font-semibold
                text-accent
                backdrop-blur-md
              "
            >
            <span
                className="
                  size-2
                  rounded-full
                  bg-accent
                  animate-[pulse_0.7s_ease-in-out_infinite]
                "
              />
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
              gap-2
            "
          >
            {project.technologies.map((tech) => (
              <div
                key={tech}
                className="
                  rounded-md
                  border
                  border-brand-middle/30
                  px-2.5
                  py-1
                  text-[13px]
                  font-medium
                  text-brand-middle
                  transition-all
                  duration-300
                  hover:bg-brand-middle/10
                  hover:text-accent
                "
              >
                {tech}
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
              bg-brand-hover/80
              py-2
              text-center
              text-[14px]
              font-semibold
              text-white
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:shadow-[0_12px_30px_rgba(124,92,252,0.40)]
              hover:bg-brand-hover
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
              border-brand-middle/50
              bg-brand-middle/10
              py-2
              text-center
              text-[14px]
              font-semibold
              text-brand-middle
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:border-brand-middle
            "
          >
            <span className="relative z-10">
              GitHub ↗
            </span>

           <span
            className="
              pointer-events-none
              absolute
              inset-0
              -translate-x-full
              bg-linear-to-r
              from-transparent
              via-brand-middle/20
              to-accent/20
              transition-transform
              duration-700
              group-hover:translate-x-full
            "
          />
          </a>
        </div>
      </div>
    </article>
  );
}