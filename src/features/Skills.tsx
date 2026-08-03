import { mySkills } from "../data/skills";
import SecondaryButton from "../components/ui/SecondaryButton";

export default function Skills() {

  return (
    <section
      id="skills"
      className="py-18 xl:px-34 px-6 mb-10 min-h-130"
    >
      <div className="mx-auto max-w-7xl">

        <div className="flex flex-col items-center text-center">
          <span className="text-5xl font-heading font-bold tracking-tight text-brand-middle md:text-6xl">
            Habilidades
          </span>

          <div className="mt-5 h-px w-24 bg-linear-to-r from-transparent via-brand-middle to-transparent" />
        </div>


        <div className="mx-auto mt-16 flex max-w-7xl flex-wrap justify-center gap-4">

          {mySkills.map((skill) => {
            const Icon = skill.icon;

            return (
              <SecondaryButton
                key={skill.name}
                className="
                  h-12
                  rounded-full
                  px-5
                  gap-2
                  border
                  border-border!
                  bg-card/30
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-brand-middle/50!
                  hover:bg-brand-middle/5
                  text-card-foreground!
                  shadow-[0_4px_14px_rgba(15,23,42,0.14)]
                  hover:shadow-[0_12px_32px_rgba(15,23,42,0.18),0_0_28px_rgba(124,92,252,0.28)]
                  dark:shadow-[0_4px_14px_rgba(124,92,252,0.12)]
                  dark:hover:shadow-[0_12px_36px_rgba(124,92,252,0.30)]
                "
              >
                <Icon
                  size={20}
                  color={skill.color}
                />

                <span className="font-medium">
                  {skill.name}
                </span>
              </SecondaryButton>
            );
          })}

        </div>

      </div>
    </section>
  );
}