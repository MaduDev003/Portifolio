export default function ExperienceCard({
  experience,
}: {
  experience: {
    title: string;
    company: string;
    period: string;
    description: string;
    technologies: string[];
  };
}) {

  return (

    <div
  className="
    w-115
    min-h-150
    rounded-3xl
    hover:border-brand-middle/40
    border
    border-border
    bg-card
    p-10
    shadow-xl
    transition-all
    duration-300
    hover:-translate-y-3
  "
>

      <div
        className="
          flex
          justify-between
          items-start
          gap-4
          mb-6
        "
      >

        <h3
          className="
            text-3xl
            font-bold
          "
        >
          {experience.title}
        </h3>


        <span
          className="
            text-sm
            text-brand-middle
            whitespace-nowrap
          "
        >
          {experience.period}
        </span>

      </div>



      <p
        className="
          text-lg
          font-medium
          mb-4
        "
      >
        {experience.company}
      </p>



      <p
        className="
          text-muted-foreground
          leading-relaxed
          text-base
          mb-8
        "
      >
        {experience.description}
      </p>




      <div
        className="
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
              bg-secondary
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