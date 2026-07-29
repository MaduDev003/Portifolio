"use client";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { useState } from "react";
import { FiDownload } from "react-icons/fi";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { useTheme } from "next-themes";

import SecondaryButton from "@/src/components/ui/SecondaryButton";


export default function Header() {
  const [activeLink, setActiveLink] = useState("Inicio");

  const { theme, setTheme } = useTheme();


  const links = [
    "Inicio",
    "Sobre mim",
    "Experiência",
    "Projetos",
    "Contato",
  ];

  return (
   <header
    className="
      fixed
      top-2
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
      backdrop-blur-2xl
      px-6
      shadow-[0_10px_40px_var(--header-shadow)]
      before:absolute
      before:inset-0
      before:rounded-full
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
            <li
              key={item}
              onClick={() => setActiveLink(item)}
             className={`
                relative
                cursor-pointer
                text-sm
                font-medium
                transition-all
                duration-300

                ${activeLink === item ? "text-brand-middle" : "text-muted-foreground"}

                after:absolute
                after:left-1/2
                after:-bottom-1
                after:h-0.5
                after:${activeLink === item ? "w-full" : "w-0"}
                after:-translate-x-1/2
                after:rounded-full
                after:bg-linear-to-r
                after:from-brand-primary
                after:to-brand-end
                after:transition-all
                after:duration-300

                hover:text-brand-middle
                hover:after:w-full
              `}
            >
              {item}
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
        h-9
        w-9
        flex
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
        duration={400} 
        fromCenter 
        className="cursor-pointer"
      />
    </div>

    </div>
    </header>
  );
}