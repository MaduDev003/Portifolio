
import botsInActionImage from "@/src/assets/images/botsInAction.png";
import lumicineImage from "@/src/assets/images/lumicine.png";
import massaBellaImage from "@/src/assets/images/massaBella.png";
import skycastImage from "@/src/assets/images/skyCast.png";

export const projects = [
    {
      title: "LumiCine",
      contrast: true,
      description:
        "Plataforma de cinema desenvolvida com foco em experiência do usuário, acessibilidade e arquitetura escalável.",
      video: "/videos/lumicine.mp4",
      image: lumicineImage.src,
      technologies: ["React", "Next.js", "TypeScript", "TailwindCSS"],
      github: "https://github.com/MaduDev003/LumiCine",
      demo: "https://lumi-cine-tau.vercel.app/",
    },
    {
      title: "BotsInAction",
       contrast: true,
      description: `Jogo de captura e esquiva onde tecnologias aumentam sua pontuação, enquanto bugs e erros reduzem suas vidas. Sobreviva o máximo possível.`,
      video: "/videos/botsInAction.mp4",
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
      video: "/videos/skycast.mp4",
      image: skycastImage.src,
      technologies: ["HTML", "CSS", "JavaScript", "API"],
      github: "https://github.com/MaduDev003/Skycast",
      demo: "https://sky-cast-ruby.vercel.app/",
    },
    {
      title: "Massa Bella",
         contrast: false,
      description:
        "Aplicação responsiva simulando um site de Pizza.",
      video: "/videos/massaBella.mp4",
      image: massaBellaImage.src,
      technologies: ["HTML", "CSS", "JavaScript", "API"],
      github: "https://github.com/MaduDev003/MassaBella",
      demo: "https://massa-bella.vercel.app/",
    },
    
  ];