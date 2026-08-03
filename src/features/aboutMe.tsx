export default function AboutMe() {
  return (
    <section
      id="about"
      className="py-18 xl:px-24 px-6 mb-10"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex w-full flex-col items-center justify-center text-center">
          <span className="text-5xl font-heading font-bold tracking-tight text-brand-middle md:text-6xl">
            Sobre mim
          </span>

          <div className="mt-5 h-px w-20 bg-brand-middle/40" />

          <h2 className="mt-5 max-w-3xl text-lg text-muted-foreground md:text-2xl">
            Transformando ideias em produtos digitais.
          </h2>
      </div>

        

         <div className="mx-auto mt-16 max-w-6xl rounded-3xl border border-brand-middle/15 bg-card/40 p-8 backdrop-blur-sm md:p-10">
          <div className="border-l-2 border-brand-middle/40 pl-6 md:pl-8">
            <p className="text-lg leading-9 text-muted-foreground">
              Minha jornada na tecnologia começou em{" "}
              <span className="font-semibold text-foreground">2022</span>, quando
              ingressei na{" "}
              <span className="font-semibold text-foreground">Driven Education</span>,
              uma escola de tecnologia focada na formação de desenvolvedores por meio de
              projetos práticos e trabalho em equipe. Durante essa formação Full Stack,
              com mais de{" "}
              <span className="font-semibold text-foreground">1.000 horas</span>, construí
              uma base sólida em desenvolvimento de software, atuando com Front-end,
              Back-end, bancos de dados, testes e arquitetura de aplicações.

              <br />
              <br />

              Essa experiência me preparou para conquistar minha{" "}
              <span className="font-semibold text-foreground">
                primeira oportunidade profissional no setor financeiro
              </span>
              , onde atuei tanto no Front-end quanto no Back-end. Fui responsável pela
              evolução de um portal interno utilizado por colaboradores da empresa,
              desenvolvendo novas funcionalidades, corrigindo bugs e implementando
              melhorias contínuas. Também trabalhei com APIs REST, microsserviços,
              mensageria, testes automatizados e integração entre sistemas, aprendendo a
              construir soluções escaláveis e de fácil manutenção em um ambiente
              corporativo.

              <br />
              <br />

              Foi durante essa jornada que descobri o quanto me identificava com o{" "}
              <span className="font-semibold text-foreground">Front-end</span>. Percebi
              que era nessa área que poderia unir engenharia, criatividade e atenção aos
              detalhes para desenvolver interfaces modernas, acessíveis, performáticas e
              centradas na experiência do usuário.

              <br />
              <br />

              Hoje, direciono minha carreira para o desenvolvimento Front-end utilizando{" "}
              <span className="font-semibold text-foreground">
                React, Next.js, TypeScript e Tailwind CSS
              </span>
              , aprofundando meus conhecimentos em arquitetura, Design Systems,
              componentização, acessibilidade e performance. Meu objetivo é criar
              produtos digitais que entreguem valor tanto para os usuários quanto para as
              equipes responsáveis por evoluí-los.
            </p>
          </div>
       </div>

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