"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import TimelinePoint from "@/src/components/ui/TimelinePoint";
import ExperienceCard from "@/src/components/ui/ExperienceCard";
import {experiences} from "@/src/data/experiences";


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
      className="relative overflow-hidden border-y border-border/40 bg-brand-middle/5 py-20 xl:px-34"
    >
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-brand-hover/5 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-brand-hover/5 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-25 flex w-full flex-col items-center justify-center text-center">
          <span className="font-heading text-5xl font-bold tracking-tight text-brand-middle md:text-6xl">
            Experiência
          </span>

          <div className="mt-5 h-px w-20 bg-brand-middle/40" />
        </div>

        <div
          ref={lineRef}
          className="relative flex flex-col gap-40"
        >
          <div
            className="
              absolute
              top-0
              bottom-0
              left-1/2
              w-3
              -translate-x-1/2
              overflow-hidden
              rounded-full
              bg-button-secondary-bg
            "
          >
            <motion.div
              style={{ height: lineHeight }}
              className="
                absolute
                top-0
                left-0
                w-full
                rounded-full
                bg-linear-to-b
                from-brand-primary
                via-brand-hover
                to-brand-end
                shadow-[0_0_20px_rgba(168,85,247,0.8)]
              "
            />
          </div>

          {experiences.map((experience, index) => (
            <div
              key={index}
              className="relative grid grid-cols-[1fr_auto_1fr] items-start"
            >
              <div
                className={
                  experience.side === "left"
                    ? "flex justify-end pr-14"
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