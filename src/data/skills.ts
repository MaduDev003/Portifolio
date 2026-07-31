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
  BiLogoMongodb 
} from "react-icons/bi";

import {
  SiNextdotjs,
  SiRabbitmq,
  SiShadcnui,
  SiFramer,
  SiPostman,
  SiBruno,
  SiExpress,
  SiDocker ,
  SiJest,
  SiCypress
} from "react-icons/si";
import { TbWand, TbApi } from "react-icons/tb";

export const skillCategories = [
    {
      title: "Base",
      description: "Tecnologias que utilizo no desenvolvimento Front-end.",
      skills: [
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
          name: "React",
          icon: BiLogoReact,
          color: "#844cfc",
        },
        {
          name: "Next.js",
          icon: SiNextdotjs,
          color: "#FFFFFF",
        },
      ],
    },

    {
      title: "Interface e Estilização",
      description:
        "Construção de interfaces modernas, responsivas e acessíveis.",
      skills: [
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
          name: "Tailwind CSS",
          icon: BiLogoTailwindCss,
          color: "#06B6D4",
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
        {
          name: "Framer Motion",
          icon: SiFramer,
          color: "#0055FF",
        },
      ],
    },
    {
  title: "Testes",
  description:
    "Ferramentas utilizadas para garantir a qualidade e confiabilidade das aplicações.",
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
    {
      title: "Ferramentas",
      description:
        "Ferramentas que utilizo durante o desenvolvimento.",
      skills: [
        {
          name: "Git",
          icon: BiLogoGit,
          color: "#F05032",
        },
        {
          name: "Figma",
          icon: BiLogoFigma,
          color: "#F24E1E",
        },
         {
          name: "Bruno",
          icon: SiBruno,
          color: "#8B4513",
        },
      ],
    },

    {
  title: "Experiência Adicional em Back-end",
  description:
    "Experiência profissional com tecnologias e ferramentas do ecossistema Back-end.",
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
    {
      name: "Docker",
      icon: SiDocker,
      color: "#3B82F6",
    },
    {
      name: "Postman",
      icon: SiPostman,
      color: "#FF6C37",
    },
  ],
},
  ];