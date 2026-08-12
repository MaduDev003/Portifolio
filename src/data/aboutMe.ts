import {
  FaRocket,
  FaBriefcase,
  FaHeart,
} from "react-icons/fa";

export const aboutMe = [
  {
    icon: FaRocket,
    key: "journey" as const,
    highlights: [
      "fullStack",
      "htmlCssJs",
      "reactTypeScript",
      "nodeDatabases",
      "weeklyProjects",
    ],
  },
  {
    icon: FaBriefcase,
    key: "experience" as const,
    highlights: [
      "frontendBackend",
      "restApis",
      "microservices",
      "messaging",
      "automatedTests",
      "agile",
    ],
  },
  {
    icon: FaHeart,
    key: "motivation" as const,
    highlights: [
      "react",
      "next",
      "typescript",
      "tailwind",
      "accessibility",
      "userExperience",
    ],
  },
];