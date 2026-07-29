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
            border-button-secondary-hover-border
            bg-accent-foreground
            px-4 
            py-2"
          >
          <span className="h-2.5 w-2.5 rounded-full bg-brand-hover animate-bounce" />

          <p className="text-sm font-medium  text-accent-foreground">
            Olá, eu sou
          </p>
        </div>

        <h1
          className="
            mt-1
            font-body
            text-card-foreground
            text-[5rem]
            font-black
            leading-[0.9]
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
            className="text-lg font-medium text-brand-middle"
          >
            Engenheira de Software · Front-End
          </TypingAnimation>
        </div>

        <p className="mt-5 max-w-130 text-lg leading-8 text-accent-foreground">
         Apaixonada por tecnologia, design e experiências digitais. Gosto de aprender continuamente 
         e explorar novas formas de desenvolver interfaces modernas, acessíveis e intuitivas.
        </p>

        <div className="mt-8 flex items-center gap-5">
        <ShimmerButton
          shimmerColor="rgba(255,255,255,.65)"
          shimmerDuration="2.8s"
          shimmerSize="0.2em"
          background="#5B3CC4"
          borderRadius="27px"
          className="
            h-12
            px-7
            text-sm
            font-medium
            text-white


            transition-all
            duration-300

            hover:-translate-y-0.5
            hover:shadow-[0_16px_34px_rgba(109,74,255,.25)]
          "
        >
          <span className="flex items-center gap-2 text-[16px]">
            Ver Projetos
            <span>↗</span>
          </span>
        </ShimmerButton>

          <div className="flex items-center gap-3">
            <SecondaryButton   className="h-12 w-12">
              <FiGithub size={23} />
            </SecondaryButton>

            <SecondaryButton className="h-12 w-12">
              <FiLinkedin size={23} />
            </SecondaryButton>

            <SecondaryButton
            className="h-12 w-12"
              hoverChildren={<HiOutlineMailOpen size={23} />}
            >
              <HiOutlineMail size={23} />
            </SecondaryButton>
          </div>
        </div>
      </div>

      <div className="hidden flex-1 items-center justify-center lg:flex" />
    </section>
  );
}