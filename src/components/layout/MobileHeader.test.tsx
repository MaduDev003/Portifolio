import { beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { LanguageProvider } from "@/src/contexts/LanguageContext";
import MobileHeader from "./MobileHeader";

describe("MobileHeader", () => {
  const links = [
    {
      label: "home" as const,
      href: "#presentation",
    },
    {
      label: "about" as const,
      href: "#about",
    },
    {
      label: "skills" as const,
      href: "#skills",
    },
    {
      label: "experience" as const,
      href: "#experience",
    },
    {
      label: "projects" as const,
      href: "#projects",
    },
    {
      label: "contact" as const,
      href: "#contact",
    },
  ];

  const renderMobileHeader = (
    openMenu = false,
    setOpenMenu = vi.fn(),
  ) => {
    return render(
      <LanguageProvider>
        <MobileHeader
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
          links={links}
        />
      </LanguageProvider>,
    );
  };

  describe("render", () => {
    it("should render successfully", () => {
      expect(() => renderMobileHeader()).not.toThrow();
    });
  });

  describe("menu", () => {
    it("should render the menu as closed initially", () => {
      renderMobileHeader(false);

      expect(
        screen.getByRole("button", {
          name: "Abrir menu",
        })
      ).toBeInTheDocument();
    });

    it("should render the menu as open", () => {
      renderMobileHeader(true);

      expect(
        screen.getByRole("button", {
          name: "Fechar menu",
        })
      ).toBeInTheDocument();
    });

    it("should call setOpenMenu when clicking the menu button", async () => {
      const user = userEvent.setup();
      const setOpenMenu = vi.fn();

      renderMobileHeader(false, setOpenMenu);

      await user.click(
        screen.getByRole("button", {
          name: "Abrir menu",
        })
      );

      expect(setOpenMenu).toHaveBeenCalledTimes(1);
    });
  });

  describe("navigation", () => {
     beforeEach(() => {
           renderMobileHeader(true);
        });
    it("should render all navigation links", () => {
      expect(
        screen.getByRole("link", { name: /Início/i }),
      ).toBeInTheDocument();

      expect(
        screen.getByRole("link", { name: /Sobre mim/i }),
      ).toBeInTheDocument();

      expect(
        screen.getByRole("link", { name: /Habilidades/i }),
      ).toBeInTheDocument();

      expect(
        screen.getByRole("link", { name: /Experiência/i }),
      ).toBeInTheDocument();

      expect(
        screen.getByRole("link", { name: /Projetos/i }),
      ).toBeInTheDocument();

      expect(
        screen.getByRole("link", { name: /Contato/i }),
      ).toBeInTheDocument();
    });

    it("should have the correct navigation destinations", () => {
      expect(
        screen.getByRole("link", { name: /Início/i }),
      ).toHaveAttribute("href", "#presentation");

      expect(
        screen.getByRole("link", { name: /Sobre mim/i }),
      ).toHaveAttribute("href", "#about");

      expect(
        screen.getByRole("link", { name: /Habilidades/i }),
      ).toHaveAttribute("href", "#skills");

      expect(
        screen.getByRole("link", { name: /Experiência/i }),
      ).toHaveAttribute("href", "#experience");

      expect(
        screen.getByRole("link", { name: /Projetos/i }),
      ).toHaveAttribute("href", "#projects");

      expect(
        screen.getByRole("link", { name: /Contato/i }),
      ).toHaveAttribute("href", "#contact");
    });
  });

  describe("resume", () => {
     beforeEach(() => {
           renderMobileHeader(true);
        });
    it("should render the resume download link", () => {
      const resumeLink = screen.getByRole("link", {
        name: /currículo|resume|cv/i,
      });

      expect(resumeLink).toHaveAttribute(
        "href",
        "/Maria_Eduarda_Marinho_Schwarz_CV.pdf",
      );

      expect(resumeLink).toHaveAttribute("download");
    });
  });

  describe("language", () => {
    it("should render the language button", () => {
      renderMobileHeader();

      expect(
        screen.getByRole("button", {
          name: "PT",
        }),
      ).toBeInTheDocument();
    });

    it("should toggle the language when clicked", async () => {
      const user = userEvent.setup();

      renderMobileHeader();

      const languageButton = screen.getByRole("button", {
        name: "PT",
      });

      expect(languageButton).toHaveTextContent("PT");

      await user.click(languageButton);

      expect(languageButton).toHaveTextContent("EN");
    });
  });
});