"use client";

import { useState } from "react";
import { FiDownload } from "react-icons/fi";

const actionButton = `
  inline-flex
  items-center
  justify-center
  gap-2
  h-10
  rounded-full
  border
  border-[#A78BFA]
  bg-[#DDD6FE]
  text-[#6D28D9]
  font-heading
  font-medium
  transition-all
  duration-200
  cursor-pointer

  hover:bg-[#EDE9FE]
  hover:border-[#8B5CF6]
  hover:shadow-[0_0_12px_rgba(139,92,246,0.18)]

  active:scale-[0.98]
`;

export default function Header() {
  const [activeLink, setActiveLink] = useState<string>("Home");

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
        w-[73%]
        items-center
        justify-between
        rounded-full
        border
        border-white/30
        bg-white/60
        px-6
        backdrop-blur-2xl
        shadow-[0_8px_30px_rgba(0,0,0,0.08)]
      "
    >
      {/* Logo */}
      <div className="font-heading font-semibold text-zinc-800">
        Madu
      </div>

      {/* Menu */}
      <nav className="ml-15">
        <ul className="flex items-center justify-center gap-6">
          {[
            "Home",
            "Sobre mim",
            "Experiência",
            "Projetos",
            "Contato",
          ].map((item) => (
            <li
              key={item}
              onClick={() => setActiveLink(item)}
              className={`
                relative
                cursor-pointer
                font-heading
                text-zinc-600
                transition-all
                duration-200

                after:absolute
                after:left-0
                after:-bottom-1
                after:h-0.5
                after:w-0
                after:rounded-full
                after:bg-[linear-gradient(135deg,#6D28D9_0%,#8B5CF6_55%,#A855F7_100%)]
                after:transition-all
                after:duration-300

                hover:bg-[linear-gradient(135deg,#6D28D9_0%,#8B5CF6_55%,#A855F7_100%)]
                hover:bg-clip-text
                hover:text-transparent
                hover:after:w-full

              `}
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>

      {/* Ações */}
      <div className="flex items-center  gap-3 px-2">
        <button className={`${actionButton} px-5`}>
          <FiDownload className="h-4 w-4" />
          Currículo
        </button>

        <button className={`${actionButton} w-10 p-0`}>
          1
        </button>

        <button className={`${actionButton} w-10 p-0`}>
          1
        </button>

        <button className={`${actionButton} w-10 p-0`}>
          1
        </button>
      </div>
    </header>
  );
}