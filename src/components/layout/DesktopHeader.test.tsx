import { beforeEach, describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { LanguageProvider } from "@/src/contexts/LanguageContext";
import userEvent from "@testing-library/user-event";
import DesktopHeader from "./DesktopHeader";

describe("DesktopHeader", () => {
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

    const renderDesktopHeader = () => {
        return render(
        <LanguageProvider>
            <DesktopHeader links={links} />
        </LanguageProvider>,
        );
    };

    describe("render", () => {
        beforeEach(() => {
        renderDesktopHeader();
        });

        it("should render the navigation", () => {
        expect(screen.getByRole("navigation")).toBeInTheDocument();
        });
    });

    describe("navigation", () => {
        beforeEach(() => {
        renderDesktopHeader();
        });

        it("should render all navigation links", () => {
        expect(
            screen.getByRole("link", { name: /Início/i }),
        ).toBeInTheDocument();

        expect(
            screen.getByRole("link", { name: /Sobre/i }),
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

        it("should have the correct href for each link", () => {
        expect(
            screen.getByRole("link", { name: /Início/i }),
        ).toHaveAttribute("href", "#presentation");

        expect(
            screen.getByRole("link", { name: /Sobre/i }),
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

        it("should render six navigation links", () => {
        const navigationLinks = screen.getAllByRole("link");
        

        expect(navigationLinks).toHaveLength(7);
        });
    });

    describe("resume", () => {
        beforeEach(() => {
            renderDesktopHeader();
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

   describe("theme toggler", () => {
        beforeEach(() => {
            document.documentElement.classList.remove("dark");
            renderDesktopHeader();
        });

        it("should switch to dark mode when clicked", async () => {
            const user = userEvent.setup();

            const themeToggler = screen.getByRole("button", {
            name: /toggle theme/i,
            });

            expect(document.documentElement).not.toHaveClass("dark");

            await user.click(themeToggler);

            expect(document.documentElement).toHaveClass("dark");
        });

        it("should toggle between light and dark mode", async () => {
            const user = userEvent.setup();

            const themeToggler = screen.getByRole("button", {
                name: /toggle theme/i,
            });

            expect(document.documentElement).not.toHaveClass("dark");

            await user.click(themeToggler);

            expect(document.documentElement).toHaveClass("dark");

            await user.click(themeToggler);

            expect(document.documentElement).not.toHaveClass("dark");
        });
    });
});