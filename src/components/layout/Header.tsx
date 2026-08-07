"use client";

import { ShimmerButton } from "@/components/ui/shimmer-button";
import { useState } from "react";
import { FiDownload } from "react-icons/fi";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { HiOutlineViewList } from "react-icons/hi";

export default function Header() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
 
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
      className={`
        fixed
        top-0
        left-0
        z-40
        w-full
        bg-background/30
        backdrop-blur-xl
        transition-all
        duration-500
        ease-in-out
        ${
          openMenu
            ? "h-88"
            : "h-15"
        }
      `}
    />
      
          <header
            className="
              fixed
              top-1
              left-4
              right-4
              z-50
            "
          >
            <div
              className="
                relative
                flex
                h-14
                items-center
                justify-between
                rounded-full
                border
                border-[#6e5cb836]
                bg-card
                px-5
                shadow-[0_10px_40px_var(--header-shadow)]
              "
            >
              <div
                className="
                  font-heading
                  text-lg
                  font-semibold
                  text-foreground
                "
              >
                Madu.
              </div>
              <div
                className="
                  flex
                  items-center
                  gap-2
                "
              >
                  <button
                  onClick={() => setOpenMenu((prev) => !prev)}
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-border-button-secondary-hover-border
                    bg-button-secondary-hover-bg
                    text-button-secondary-text
                    transition-all
                    duration-300
                    ease-out
                    active:scale-95
                  "
                >
                  <HiOutlineViewList size={22} />
                </button>
                <AnimatedThemeToggler
                  duration={500}
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-border-button-secondary-hover-border
                    bg-button-secondary-hover-bg
                    text-button-secondary-text
                    transition-all
                    duration-300
                    ease-out
                    cursor-pointer
                    active:scale-95
                  "
                />
              </div>
              <div
                className={`
                absolute
                left-4
                w-[93%]
                overflow-hidden
                transition-all
                duration-500
                ease-in-out
                ${
                  openMenu
                    ? `
                      top-12
                      max-h-96
                      mt-2
                      rounded-xl
                      border
                      border-[#6e5cb836]
                      bg-card/80
                      backdrop-blur-2xl
                      shadow-lg
                      divide-y
                      divide-border
                    `
                    : `
                      top-12
                      max-h-0
                      border-0
                      bg-transparent
                      shadow-none
                    `
                }
              `}
              >
              {links.map((link, index) => (
                <div
                  key={link.href}
                  className={`
                    cursor-pointer
                    p-3
                    transition-colors
                    duration-300
                    active:bg-brand-middle/30
                    ${
                      index % 2 === 0
                        ? "bg-brand-middle/8"
                        : "bg-brand-middle/10"
                    }
                  `}
                >
                  <a
                    href={link.href}
                    className="
                      block
                      text-md
                      font-medium
                      text-button-secondary-text
                      transition-colors
                      duration-300
                    "
                  >
                    {link.label}
                  </a>
                </div>
              ))}
          </div>
        </div>
      </header>
      <header
        className="
          fixed
          top-1
          left-1/2
          -translate-x-1/2
          z-50
          hidden
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
          md:flex
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
                  
                className={`
                  relative
                  cursor-pointer
                  text-sm
                  font-medium
                  text-muted-foreground
                  transition-colors
                  duration-300
                  after:absolute
                  after:left-0
                  after:-bottom-1
                  after:h-0.5
                  after:w-full
                  after:origin-center
                  after:scale-x-0
                  after:rounded-full
                  after:bg-linear-to-r
                  after:from-brand-middle
                  after:to-accent
                  after:transition-transform
                  after:duration-300
                  after:ease-out
                  hover:text-brand-middle
                  hover:after:scale-x-100
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
              duration={600}
              className="cursor-pointer"
            />
          </div>
        </div>
      </header>
    </>
  );
}