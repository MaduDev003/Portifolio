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
        <div className="flex w-full flex-col items-center justify-center text-center">
          <span className="font-heading text-5xl font-bold tracking-tight text-brand-middle md:text-6xl">
            Sobre mim
          </span>

          <div className="mt-5 h-px w-20 bg-brand-middle/40" />

          <h2 className="mt-5 max-w-3xl text-lg text-muted-foreground md:text-2xl">
            Transformando ideias em produtos digitais.
          </h2>
        </div>

        <div className="mx-auto mt-16 max-w-6xl rounded-3xl border border-brand-middle/15 bg-card p-8 shadow-sm md:p-10">
          <div className="border-l-2 border-brand-middle/40 pl-6 md:pl-8">
            <p className="text-lg leading-9 text-muted-foreground">
              Minha trajetória na tecnologia começou em{" "}
              <span className="font-semibold text-foreground">2022</span>, quando iniciei
              minha formação Full Stack na{" "}
              <span className="font-semibold text-foreground">Driven Education</span>.
              Durante mais de{" "}
              <span className="font-semibold text-foreground">1.000 horas</span> de
              projetos práticos, desenvolvi uma base sólida em desenvolvimento de software,
              atuando com Front-end, Back-end, bancos de dados e arquitetura de aplicações.

              <br />
              <br />

              Essa experiência abriu as portas para minha primeira oportunidade no setor
              financeiro, onde participei da evolução de aplicações internas, trabalhando
              com Front-end, Back-end, APIs REST, microsserviços, mensageria e testes
              automatizados em um ambiente de desenvolvimento ágil.

              <br />
              <br />

              Com o tempo, descobri que meu maior interesse estava no{" "}
              <span className="font-semibold text-foreground">Front-end</span>, área em que
              consigo unir tecnologia, criatividade e atenção aos detalhes para criar
              interfaces intuitivas e de alta qualidade.

              <br />
              <br />

              Hoje, meu foco é desenvolver aplicações utilizando{" "}
              <span className="font-semibold text-foreground">
                React, Next.js, TypeScript e Tailwind CSS
              </span>
              , sempre buscando boas práticas, componentização, acessibilidade,
              performance e uma excelente experiência para o usuário.
            </p>
          </div>
        </div>

      
      </div>
    </section>
  );
}