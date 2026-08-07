"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import TimelinePoint from "@/src/components/ui/TimelinePoint";
import ExperienceCard from "@/src/components/ui/ExperienceCard";
import { experiences } from "@/src/data/experiences";

export default function Experience() {
  const lineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: lineRef,
    offset: ["start center", "end end"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="experience"
      className="
        relative
        overflow-hidden
        border-y
        border-border/40
        bg-card/40
        py-20
        xl:px-34
      "
    >
        
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.035]
        "
        style={{
          backgroundImage:
            "linear-gradient(90deg, currentColor 1px, transparent 1px), linear-gradient(currentColor 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

        <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-0.5
           bg-linear-to-r
          from-brand-middle
          to-accent
        "
      />
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          z-50
          h-0.5
          bg-linear-to-r
                from-brand-middle
                to-accent
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div
          className="
            mb-25
            flex
            w-full
            flex-col
            items-center
            justify-center
            text-center
          "
        >
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
            Experiencia
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
        </div>

          <div
            className="
              mt-5
              h-1
              w-20
              rounded-full
              bg-linear-to-r
              from-brand-middle
              to-accent
              bg-clip-text
              text-transparent
            "
          />
        </div>


        <div
          ref={lineRef}
          className="
            relative
            flex
            flex-col
            gap-40
          "
        >
          <div
            className="
              absolute
              top-0
              bottom-0
              left-1/2
              w-2
              -translate-x-1/2
              overflow-hidden
              rounded-full
              bg-brand-soft
            "
          >
            <motion.div
              style={{ height: lineHeight }}
              className="
                absolute
                left-0
                top-0
                w-full
                rounded-full
                bg-linear-to-b
                from-brand-primary
                via-brand-middle
                to-accent
              "
            />
          </div>


          {experiences.map((experience, index) => (
            <div
              key={index}
              className="
                relative
                grid
                grid-cols-[1fr_auto_1fr]
                items-start
              "
            >
              <div
                className={
                  experience.side === "left"
                    ? "flex  pr-14"
                    : ""
                }
              >
                {experience.side === "left" && (
                  <ExperienceCard experience={experience} />
                )}
              </div>
              
              <TimelinePoint />
              <div
                className={
                  experience.side === "right"
                    ? "flex justify-start pl-14"
                    : ""
                }
              >
                {experience.side === "right" && (
                  <ExperienceCard experience={experience} />
                )}
             </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}