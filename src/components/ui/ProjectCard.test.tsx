import { beforeEach, describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { LanguageProvider } from "@/src/contexts/LanguageContext";

import ProjectCard from "./ProjectCard";

describe("ProjectCard", () => {
  const mockProject = {
    title: "LumiCine",
    description: "A cinema interface for movie discovery and ticket booking.",
    image: "/images/lumicine.png",
    video: "/videos/lumicine.mp4",
    github: "https://github.com/test/lumicine",
    demo: "https://lumicine.vercel.app",
    technologies: ["React", "Next.js", "TypeScript"],
    contrast: true,
  };

  const renderProjectCard = () => {
    return render(
      <LanguageProvider>
        <ProjectCard project={mockProject} />
      </LanguageProvider>,
    );
  };

  describe("render", () => {
    beforeEach(() => {
      renderProjectCard();
    });

    it("should render the project information", () => {
      expect(
        screen.getByRole("heading", {
          level: 3,
          name: "LumiCine",
        }),
      ).toBeInTheDocument();

      expect(
        screen.getByText(
          "A cinema interface for movie discovery and ticket booking.",
        ),
      ).toBeInTheDocument();
    });

    it("should render the project technologies", () => {
      expect(screen.getByText("React")).toBeInTheDocument();
      expect(screen.getByText("Next.js")).toBeInTheDocument();
      expect(screen.getByText("TypeScript")).toBeInTheDocument();
    });

    it("should render the project links", () => {
      const viewProjectLink = screen.getByRole("link", {
        name: /Ver projeto/i,
      });

      const githubLink = screen.getByRole("link", {
        name: /github/i,
      });

      expect(viewProjectLink).toHaveAttribute(
        "href",
        "https://lumicine.vercel.app",
      );

      expect(githubLink).toHaveAttribute(
        "href",
        "https://github.com/test/lumicine",
      );
    });

    it("should render the featured badge", () => {
      expect(screen.getByText("Destaque")).toBeInTheDocument();
    });
  });

  describe("hover", () => {
    let container: HTMLElement;

        beforeEach(() => {
            const rendered = renderProjectCard();
            container = rendered.container;
        });

        it("should render the project video when the card is hovered", async () => {
            const user = userEvent.setup();

            const card = container.querySelector("article");

            if (!card) {
            throw new Error("ProjectCard article was not found");
            }

            expect(container.querySelector("video")).not.toBeInTheDocument();

            await user.hover(card);

            expect(container.querySelector("video")).toBeInTheDocument();
        });
    });
});