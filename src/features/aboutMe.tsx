"use client";

import { ShimmerButton } from "@/components/ui/shimmer-button";
import { TypingAnimation } from "@/components/ui/typing-animation";

import SecondaryButton from "@/src/components/ui/SecondaryButton";

import { FiGithub, FiLinkedin } from "react-icons/fi";
import { HiOutlineMail, HiOutlineMailOpen } from "react-icons/hi";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="
        flex
        min-h-screen
        items-center
        
        xl:px-24
      "
    >
      <div className="flex max-w-160 flex-1 flex-col">
        <div 
          className="
            inline-flex 
            w-fit 
            items-center 
            gap-3 
            rounded-full 
            border 
            border-violet-200 
            bg-violet-50 
            px-4 
            py-2"
          >
          <span className="h-2.5 w-2.5 rounded-full bg-[#8B5CF6]" />

          <p className="text-sm font-medium text-[#6D5EF7]">
            Olá, eu sou
          </p>
        </div>

        <h1
          className="
            mt-1
            font-body
            text-[5rem]
            font-black
            leading-[0.9]
            text-neutral-950
            md:text-[5.8rem]
            lg:text-[6.4rem]
            xl:text-[6.8rem]
          "
        >
          Maria
          <br />
          Eduarda
        </h1>

        <div className="mt-5 flex items-center gap-4">
          <div className="h-px w-8 bg-neutral-300" />
          <TypingAnimation
            duration={70}
            className="text-md font-medium text-[#6D5EF7]"
          >
            Engenheira de Software · Front-End
          </TypingAnimation>
        </div>

        <p className="mt-5 max-w-130 text-lg leading-8 text-neutral-600">
         Apaixonada por tecnologia, design e experiências digitais. Gosto de aprender continuamente 
         e explorar novas formas de desenvolver interfaces modernas, acessíveis e intuitivas.
        </p>

        <div className="mt-8 flex items-center gap-5">
          <ShimmerButton
            shimmerColor="#FFFFFF"
            shimmerDuration="2s"
            shimmerSize="0.08em"
            background="linear-gradient(180deg,#6D5EF7,#5B46E8)"
            borderRadius="16px"
            className="
              h-12
              px-7
              text-sm
              font-medium
              text-white
              shadow-[0_12px_30px_rgba(91,70,232,.18)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:shadow-[0_18px_36px_rgba(91,70,232,.28)]
            "
          >
            <span className="flex items-center gap-2">
              Explore Projects
              <span>↗</span>
            </span>
          </ShimmerButton>

          <div className="flex items-center gap-3">
            <SecondaryButton>
              <FiGithub size={18} />
            </SecondaryButton>

            <SecondaryButton>
              <FiLinkedin size={18} />
            </SecondaryButton>

            <SecondaryButton
              hoverChildren={<HiOutlineMailOpen size={20} />}
            >
              <HiOutlineMail size={20} />
            </SecondaryButton>
          </div>
        </div>
      </div>

      <div className="hidden flex-1 items-center justify-center lg:flex" />
    </section>
  );
}