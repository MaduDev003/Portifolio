"use client";

import { useState } from "react";
import { FiDownload } from "react-icons/fi";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import SecondaryButton from "@/src/components/ui/SecondaryButton";
export default function Header() {
  const [activeLink, setActiveLink] = useState("Home");
  const [changeTheme, setChangeTheme] = useState<"light" | "dark">("light");
  const [changeIdiom, setChangeIdiom] = useState<"pt-br" | "en">("pt-br");

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
        border
        border-white/40
        bg-white/40
        backdrop-blur-2xl
        px-6
        shadow-[0_10px_40px_rgba(0,0,0,.08)]
        before:absolute
        before:inset-0
        before:rounded-full
        before:bg-gradient-to-b
        before:from-white/40
        before:to-transparent
        before:pointer-events-none
      "
    >

      {/* Logo */}
      <div
        className="
          relative
          font-heading
          text-lg
          font-semibold
          tracking-tight
          text-zinc-800
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
                ${
                  activeLink === item
                  ? "text-[#6D5EF7]"
                  : "text-zinc-500"
                }
                after:absolute
                after:left-1/2
                after:-bottom-2
                after:h-[2px]
                after:w-0
                after:-translate-x-1/2
                after:rounded-full
                after:bg-gradient-to-r
                after:from-[#6D5EF7]
                after:to-[#C084FC]
                after:transition-all
                after:duration-100
                ${
                  activeLink === item
                  ? "after:w-full"
                  : "hover:after:w-8"
                }
                hover:text-[#6D5EF7]
              `}
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>
      <div className="relative flex items-center gap-2">
        <button
          className="
            flex
            h-10
            items-center
            gap-2
            rounded-full
            px-5
            font-heading
            text-sm
            font-medium
            text-white
            bg-linear-to-br
            from-[#6D5EF7]
            via-[#8B5CF6]
            to-[#A855F7]
            shadow-[0_10px_25px_rgba(109,94,247,.30)]
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:shadow-[0_15px_35px_rgba(109,94,247,.45)]
            active:scale-[0.97]
          "
        >
          <FiDownload size={15}/>
          Currículo
        </button>
        <SecondaryButton 
           onClick={() =>
            setChangeTheme((prev) =>
              prev === "light" ? "dark" : "light"
            )}
            children={changeTheme === "light"
            ? <HiOutlineSun size={23}/>
            : <HiOutlineMoon size={23}/>
          }  
           />
        
        <SecondaryButton
          onClick={() =>
            setChangeIdiom((prev) =>
              prev === "pt-br" ? "en" : "pt-br"
            )}
            children={changeIdiom === "pt-br" ? "PT" : "EN"}
        />
       
      </div>
    </header>
  );
}