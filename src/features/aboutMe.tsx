import {
  FaRocket,
  FaBriefcase,
  FaHeart,
  FaCheckCircle,
} from "react-icons/fa";

const aboutCards = [
  {
    icon: FaRocket,
    title: "Minha jornada",
    description:
      "Minha trajetória na tecnologia começou em 2022, quando fui aprovada no processo seletivo da Driven Education para a formação Full Stack. Durante esse período construí uma base sólida por meio de projetos práticos, desafios semanais e trabalho em equipe.",

    highlights: [
      "Formação Full Stack",
      "HTML, CSS e JavaScript",
      "React e TypeScript",
      "Node.js, PostgreSQL e MongoDB",
      "Projetos semanais individuais e em equipe",
    ],
  },
  {
    icon: FaBriefcase,
    title: "Minha experiência",
    description:
      "Minha primeira oportunidade profissional foi no setor financeiro, onde atuei por mais de 3 anos desenvolvendo aplicações internas. Foi uma experiência que consolidou minha visão sobre engenharia de software e desenvolvimento de produtos.",

    highlights: [
      "Front-end e Back-end",
      "APIs REST",
      "Microsserviços",
      "Mensageria",
      "Testes automatizados",
      "Metodologias Ágeis",
    ],
  },
  {
    icon: FaHeart,
    title: "O que me move",
    description:
      "Hoje encontrei no Front-end o espaço onde consigo unir criatividade e tecnologia. Meu propósito é desenvolver interfaces modernas, acessíveis e performáticas, colocando a experiência do usuário no centro de cada decisão.",

    highlights: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Acessibilidade",
      "Experiência do Usuário",
    ],
  },
];

export default function AboutMe() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-y border-border/40 bg-brand-middle/5 py-20 xl:px-34"
    >
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-brand-hover/5 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-brand-hover/5 to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <span className="font-heading text-5xl font-bold tracking-tight text-brand-middle md:text-6xl">
            Sobre mim
          </span>

          <div className="mt-5 h-px w-20 bg-brand-middle/40" />

          <h2 className="mt-5 max-w-3xl text-lg text-muted-foreground md:text-2xl">
            Transformando ideias em produtos digitais.
          </h2>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {aboutCards.map((card) => {
            const Icon = card.icon;

            return (
              <article
                key={card.title}
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
                      translate-y-full
                      bg-linear-to-r
                      from-brand-middle/10
                      to-brand-hover/10
                      transition-transform
                      duration-300
                      group-hover:translate-y-0
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
                      group-hover:bg-brand-primary/50
                    "
                  >
                    <Icon size={24} />
                  </div>

                  <h3 className="text-2xl font-semibold">
                    {card.title}
                  </h3>

                  <p className="mt-4 leading-7 text-muted-foreground">
                    {card.description}
                  </p>

                  <div className="my-6 h-px bg-border" />

                  <ul className="space-y-3">
                    {card.highlights.map((item) => (
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
                          className="shrink-0 text-brand-middle"
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