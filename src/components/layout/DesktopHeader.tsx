import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { FiDownload } from "react-icons/fi";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import SecondaryButton from "../ui/SecondaryButton";

interface Link {
  label: string;
  href: string;
}

interface DesktopHeaderProps {
  links: Link[];
  setLanguage: React.Dispatch<React.SetStateAction<"PT" | "EN">>;
  language: string;
}

export default function DesktopHeader({
  links,
  language,
  setLanguage
}: DesktopHeaderProps) {
  return (
    <header
      className="
        fixed
        top-1
        left-1/2
        -translate-x-1/2
        z-50
        flex
        h-14
        w-[65%]
        max-w-6xl
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
          tracking-tigher
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
        <ul className="flex items-center gap-9">
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
                {item.label}
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
            onClick={() => setLanguage(language === "PT" ? "EN" : "PT")}
            className="
              h-9 w-9 rounded-full
              shadow-[0_2px_8px_rgba(15,23,42,0.10)]
              hover:shadow-[0_10px_24px_rgba(15,23,42,0.10),0_0_20px_rgba(124,92,252,0.18)]
            "
          >
            <p className="text-[12px]">{language}</p>
          </SecondaryButton>
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
            Currículo
          </ShimmerButton>
        </a>
      </div>
    </header>
  );
}