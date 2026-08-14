"use client";

import { ShimmerButton } from "@/components/ui/shimmer-button";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { FiDownload } from "react-icons/fi";
import { HiOutlineViewList, HiX } from "react-icons/hi";
import SecondaryButton from "../ui/SecondaryButton";
import { useLanguage } from "@/src/contexts/LanguageContext";

type LinkKey =
  | "home"
  | "about"
  | "skills"
  | "experience"
  | "projects"
  | "contact";

interface Link {
  label: LinkKey;
  href: string;
}

interface MobileHeaderProps {
  openMenu: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
  links: Link[];
}

export default function MobileHeader({
  openMenu,
  setOpenMenu,
  links,
}: MobileHeaderProps) {
  const { language, translations, toggleLanguage } = useLanguage();

  return (
    <header
      className="
        fixed
        top-1
        left-4
        right-4
        z-50
      "
    >
      <div
        className="
          relative
          flex
          h-14
          items-center
          justify-between
          rounded-full
          border
          border-[#6e5cb836]
          bg-card
          pr-2
          shadow-[0_10px_40px_var(--header-shadow)]
        "
      >
        <div
          className="
            flex
            h-14
            w-14
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
              text-2xl
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

        <div
          className="
            flex
            items-center
            gap-2
          "
        >
          <button
            onClick={() => setOpenMenu((prev) => !prev)}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-border-button-secondary-hover-border
              bg-button-secondary-hover-bg
              text-button-secondary-text
              transition-all
              duration-300
              ease-out
              cursor-pointer
              active:scale-95
            "
            aria-label={openMenu ? "Fechar menu" : "Abrir menu"}
          >
            {openMenu ? (
              <HiX size={20} />
            ) : (
              <HiOutlineViewList size={20} />
            )}
          </button>

          <AnimatedThemeToggler
            duration={500}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-border-button-secondary-hover-border
              bg-button-secondary-hover-bg
              text-button-secondary-text
              transition-all
              duration-300
              ease-out
              cursor-pointer
              active:scale-95
            "
          />
          <SecondaryButton
            onClick={toggleLanguage}
            className="
              h-10
              w-10
              rounded-full
              border
              border-border-button-secondary-hover-border
              bg-button-secondary-hover-bg
              text-button-secondary-text
            "
            aria-label="Alterar idioma"
          >
            <p className="text-[12px]">{language}</p>
          </SecondaryButton>
        </div>

        <div
          className={`
            absolute
            left-3
            w-[96%]
            overflow-hidden
            transition-all
            duration-500
            ease-in-out

            ${
              openMenu
                ? `
                  top-12
                  mt-2
                  max-h-96
                  rounded-xl
                  border
                  border-[#6e5cb836]
                  bg-card/80
                  backdrop-blur-2xl
                  shadow-lg
                  divide-y
                  divide-border
                `
                : `
                  top-12
                  max-h-0
                  border-0
                  bg-transparent
                  shadow-none
                `
            }
          `}
        >
          {links.map((link, index) => (
            <div
              key={link.href}
              onClick={() => setOpenMenu(false)}
              className={`
                cursor-pointer
                p-3
                transition-colors
                duration-300
                active:bg-brand-middle/30

                ${
                  index % 2 === 0
                    ? "bg-brand-middle/8"
                    : "bg-brand-middle/10"
                }
              `}
            >
              <a
                href={link.href}
                className="
                  block
                  text-md
                  font-medium
                  text-button-secondary-text
                  transition-colors
                  duration-300
                "
              >
                {translations.header[link.label]}
              </a>
            </div>
          ))}
          <div className="p-3">
            <a
              href="/Maria_Eduarda_Marinho_Schwarz_CV.pdf"
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
                  w-full
                  cursor-pointer
                  gap-2
                  text-sm
                  font-medium
                  text-white
                  transition-all
                  duration-300
                "
              >
                <FiDownload size={18} />
                {translations.header.resume}
              </ShimmerButton>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}