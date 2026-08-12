"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { experiences } from "@/src/data/experiences";
import { useLanguage } from "@/src/contexts/LanguageContext";
import TimelinePoint from "@/src/components/ui/TimelinePoint";
import ExperienceCard from "@/src/components/ui/ExperienceCard";


export default function Experience() {
  const { translations } = useLanguage();
  const translate = translations.experience;

  const lineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: lineRef,
    offset: ["start center", "end end"],
  });

  const lineHeight = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"],
  );

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
          h-0.5
          bg-linear-to-r
          from-brand-middle
          to-accent
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl lg:px-0 md:px-10 ">
        <div
          className="
            mb-20
            flex
            w-full
            flex-col
            items-center
            justify-center
            text-center
            md:mb-25
          "
        >
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
              w-20
              rounded-full
              bg-linear-to-r
              from-brand-middle
              to-accent
            "
          />
        </div>

        <div
          ref={lineRef}
          className="
            relative
            flex
            flex-col
            gap-16
            px-4
            pl-14
            sm:px-6
            md:px-8
            lg:gap-40
            lg:px-2
            lg:pl-0
          "
        >
          <div
            className="
              absolute
              top-0
              bottom-0
              left-5
              md:left-3
              w-1
              overflow-hidden
              rounded-full
              bg-brand-soft
              lg:left-1/2
              lg:w-2
              lg:-translate-x-1/2
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
                w-full
                grid-cols-1
                items-start
                lg:grid-cols-[1fr_auto_1fr]
              "
            >
              <div className="flex w-full justify-center lg:hidden">
                <div className="w-full max-w-2xl">
                  <ExperienceCard experience={experience} />
                </div>
              </div>

              <div
                className={
                  experience.side === "left"
                    ? "hidden pr-14 lg:flex"
                    : "hidden lg:block"
                }
              >
                {experience.side === "left" && (
                  <ExperienceCard experience={experience} />
                )}
              </div>

              <div
                className="
                  absolute
                  left-[-53]
                  md:left-[-14]
                  lg:left-3
                  top-0
                  md:-translate-x-1/2
                  lg:static
                  lg:translate-x-1
                "
              >
                <TimelinePoint />
              </div>

              <div
                className={
                  experience.side === "right"
                    ? "hidden pl-14 lg:flex"
                    : "hidden lg:block"
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