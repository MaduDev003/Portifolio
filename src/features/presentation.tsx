"use client";

import { ShimmerButton } from "@/components/ui/shimmer-button";
import { InteractiveGridPattern  } from "@/components/ui/interactive-grid-pattern";
import { IoMdArrowForward } from "react-icons/io";
import SecondaryButton from "@/src/components/ui/SecondaryButton";
import foto from "@/src/assets/images/essa.png"

import { FiGithub, FiLinkedin } from "react-icons/fi";
import { HiOutlineMail, HiOutlineMailOpen } from "react-icons/hi";

export default function Presentation() {
  return (
    <section
      id="presentation"
      className="
        flex
        min-h-screen
        items-center
        mb-10
        xl:px-34
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
          <span className="h-2.5 w-2.5 rounded-full bg-accent  animate-[pulse_0.7s_ease-in-out_infinite]" />

          <p className="text-sm font-medium  text-accent-foreground">
            Olá, eu sou
          </p>
        </div>

        <h1
          className="
            mt-1
            font-heading
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
            <span
              className="
                bg-linear-to-r
                from-brand-middle
                to-accent
                bg-clip-text
                text-lg
                font-medium
                text-transparent
              "
            >
            Engenheira de Software · Front-End
          </span>
        </div>

        <p className="mt-5 max-w-130 text-lg leading-8 text-secondary-font">
         Apaixonada por tecnologia, design e experiências digitais. Gosto de aprender continuamente 
         e explorar novas formas de desenvolver interfaces modernas, acessíveis e intuitivas.
        </p>

        <div className="mt-8 flex items-center gap-5">
        <ShimmerButton
         onClick={() => {
            document
              .getElementById("projects")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
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
           <div className="w-6 h-6 bg-white/25 rounded-full flex justify-center items-center -rotate-45">
                <IoMdArrowForward size={16}/>
           </div>
          </span>
        </ShimmerButton>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/MaduDev003"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SecondaryButton 
                className="
                  h-12 w-12 rounded-full
                  shadow-[0_2px_8px_rgba(15,23,42,0.10)]
                  hover:shadow-[0_10px_24px_rgba(15,23,42,0.10),0_0_20px_rgba(124,92,252,0.18)]
                  dark.shadow-[0_2px_8px_rgba(124,92,252,0.08)]
                  dark.hover:shadow-[0_10px_28px_rgba(124,92,252,0.18)]
                ">
                <FiGithub size={23} />
              </SecondaryButton>
            </a>

             <a
                href="https://www.linkedin.com/in/maria-eduarda-schwarz/"
                target="_blank"
                rel="noopener noreferrer"
              >
              <SecondaryButton 
              className="
                h-12 w-12 rounded-full
                shadow-[0_2px_8px_rgba(15,23,42,0.10)]
                hover:shadow-[0_10px_24px_rgba(15,23,42,0.10),0_0_20px_rgba(124,92,252,0.18)]
                dark.shadow-[0_2px_8px_rgba(124,92,252,0.08)]
                dark.hover:shadow-[0_10px_28px_rgba(124,92,252,0.18)]
                ">
                <FiLinkedin size={23} />
              </SecondaryButton>
            </a>
            <a href="mailto:mariaschwarzdev@gmail.com">
              <SecondaryButton
                className="
                h-12 w-12 rounded-full
                shadow-[0_2px_8px_rgba(15,23,42,0.10)]
                hover:shadow-[0_10px_24px_rgba(15,23,42,0.10),0_0_20px_rgba(124,92,252,0.18)]
                dark.shadow-[0_2px_8px_rgba(124,92,252,0.08)]
                dark.hover:shadow-[0_10px_28px_rgba(124,92,252,0.18)]
                "
                hoverChildren={<HiOutlineMailOpen size={23} />}
              >
                <HiOutlineMail size={23} />
              </SecondaryButton>
            </a>
          </div>
        </div>
      </div>

   <div
      className="
        relative
        flex
        flex-1
        max-w-160
        items-center
        justify-center
        overflow-hidden
      "
    >
      <InteractiveGridPattern 
        squaresClassName="
          transition-all
          duration-300
          hover:scale-105
          hover:fill-brand-middle
          hover:drop-shadow-[0_0_10px_rgba(91,60,196,.45)]
        "
      />

      <img
        src={foto.src}
        alt="Minha foto"
        className="relative z-10 pointer-events-none"
      />

     
    </div>
      <div
      className="
        absolute
        top-30
        right-148
        z-20
        w-50
        rounded-xl
        border
        border-border
        bg-card/90
        p-4
        shadow-lg
        backdrop-blur-md
        pointer-events-none
      "
    >
      <p className="text-[14px] font-medium text-muted-foreground">
        Styles:
      </p>

      <div className="mt-3 space-y-2  text-md  font-mono">
        <p className="text-accent">
          position: absolute;
        </p>

        <p className="text-muted-foreground">
          padding: 4px;
        </p>

        <p className="text-muted-foreground">
          z-index: 20;
        </p>
      </div>
    </div>


    <div
      className="
        absolute
        bottom-20
        right-20
        z-20
        w-60
        rounded-xl
        border
        border-border
        bg-card/80
        p-4
        shadow-lg
        backdrop-blur-xl
        pointer-events-none
      "
    >
      <p className="text-[14px] font-medium text-muted-foreground">
        UI Component:
      </p>

      <div className="mt-3 space-y-2 text-md font-mono">
        <p className="text-accent">
          border-radius: 16px;
        </p>

        <p className="text-muted-foreground">
          padding: 24px;
        </p>

        <p className="text-muted-foreground">
          animation: smooth;
        </p>
      </div>
    </div>
    </section>
  );
}