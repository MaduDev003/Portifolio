export default function AboutMe() {
  return (
    <section
      id="about"
      className="py-18 xl:px-24 px-6"
    >
      <div className="mx-auto max-w-7xl">
        <span className="text-lg font-medium uppercase tracking-[.3em] text-brand-middle">
          / 01 Sobre mim
        </span>

        <h2 className="mt-6 max-w-6xl text-4xl font-bold leading-tight font-heading text-card-foreground md:text-4xl">
          Transformando Ideias em produtos digitais.
        </h2>

            <p className="mt-12 max-w-6xl text-lg leading-9 text-muted-foreground">
        Minha jornada na tecnologia começou em{" "}
        <span className="font-semibold text-foreground">2022</span>, quando
        ingressei na{" "}
        <span className="font-semibold text-foreground">Driven Education</span>,
        em uma formação Full Stack com mais de{" "}
        <span className="font-semibold text-foreground">1.000 horas</span>{" "}
        dedicadas a projetos práticos. Durante esse período, desenvolvi aplicações
        Front-end e Back-end, trabalhei com bancos de dados, testes e arquitetura de
        software, construindo uma base sólida que me preparou para conquistar minha{" "}
        <span className="font-semibold text-foreground">
            primeira oportunidade profissional
        </span>
        . Foi nessa experiência que percebi o quanto gostava de transformar problemas
        em soluções através do código. Ao longo da graduação em{" "}
        <span className="font-semibold text-foreground">
            Engenharia de Software
        </span>
        , encontrei no{" "}
        <span className="font-semibold text-foreground">Front-end</span> a área onde
        consigo unir engenharia, criatividade e atenção aos detalhes para criar
        interfaces modernas, acessíveis e performáticas. Hoje, busco desenvolver
        produtos que não sejam apenas funcionais, mas que também ofereçam uma
        experiência intuitiva e agradável para quem os utiliza.
        </p>

        <div className="mt-15 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand-middle/40">
            <span className="text-sm font-medium uppercase tracking-[.15em] text-brand-middle">
              Início
            </span>

            <h3 className="mt-4 text-xl font-semibold text-card-foreground">
              Formação
            </h3>

            <p className="mt-3 leading-7 text-muted-foreground">
              Formação Full Stack com foco em projetos práticos e uma base
              sólida em desenvolvimento de software.
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand-middle/40">
            <span className="text-sm font-medium uppercase tracking-[.15em] text-brand-middle">
              Carreira
            </span>

            <h3 className="mt-4 text-xl font-semibold text-card-foreground">
              Primeira oportunidade
            </h3>

            <p className="mt-3 leading-7 text-muted-foreground">
              A experiência prática consolidou meus conhecimentos e fortaleceu
              minha evolução como desenvolvedora.
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand-middle/40">
            <span className="text-sm font-medium  uppercase tracking-[.15em] text-brand-middle">
              Hoje
            </span>

            <h3 className="mt-4 text-xl font-semibold text-card-foreground">
              Front-end
            </h3>

            <p className="mt-3 leading-7 text-muted-foreground">
              Desenvolvendo interfaces modernas com foco em Design Systems,
              acessibilidade, performance e experiência do usuário.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}