import { skillCategories } from "../data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="mb-10 min-h-130 px-6 py-18 xl:px-34"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center">
          <span className="font-heading text-5xl font-bold tracking-tight text-brand-middle md:text-6xl">
            Habilidades
          </span>

          <div className="mt-5 h-px w-24 bg-linear-to-r from-transparent via-brand-middle to-transparent" />
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {skillCategories.map((category) => {
            const CategoryIcon = category.icon;

            return (
              <article
                key={category.title}
                className="
                  group
                  rounded-3xl
                  border
                  border-border
                  bg-card
                  p-8
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-brand-middle/40
                 
                "
              >
                <div className="flex items-start gap-5">
                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      bg-brand-middle/10
                      text-brand-middle
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                  >
                    <CategoryIcon size={28} />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-card-foreground">
                      {category.title}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-secondary-font">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="my-6 h-px bg-linear-to-r from-brand-middle/40 via-brand-middle/10 to-transparent" />

                <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                  {category.skills.map((skill) => {
                    const Icon = skill.icon;

                    return (
                      <div
                        key={skill.name}
                        className="
                          flex
                          items-center
                          gap-3
                          transition-transform
                          duration-200
                          hover:translate-x-1
                        "
                      >
                        <Icon
                          size={20}
                          color={skill.color}
                        />

                        <span className="text-md text-muted-foreground">
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}