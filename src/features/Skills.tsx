
import { skillCategories } from "../data/skills";
import SecondaryButton from "../components/ui/SecondaryButton";

export default function Skills() {
  return (
    <section id="skills" className="py-20 xl:px-24 px-6">
      <div className="mx-auto max-w-7xl">
        <span className="text-lg font-medium uppercase tracking-[.3em] text-brand-middle">
          / 02 Habilidades
        </span>

        <div className="mt-10 space-y-12">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <div className="mb-5">
                <h3 className="text-xl font-semibold text-card-foreground">
                  {category.title}
                </h3>

                <p className="mt-1 text-sm text-muted-foreground">
                  {category.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <SecondaryButton
                      key={skill.name}
                      className="h-12 rounded-xl px-5 flex items-center gap-2 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03]"
                    >
                      <Icon size={22} color={skill.color} />
                      <span>{skill.name}</span>
                    </SecondaryButton>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}