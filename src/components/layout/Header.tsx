"use client";

import { useState } from "react";
import MobileHeader from "./MobileHeader";
import DesktopHeader from "./DesktopHeader";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  const links = [
  {
    label: "home" as const,
    href: "#presentation",
  },
  {
    label: "about" as const,
    href: "#about",
  },
  {
    label: "skills" as const,
    href: "#skills",
  },
  {
    label: "experience" as const,
    href: "#experience",
  },
  {
    label: "projects" as const,
    href: "#projects",
  },
  {
    label: "contact" as const,
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
          ${openMenu ? "h-109" : "h-17"}
        `}
      />

      <div className="lg:hidden">
        <MobileHeader
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
          links={links}
        />
      </div>

      <div className="hidden lg:flex">
        <DesktopHeader
          links={links}
        />
      </div>
    </>
  );
}