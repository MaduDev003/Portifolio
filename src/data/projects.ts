import botsInActionGif from "@/src/assets/gifs/botsInAction.gif";
import botsInActionImage from "@/src/assets/images/botsInAction.png";


export const projects = [
    {
      title: "LumiCine",
      contrast: true,
      description:
        "Plataforma de cinema desenvolvida com foco em experiência do usuário, acessibilidade e arquitetura escalável.",
      gif: "/projects/lumicine.png",
      technologies: ["React", "Next.js", "TypeScript", "TailwindCSS"],
      github: "#",
      demo: "#",
    },
    {
      title: "BotsInAction",
       contrast: true,
      description: `Jogo de captura e esquiva onde tecnologias aumentam sua pontuação, enquanto bugs e erros reduzem suas vidas. Sobreviva o máximo possível.`,
      gif: botsInActionGif.src,
      image: botsInActionImage.src,
      technologies: ["React", "TypeScript", "TailwindCSS"],
      github: "https://github.com/MaduDev003/BotsInAction",
      demo: "https://bots-in-action.vercel.app/",
    },
    {
      title: "SkyCast",
         contrast: false,
      description:
        "Dashboard de previsão do tempo consumindo API externa com interface responsiva.",
      gif: "/projects/skycast.png",
      technologies: ["HTML", "CSS", "JavaScript", "API"],
      github: "#",
      demo: "#",
    },
  ];