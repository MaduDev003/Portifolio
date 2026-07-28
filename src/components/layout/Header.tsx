"use client";

import { useState } from "react";
import { FiDownload } from "react-icons/fi";
import { ShimmerButton } from "@/components/ui/shimmer-button";

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
        w-[80%]
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
      {/* LOGO */}
      <div>Madu</div>

      {/* MENU */}
      <nav>
        <ul className="flex items-center gap-10">
          {[
            "Home",
            "Sobre mim",
            "Experiência",
            "Projetos",
            "Contato",
          ].map((item, index) => (
            <li
              onClick={() => setActiveLink(item)}
              key={index}
              className={`
              relative
              cursor-pointer
              font-heading
              transition-all
              duration-200
              after:absolute
              after:left-0
              after:-bottom-1
              after:h-0.5
              after:w-0
              after:rounded-full
              after:bg-[linear-gradient(135deg,#0F9D7A_0%,#2DD4BF_55%,#7DDC6F_100%)]
              after:transition-all
              after:duration-300
            text-zinc-600
              hover:bg-[linear-gradient(135deg,#0F9D7A_0%,#2DD4BF_55%,#7DDC6F_100%)]
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

      {/* BOTÃO CURRÍCULO */}
       <ShimmerButton
             shimmerColor="#D1FAE5"
             shimmerDuration="3s"
             shimmerSize="0.05em"
             background="linear-gradient(135deg,rgba(15,157,122,0.75) 0%,rgba(45,212,191,0.65) 55%,rgba(125,220,111,0.55) 100%)"
             borderRadius="12px"
             className="
               h-10
               px-6
               font-medium
               font-heading
               text-white
     
               backdrop-blur-xl
     
               border
               border-emerald-100/30
     
               shadow-[0_12px_30px_rgba(15,157,122,.25)]
     
               transition-all
               duration-300
     
               hover:-translate-y-0.5
               hover:border-emerald-100/60
               hover:shadow-[0_15px_35px_rgba(45,212,191,.35)]
     
               active:scale-[0.98]
             "
           >
              <FiDownload  />
    Currículo
           </ShimmerButton>
    </header>
  );
}