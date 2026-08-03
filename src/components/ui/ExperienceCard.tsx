import {
  MdOutlineCalendarToday,
  MdLocationOn,
} from "react-icons/md";

export default function ExperienceCard({
  experience,
}: {
  experience: {
    title: string;
    company: string;
    period: string;
    location: string;
    description: string;
    technologies: string[];
    achievements: string[];
  };
}) {
  return (
    <div
      className="
        w-115
        min-h-170
        rounded-3xl
        border
        border-border
        bg-background
        p-10
        shadow-[0_4px_14px_rgba(15,23,42,0.14)]
        hover:border-brand-middle/40
        hover:shadow-[0_12px_32px_rgba(15,23,42,0.18),0_0_28px_rgba(124,92,252,0.28)]
        dark:shadow-[0_4px_14px_rgba(124,92,252,0.12)]
        dark:hover:shadow-[0_12px_36px_rgba(124,92,252,0.30)]
        transition-all
        duration-300
        hover:-translate-y-3
      "
    >
      <div
        className="
          mb-6
          flex
          flex-col
          items-start
          gap-2
        "
      >
        <h3
          className="
            text-2xl
            font-bold
          "
        >
          {experience.title}
        </h3>

        <p
          className="
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
          justify-between
          gap-4
        "
      >
        <span
          className="
            whitespace-nowrap
            text-sm
            text-secondary-font
          "
        >
          <MdOutlineCalendarToday className="mr-2 inline-block" />
          {experience.period}
        </span>

        <span
          className="
            whitespace-nowrap
            text-sm
            text-secondary-font
          "
        >
          <MdLocationOn className="mr-2 inline-block" />
          {experience.location}
        </span>
      </div>

      <p
        className="
          mb-8
          text-base
          leading-relaxed
          text-muted-foreground
        "
      >
        {experience.description}
      </p>

      <div className="mt-8">
        <span
          className="
            text-md
            font-semibold
            text-brand-middle
          "
        >
          Principais conquistas:
        </span>

        <ul className="mt-4 space-y-3">
          {experience.achievements.map((achievement) => (
            <li
              key={achievement}
              className="
                flex
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
                  bg-brand-middle
                "
              />

              {achievement}
            </li>
          ))}
        </ul>
      </div>

      <div
        className="
          mt-6
          flex
          flex-wrap
          gap-2
        "
      >
        {experience.technologies.map((tech) => (
          <span
            key={tech}
            className="
              rounded-full
              bg-brand-soft
              px-4
              py-1.5
              text-sm
            "
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}