"use client";

import {
  MdOutlineCalendarToday,
  MdLocationOn,
} from "react-icons/md";
import { useLanguage } from "@/src/contexts/LanguageContext";
import {Experience} from "@/src/types/Experience";

export default function ExperienceCard({
  experience,
}: {
  experience: Experience
}) {
    const { translations } = useLanguage();
    const translate = translations.experience;
  return (
    <div
      className="
        group
        w-full
        min-w-0
        md:ml-10
        max-w-full
        overflow-hidden
        rounded-2xl
        border
        bg-card/90
        p-5
        shadow-lg
        backdrop-blur-sm
        sm:p-6
        md:max-w-xl
        border-brand-middle/60
         hover:shadow-[0_16px_34px_rgba(109,74,255,.25)]
        transition-all
       hover:-translate-y-2
        duration-300
      "
    >
      <div className="mb-5 min-w-0">
        <h3
          className="
            wrap-break-word
            font-heading
            text-xl
            font-bold
            leading-tight
            text-foreground
            sm:text-2xl
          "
        >
          {experience.title}
        </h3>

        <p
          className="
            mt-2
            wrap-break-word
            text-lg
            font-medium
            text-brand-middle
          "
        >
          {experience.company}
        </p>
      </div>

      <div
        className="
          mb-6
          flex
          flex-col
          gap-3
          text-sm
          text-secondary-font
          sm:flex-row
          sm:flex-wrap
          sm:justify-between
          sm:gap-4
        "
      >
        <span className="flex min-w-0 items-start gap-2">
          <MdOutlineCalendarToday className="mt-0.5 size-4 shrink-0" />

          <span className="wrap-break-word">
            {experience.period}
          </span>
        </span>

        <span className="flex min-w-0 items-start gap-2">
          <MdLocationOn className="mt-0.5 size-4 shrink-0" />

          <span className="wrap-break-word">
            {experience.location}
          </span>
        </span>
      </div>

      <p
        className="
          mb-8
          wrap-break-word
          text-sm
          leading-relaxed
          text-muted-foreground
          sm:text-base
        "
      >
        {experience.description}
      </p>

      <div className="mt-8 min-w-0">
        <span
          className="
            text-base
            font-semibold
            text-brand-middle
            sm:text-md
          "
        >
         {translate.details}
        </span>

        <ul className="mt-4 space-y-3">
          {experience.achievements.map((achievement) => (
            <li
              key={achievement}
              className="
                flex
                min-w-0
                items-start
                gap-3
                text-sm
                leading-relaxed
                text-muted-foreground
              "
            >
              <span
                className="
                  mt-2
                  size-2
                  shrink-0
                  rounded-full
                  bg-accent
                "
              />

              <span className="min-w-0 wrap-break-word">
                {achievement}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div
        className="
          mt-6
          flex
          min-w-0
          flex-wrap
          gap-2
        "
      >
        {experience.technologies.map((tech) => (
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
              text-sm
              text-brand-middle
            "
          >
            <span className="relative z-10">
              {tech}
            </span>

            <span
              className="
                pointer-events-none
                absolute
                inset-0
                -translate-x-full
                bg-linear-to-r
                from-transparent
                via-brand-middle/30
                to-accent/40
                transition-transform
                duration-700
                group-hover:translate-x-full
              "
            />
          </div>
        ))}
      </div>
    </div>
  );
}