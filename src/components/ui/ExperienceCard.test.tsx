import { beforeEach, describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { LanguageProvider } from "@/src/contexts/LanguageContext";
import { Experience } from "@/src/types/Experience";
import ExperienceCard from "./ExperienceCard";

describe("ExperienceCard", () => {
  const mockExperience: Experience = {
    title: "Software Engineer",
    company: "Xcompany",
    period: "Maio 2023 - Janeiro 2026",
    location: "Madrid",
    description: "Xdescription",
    technologies: ["Node.js", "React", "Jest"],
    achievements: [
      "Microservices development",
      "Maintenance of critical systems",
    ],
  };

  const renderExperienceCard = (experience: Experience) => {
    return render(
      <LanguageProvider>
        <ExperienceCard experience={experience} />
      </LanguageProvider>,
    );
  };

  describe("render", () => {
    beforeEach(() => {
      renderExperienceCard(mockExperience);
    });

    it("should render the experience information", () => {
      expect(
        screen.getByRole("heading", {
          level: 3,
          name: "Software Engineer",
        }),
      ).toBeInTheDocument();

      expect(screen.getByText("Xcompany")).toBeInTheDocument();

      expect(
        screen.getByText("Maio 2023 - Janeiro 2026"),
      ).toBeInTheDocument();

      expect(screen.getByText("Madrid")).toBeInTheDocument();

      expect(screen.getByText("Xdescription")).toBeInTheDocument();
    });

    it("should render the achievements", () => {
      expect(
        screen.getByText("Microservices development"),
      ).toBeInTheDocument();

      expect(
        screen.getByText("Maintenance of critical systems"),
      ).toBeInTheDocument();
    });

    it("should render the technologies", () => {
      expect(screen.getByText("Node.js")).toBeInTheDocument();

      expect(screen.getByText("React")).toBeInTheDocument();

      expect(screen.getByText("Jest")).toBeInTheDocument();
    });
  });
});