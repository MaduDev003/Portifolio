"use client";

import { useLanguage } from "@/src/contexts/LanguageContext";
import { skillCategories } from "../data/skills";

export default function Skills() {
  const { translations } = useLanguage();

  const translate = translations.skills;

  return (
    <section
      id="skills"
      className="
        relative
        overflow-hidden
        py-24
        xl:px-34
      "
    >
      <div className="mx-auto max-w-7xl">

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
            {translate.pageTitle}
          </span>

          <div
            className="
              mt-5
              h-1
              w-24
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
              leading-8
              text-muted-foreground
              md:text-xl
            "
          >
            {translate.subTitle}
          </h2>
        </div>

        <div
          className="
            mt-20
            grid
            gap-8
            px-12
            md:px-16
            lg:grid-cols-2
            lg:px-0
          "
        >
          {skillCategories.map((category, index) => {
            const CategoryIcon = category.icon;

            return (
              <article
                key={index}
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
                  hover:-translate-y-1
                  hover:border-brand-middle/35
                "
              >

                <span
                  className="
                    absolute
                    inset-0
                    bg-linear-to-br
                    from-brand-middle/8
                    via-transparent
                    to-accent/10
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                <div className="relative z-10">

                  <div className="flex items-center gap-5">
                    <div
                      className="
                        flex
                        size-14
                        items-center
                        justify-center
                        rounded-2xl
                        bg-brand-middle/25
                        text-brand-middle
                        transition-all
                        duration-300
                        group-hover:bg-brand-middle/15
                      "
                    >
                      <CategoryIcon size={24} />
                    </div>

                    <div className="flex-1">
                      <h3
                        className="
                          font-heading
                          text-2xl
                          font-semibold
                          text-foreground
                        "
                      >
                        {translate.categories[category.key]}
                      </h3>

                      <div
                        className="
                          mt-3
                          h-px
                          w-28
                          bg-linear-to-r
                          from-brand-middle
                          to-accent
                        "
                      />
                    </div>
                  </div>
                  <div
                    className="
                      mt-8
                      flex
                      flex-wrap
                      gap-3
                    "
                  >
                    {category.skills.map((skill) => {
                      const Icon = skill.icon;

                      return (
                        <div
                          key={skill.name}
                          className="
                            group/item
                            flex
                            items-center
                            gap-2
                            rounded-xl
                            border
                            border-brand-middle/30
                            bg-brand-middle/10
                            px-4
                            py-2.5
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:border-accent/40
                            hover:bg-brand-middle/10
                          "
                        >
                          <Icon
                            size={18}
                            color={skill.color}
                            className="
                              transition-transform
                              duration-300
                              group-hover/item:scale-110
                            "
                          />

                          <span
                            className="
                              text-sm
                              font-medium
                              text-card-foreground
                              transition-colors
                              duration-300
                              group-hover/item:text-accent
                            "
                          >
                            {skill.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}