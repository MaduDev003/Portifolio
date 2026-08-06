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
      group
        w-115
        min-h-170
        rounded-3xl
        border
        border-border
        bg-background
        p-10
        shadow-[0_4px_14px_rgba(15,23,42,0.14)]
        transition-all
        duration-300
        hover:-translate-y-3
        hover:border-brand-middle/40
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
            <span>{tech}</span>

            <span
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  -translate-x-full
                  bg-linear-to-r
                  from-transparent
                  via-brand-middle/20
                  to-transparent
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