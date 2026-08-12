"use client";

import { FaCheckCircle } from "react-icons/fa";
import { useLanguage } from "@/src/contexts/LanguageContext";
import { aboutMe } from "../data/aboutMe";

export default function AboutMe() {
  const { translations } = useLanguage();
  const translate = translations.aboutMe;

  return (
    <section
      id="about"
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

      <div className="relative z-10 mx-auto max-w-7xl">
        <div
          className="
            flex
            flex-col
            items-center
            text-center
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

          <h2
            className="
              mt-5
              max-w-3xl
              text-lg
              text-muted-foreground
              md:text-2xl
            "
          >
            {translate.subTitle}
          </h2>
        </div>

        <div
          className="
            mt-16
            grid
            gap-8
            px-12
            md:px-16
            lg:grid-cols-3
            lg:px-0
          "
        >
          {aboutMe.map((information) => {
            const Icon = information.icon;
            const content = translate[information.key];

            return (
              <article
                key={information.key}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-brand-middle/15
                  bg-card
                  p-8
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-brand-middle/40
                "
              >
                <span
                  className="
                    absolute
                    inset-0
                    bg-linear-to-br
                    from-brand-middle/10
                    to-accent/10
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                <div className="relative z-10">

                  <div
                    className="
                      mb-6
                      flex
                      size-14
                      items-center
                      justify-center
                      rounded-2xl
                      bg-brand-middle/10
                      text-brand-middle
                      transition-all
                      duration-300
                      group-hover:bg-accent/40
                      group-hover:text-brand-middle/90
                    "
                  >
                    <Icon size={24} />
                  </div>

                  <h3
                    className="
                      text-2xl
                      font-semibold
                      text-foreground
                    "
                  >
                    {content.title}
                  </h3>

                  <p
                    className="
                      mt-4
                      leading-7
                      text-muted-foreground
                    "
                  >
                    {content.description}
                  </p>

                  <div className="my-6 h-px bg-border" />

                  <ul className="space-y-3">
                    {content.highlights.map((item) => (
                      <li
                        key={item}
                        className="
                          flex
                          items-center
                          gap-3
                          text-sm
                          text-muted-foreground
                        "
                      >
                        <FaCheckCircle
                          className="
                            shrink-0
                            text-brand-middle
                            group-hover:text-accent
                          "
                          size={14}
                        />

                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}