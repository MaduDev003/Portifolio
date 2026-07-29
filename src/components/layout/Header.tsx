"use client";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { useState } from "react";
import { FiDownload } from "react-icons/fi";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import { useTheme } from "next-themes";

import SecondaryButton from "@/src/components/ui/SecondaryButton";


export default function Header() {
  const [activeLink, setActiveLink] = useState("Home");

  const { theme, setTheme } = useTheme();


  const links = [
    "Home",
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

                text-muted-foreground

                transition-all
                duration-300

                hover:text-brand-middle


                after:absolute
                after:left-1/2
                after:-bottom-1

                after:h-0.5
                after:w-0

                after:-translate-x-1/2

                after:rounded-full

                after:bg-linear-to-r
                after:from-brand-primary
                after:to-brand-end

                after:transition-all
                after:duration-300
                
                hover:after:w-full
              `}
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>


      <div className="relative flex items-center gap-2">
      <ShimmerButton
        shimmerColor="rgba(255,255,255,.22)"
        shimmerDuration="2.8s"
        shimmerSize="0.035em"
        background="linear-gradient( 120deg,
        #50457c 0%,
        #6952c4 55%,
        #8F72FD 100%)"
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
          <FiDownload size={15}/>
                Currículo
      </ShimmerButton>

        <SecondaryButton
          onClick={() =>
            setTheme(
              theme === "dark"
                ? "light"
                : "dark"
            )
          }
          className="h-9 w-9"
        >
          {theme === "dark" ? (
            <HiOutlineSun size={23} />
          ) : (
            <HiOutlineMoon size={23} />
          )}
        </SecondaryButton>

      </div>

    </header>
  );
}