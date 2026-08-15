"use client";

import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { FiDownload } from "react-icons/fi";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import SecondaryButton from "../ui/SecondaryButton";
import { useLanguage } from "@/src/contexts/LanguageContext";

interface Link {
  label: "home" | "about" | "skills" | "experience" | "projects" | "contact";
  href: string;
}

interface DesktopHeaderProps {
  links: Link[];
}

export default function DesktopHeader({
  links,
}: DesktopHeaderProps) {
  const { language, translations, toggleLanguage,} = useLanguage();

  return (
    <header
      className="
        fixed
        top-2
        left-1/2
        z-50
        flex
        h-13
        w-[65%]
        max-w-6xl
        -translate-x-1/2
        items-center
        justify-between
        backdrop-blur-3xl
        rounded-full
        border
        border-[#6e5cb836]
        bg-card/90
        pr-2
        shadow-[0_10px_40px_var(--header-shadow)]
      "
    >
      <div
        className="
          flex
          h-13
          w-13
          items-center
          justify-center
          rounded-full
          border
          border-accent/20
          bg-brand-middle/10
         
        "
      >
        <span
          className="
            px-1
            font-heading
            text-lg
            font-black
            tracking-tighter
            bg-linear-to-br
            from-brand-middle
            to-accent
            bg-clip-text
            text-transparent
           
          "
        >
          MS
        </span>
      </div>

      <nav className="relative">
        <ul className="flex items-center gap-7">
          {links.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="
                  relative
                  cursor-pointer
                  text-sm
                  font-medium
                  text-muted-foreground
                  transition-colors
                  duration-300

                  after:absolute
                  after:left-0
                  after:-bottom-1
                  after:h-0.5
                  after:w-full
                  after:origin-center
                  after:scale-x-0
                  after:rounded-full
                  after:bg-linear-to-r
                  after:from-brand-middle
                  after:to-accent
                  after:transition-transform
                  after:duration-300
                  after:ease-out

                  hover:text-brand-middle
                  hover:after:scale-x-100
                "
              >
                {translations.header[item.label]}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div
        className="
          relative
          flex
          items-center
          gap-2
        "
      >

        <div
          className="
            flex
            h-9
            w-9
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
            duration={600}
            className="cursor-pointer"
          />
        </div>

        <SecondaryButton
          onClick={toggleLanguage}
          className="
            h-9
            w-9
            rounded-full
            shadow-[0_2px_8px_rgba(15,23,42,0.10)]
            hover:shadow-[0_10px_24px_rgba(15,23,42,0.10),0_0_20px_rgba(124,92,252,0.18)]
          "
        >
          <p className="text-[12px]">
            {language}
          </p>
        </SecondaryButton>
        <a
          href={language === "PT" ? "/Maria_Eduarda_Marinho_Schwarz_CV.pdf": "/Maria_Eduarda_Schwarz_CV_EN.pdf"}
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
              gap-2
              px-7
              text-sm
              font-medium
              text-white
              transition-all
              duration-300
              hover:-translate-y-0.5
            "
          >
            <FiDownload size={18} />

            {translations.header.resume}
          </ShimmerButton>
        </a>
      </div>
    </header>
  );
}