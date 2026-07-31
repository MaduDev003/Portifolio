"use client";

import { ShimmerButton } from "@/components/ui/shimmer-button";
import { useState } from "react";
import { FiDownload } from "react-icons/fi";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

export default function Header() {
  const [activeLink, setActiveLink] = useState("Inicio");

  const links = [
    {
      label: "Inicio",
      href: "#presentation",
    },
    {
      label: "Sobre mim",
      href: "#about",
    },
    {
      label: "Habilidades",
      href: "#skills",
    },
    {
      label: "Experiência",
      href: "#experience",
    },
    {
      label: "Projetos",
      href: "#projects",
    },
    {
      label: "Contato",
      href: "#contact",
    },
  ];

  return (
    <>
      <div
        className="
          fixed
          top-0
          left-0
          z-40
          h-15
          w-full
          bg-background/30
          backdrop-blur-xl
        "
      />

      <header
        className="
          fixed
          top-1
          left-1/2
          -translate-x-1/2
          z-50
          flex
          h-14
          w-[78%]
          max-w-6xl
          items-center
          justify-between
          rounded-full
          bg-card
          border
          border-[#6e5cb836]
          px-6
          shadow-[0_10px_40px_var(--header-shadow)]

          before:absolute
          before:inset-0
          before:rounded-full
          before:bg-linear-to-r
          before:from-header-highlight
          before:to-transparent
          before:pointer-events-none
        "
      >
        <div
          className="
            relative
            font-heading
            text-foreground
            text-lg
            font-semibold
            tracking-tight
          "
        >
          Madu.
        </div>

        <nav className="relative">
          <ul className="flex items-center gap-9">
            {links.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setActiveLink(item.label)}
                  className={`
                    relative
                    cursor-pointer
                    text-sm
                    font-medium
                    transition-all
                    duration-300

                    after:absolute
                    after:left-1/2
                    after:-bottom-1
                    after:h-0.5
                    after:-translate-x-1/2
                    after:rounded-full
                    after:bg-linear-to-r
                    after:from-brand-primary
                    after:to-brand-end
                    after:transition-all
                    after:duration-300

                    ${
                      activeLink === item.label
                        ? "after:w-full"
                        : "after:w-0"
                    }

                    hover:after:w-full
                  `}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="relative flex items-center gap-2">
          <a
            href="/Maria_Eduarda_Marinho_Schwarz_CV.pdf"
            download
          >
            <ShimmerButton
              shimmerColor="rgba(255,255,255,.65)"
              shimmerDuration="2.8s"
              shimmerSize="0.2em"
              background="#7d68cc"
              borderRadius="27px"
              className="
                h-10
                px-7
                gap-2
                text-sm
                font-medium
                text-white
                transition-all
                duration-300
                hover:-translate-y-0.5
              "
            >
              <FiDownload size={18} />
              Currículo
            </ShimmerButton>
          </a>

          <div
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              border
              border-button-secondary-border
              bg-button-secondary-bg
              text-button-secondary-text
              shadow-[0_2px_8px_rgba(15,23,42,0.06)]
              transition-all
              duration-300
              ease-out
              hover:-translate-y-0.5
              hover:scale-[1.03]
              hover:border-button-secondary-hover-border
              hover:bg-button-secondary-hover-bg
              hover:text-button-secondary-hover-text
              hover:shadow-[0_8px_22px_rgba(109,94,247,.14)]
            "
          >
            <AnimatedThemeToggler
              duration={900}
              className="cursor-pointer"
            />
          </div>
        </div>
      </header>
    </>
  );
}