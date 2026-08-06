import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaFileAlt,
} from "react-icons/fa";
import { ShimmerButton } from "@/components/ui/shimmer-button";

const contacts = [
  {
    title: "Email",
    description: "Entre em contato diretamente.",
    value: "mariaschwarzdev@gmail.com",
    href: "mailto:mariaschwarzdev@gmail.com",
    icon: FaEnvelope,
  },
  {
    title: "LinkedIn",
    description: "Vamos nos conectar.",
    value: "linkedin.com/in/maria-eduarda-schwarz",
    href: "https://www.linkedin.com/in/maria-eduarda-schwarz/",
    icon: FaLinkedin,
  },
  {
    title: "GitHub",
    description: "Conheça meus projetos.",
    value: "github.com/MaduDev003",
    href: "https://github.com/MaduDev003",
    icon: FaGithub,
  },
  {
    title: "Currículo",
    description: "Baixe meu CV.",
    value: "Download",
    href:"/Maria_Eduarda_Marinho_Schwarz_CV.pdf",
    icon: FaFileAlt,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        border-y
        border-border/40
        bg-card/40
        py-24
        xl:px-34
      "
    >
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.035]
        "
        style={{
          backgroundImage:
            "linear-gradient(90deg, currentColor 1px, transparent 1px), linear-gradient(currentColor 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div
        className="
          absolute
          inset-x-0
          top-0
          h-px
          bg-linear-to-r
          from-brand-middle
          to-accent
        "
      />

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-px
          bg-linear-to-r
          from-brand-middle
          to-accent
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div
          className="
            mx-auto
            flex
            max-w-3xl
            flex-col
            items-center
            text-center
          "
        >
          <span
            className="
              font-heading
              bg-linear-to-r
              from-brand-middle
              to-accent
              bg-clip-text
              text-5xl
              font-bold
              tracking-tight
              text-transparent
              md:text-6xl
            "
          >
            Vamos conversar?
          </span>

          <div
            className="
              mt-5
              h-1
              w-24
              rounded-full
              bg-linear-to-r
              from-brand-middle
              to-accent
            "
          />

          <h2
            className="
              mt-8
              text-xl
              font-semibold
              text-foreground
              md:text-2xl
            "
          >
            Aberta a novas oportunidades.
          </h2>

          <p
            className="
              mt-5
              max-w-2xl
              text-lg
              leading-8
              text-muted-foreground
            "
          >
            Se você acredita que meu perfil pode contribuir com seu time ou
            deseja conversar sobre um projeto, será um prazer conhecer mais
            sobre a oportunidade.
          </p>
        </div>

        <div
          className="
            mt-16
            grid
            gap-6
            md:grid-cols-2
            xl:grid-cols-4
          "
        >
          {contacts.map((contact) => {
            const Icon = contact.icon;

            return (
              <a
                key={contact.title}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-brand-middle/20
                  bg-brand-middle/15
                  py-6
                  px-3
                  transition-all
                  duration-300
                  backdrop-blur-xl
                  hover:-translate-y-2
                  hover:border-brand-middle/40
                "
              >
                <span
                  className="
                    absolute
                    inset-0
                    bg-linear-to-br
                    from-brand-middle/10
                    to-accent/10
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                <div className="relative z-10">
                  <div
                    className="
                      mb-5
                      flex
                      size-12
                      items-center
                      justify-center
                      rounded-xl
                      bg-brand-middle/10
                      text-brand-middle
                      transition-all
                      duration-300
                      group-hover:text-brand-middle/90
                      group-hover:bg-accent/30
                    "
                  >
                    <Icon size={22} />
                  </div>

                  <h3 className="text-lg font-semibold">
                    {contact.title}
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      text-muted-foreground
                    "
                  >
                    {contact.description}
                  </p>

                  <p
                    className="
                      mt-5
                      font-medium
                      text-brand-middle
                      transition-colors
                      group-hover:text-accent
                      
                    "
                  >
                    {contact.value}
                  </p>
                </div>
              </a>
            );
          })}
        </div>

        <div className="mt-16 flex justify-center">
          <a href="mailto:mariaschwarzdev@gmail.com">
            <ShimmerButton
              shimmerColor="rgba(255,255,255,.65)"
              shimmerDuration="2.8s"
              shimmerSize="0.2em"
              background="#5B3CC4"
              borderRadius="27px"
              className="
                h-12
                px-7
                text-sm
                font-medium
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
                shadow-[0_16px_34px_rgba(109,74,255,.25)]
              "
            >
              Enviar e-mail
            </ShimmerButton>
          </a>
        </div>
      </div>
    </section>
  );
}