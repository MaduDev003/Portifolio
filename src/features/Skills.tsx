import { skillCategories } from "../data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden px-6 py-24 xl:px-34"
    >

      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="font-heading text-5xl font-bold tracking-tight text-brand-middle md:text-6xl">
            Habilidades
          </h2>

          <p className="mt-4 text-secondary-font">
            Tecnologias e ferramentas que utilizo para desenvolver aplicações
            modernas.
          </p>
        </div>

        <div className="mt-20 space-y-20">
          {skillCategories.map((category) => {
            const CategoryIcon = category.icon;

            return (
              <div key={category.title}>
                <div className="flex items-center gap-4">
                  <CategoryIcon
                    size={26}
                    className="text-brand-middle"
                  />

                  <h3 className="font-heading text-3xl font-semibold text-card-foreground">
                    {category.title}
                  </h3>
                </div>

                <div className="relative mt-5 mb-10">
                  <div className="absolute left-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-brand-middle shadow-[0_0_12px_#7C5CFC,0_0_28px_#7C5CFC]" />

                  <div className="ml-5 h-px bg-linear-to-r from-brand-middle via-brand-middle/40 to-transparent" />
                </div>

                <div className="grid grid-cols-2 gap-x-10 gap-y-6 md:grid-cols-3 lg:grid-cols-4">
                  {category.skills.map((skill) => {
                    const Icon = skill.icon;

                    return (
                      <div
                        key={skill.name}
                        className="
                          group
                          flex
                          items-center
                          gap-3
                          transition-all
                          duration-300
                          hover:translate-x-2
                        "
                      >
                        <Icon
                          size={20}
                          color={skill.color}
                          className="transition-transform duration-300 group-hover:scale-110"
                        />

                        <span
                          className="
                            font-medium
                            text-card-foreground
                            transition-colors
                            duration-300
                            group-hover:text-brand-middle
                          "
                        >
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}