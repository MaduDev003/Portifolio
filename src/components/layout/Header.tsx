"use client";

import { useState } from "react";
import MobileHeader from "./MobileHeader";
import MobileDesktop from "./DesktopHeader";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [language, setLanguage] = useState<"PT" | "EN">("PT");

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
              ? "h-109"
              : "h-15"
          }
        `}
      />

      <div className="lg:hidden">
        <MobileHeader
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
          setLanguage={setLanguage}
          language={language}
          links={links}
        />
      </div>

      <div className="hidden lg:flex">
        <MobileDesktop
          setLanguage={setLanguage}
          language={language}
          links={links}
        />
      </div>
    </>
  );
}