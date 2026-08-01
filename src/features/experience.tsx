"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    title: "Backend Developer",
    company: "GETNET",
    period: "2023 - 2026",
    description:
      "Atuação com Node.js, APIs REST, microsserviços, testes automatizados e mensageria.",
    technologies: ["Node.js", "Jest", "RabbitMQ"],
    side: "left",
  },
  {
    title: "Front-end Developer",
    company: "Projetos Front-end",
    period: "2026",
    description:
      "Construção de interfaces modernas utilizando React, Next.js, TypeScript e Tailwind CSS.",
    technologies: ["React", "Next.js", "TypeScript"],
    side: "right",
  },
  {
    title: "UI Engineer",
    company: "Design & Interfaces",
    period: "Atual",
    description:
      "Foco em experiências digitais, animações, acessibilidade e criação de componentes reutilizáveis.",
    technologies: ["UI/UX", "Motion", "Design System"],
    side: "left",
  },
  {
    title: "Product Engineer",
    company: "Próximos passos",
    period: "Futuro",
    description:
      "Unindo engenharia e produto para criar soluções digitais completas.",
    technologies: ["Produto", "Frontend", "Arquitetura"],
    side: "right",
  },
];


export default function Experience() {
  const lineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: lineRef,
    offset: ["start center", "end end"],
  });

  const lineHeight = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"]
  );


  return (
    <section
      id="experience"
      className="py-10 xl:px-24 px-6"
    >

      <div className="mx-auto max-w-7xl">


        <span
          className="
            text-lg
            font-medium
            uppercase
            tracking-[.3em]
            text-brand-middle
          "
        >
          / 03 Experiencia
        </span>


        <h2
          className="
            text-5xl
            mt-20
            font-bold
            text-center
            mb-24
          "
        >
          Minha Jornada
        </h2>



        <div
          ref={lineRef}
          className="
            relative
            flex
            flex-col
            gap-40
          "
        >


          {/* LINHA */}
          <div
            className="
              absolute
              left-1/2
              top-0
              bottom-0
              w-3
              -translate-x-1/2
              rounded-full
              bg-button-secondary-bg
              overflow-hidden
            "
          >

            <motion.div
              style={{
                height: lineHeight,
              }}
              className="
                absolute
                top-0
                left-0
                w-full
                rounded-full
                bg-linear-to-b
                from-brand-primary
                via-brand-hover
                to-brand-end
                shadow-[0_0_20px_rgba(168,85,247,0.8)]
              "
            />

          </div>




          {experiences.map((experience, index) => (

            <div
              key={index}
              className="
                grid
                grid-cols-[1fr_auto_1fr]
                items-start
                relative
              "
            >


              {/* CARD ESQUERDA */}
              <div
                className={
                  experience.side === "left"
                    ? "flex justify-end pr-14"
                    : ""
                }
              >

                {
                  experience.side === "left" && (
                    <ExperienceCard experience={experience}/>
                  )
                }

              </div>





              {/* PONTO */}
              <TimelinePoint />





              {/* CARD DIREITA */}
              <div
                className={
                  experience.side === "right"
                    ? "flex justify-start pl-14"
                    : ""
                }
              >

                {
                  experience.side === "right" && (
                    <ExperienceCard experience={experience}/>
                  )
                }

              </div>


            </div>

          ))}


        </div>


      </div>

    </section>
  );
}





function TimelinePoint() {
  return (
    <div
      className="
        size-10
        rounded-full
        bg-brand-primary
        border-4
        border-background
        shadow-[0_0_25px_var(--brand-primary)]
        z-10
        transition-transform
        duration-300
        hover:scale-125
      "
    />
  );
}





function ExperienceCard({
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