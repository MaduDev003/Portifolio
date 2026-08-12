import {
  BiLogoTypescript,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoNodejs,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoTailwindCss,
  BiLogoGit,
  BiLogoFigma,
  BiLogoMongodb,
} from "react-icons/bi";

import {
  SiNextdotjs,
  SiRabbitmq,
  SiShadcnui,
  SiFramer,
  SiPostman,
  SiBruno,
  SiExpress,
  SiDocker,
  SiJest,
  SiCypress,
} from "react-icons/si";

import { TbWand } from "react-icons/tb";

import {
  HiOutlineCodeBracket,
  HiOutlineServerStack,
  HiOutlineWrenchScrewdriver,
  HiOutlineShieldCheck,
} from "react-icons/hi2";

export const skillCategories = [
  {
    key: "frontend",
    icon: HiOutlineCodeBracket,
    skills: [
      {
        name: "React",
        icon: BiLogoReact,
        color: "#61DAFB",
      },
      {
        name: "Next.js",
        icon: SiNextdotjs,
        color: "#FFFFFF",
      },
      {
        name: "TypeScript",
        icon: BiLogoTypescript,
        color: "#3178C6",
      },
      {
        name: "JavaScript",
        icon: BiLogoJavascript,
        color: "#F7DF1E",
      },
      {
        name: "Tailwind CSS",
        icon: BiLogoTailwindCss,
        color: "#06B6D4",
      },
      {
        name: "HTML5",
        icon: BiLogoHtml5,
        color: "#E34F26",
      },
      {
        name: "CSS3",
        icon: BiLogoCss3,
        color: "#1572B6",
      },
      {
        name: "Framer Motion",
        icon: SiFramer,
        color: "#0055FF",
      },
      {
        name: "Shadcn/UI",
        icon: SiShadcnui,
        color: "#FFFFFF",
      },
      {
        name: "Magic UI",
        icon: TbWand,
        color: "#A855F7",
      },
    ],
  },

  {
    key: "backend",
    icon: HiOutlineServerStack,
    skills: [
      {
        name: "Node.js",
        icon: BiLogoNodejs,
        color: "#5FA04E",
      },
      {
        name: "Express",
        icon: SiExpress,
        color: "#A1A1AA",
      },
      {
        name: "MongoDB",
        icon: BiLogoMongodb,
        color: "#47A248",
      },
      {
        name: "RabbitMQ",
        icon: SiRabbitmq,
        color: "#FF6600",
      },
    ],
  },

  {
    key: "tools",
    icon: HiOutlineWrenchScrewdriver,
    skills: [
      {
        name: "Git",
        icon: BiLogoGit,
        color: "#F05032",
      },
      {
        name: "Docker",
        icon: SiDocker,
        color: "#2496ED",
      },
      {
        name: "Postman",
        icon: SiPostman,
        color: "#FF6C37",
      },
      {
        name: "Bruno",
        icon: SiBruno,
        color: "#F59E0B",
      },
      {
        name: "Figma",
        icon: BiLogoFigma,
        color: "#F24E1E",
      },
    ],
  },

  {
    key: "quality",
    icon: HiOutlineShieldCheck,
    skills: [
      {
        name: "Jest",
        icon: SiJest,
        color: "#C21325",
      },
      {
        name: "Cypress",
        icon: SiCypress,
        color: "#69D3A7",
      },
    ],
  },
] as const;