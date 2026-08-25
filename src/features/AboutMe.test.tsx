import { beforeEach, describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { LanguageProvider } from "@/src/contexts/LanguageContext";
import AboutMe from "./AboutMe";

describe("AboutMe", () => {
    const renderAboutMe = () => {
        return render(
            <LanguageProvider>
                <AboutMe />
            </LanguageProvider>,
        );
    };

    describe("render", () => {
        beforeEach(() => {
            renderAboutMe();
        });

        it("should render the about section", () => {
            expect(
                screen.getByText(/sobre mim/i),
            ).toBeInTheDocument();
        });

        it("should render the about section with the correct id", () => {
            expect(
                document.querySelector("#about"),
            ).toBeInTheDocument();
        });
    });

    describe("content", () => {
        beforeEach(() => {
            renderAboutMe();
        });

        it("should render the section subtitle", () => {
            expect(
                screen.getByText(/minha trajetória/i),
            ).toBeInTheDocument();
        });

        it("should render all information cards", () => {
            const articles = screen.getAllByRole("article");

            expect(articles).toHaveLength(3);
        });

        it("should render the card titles", () => {
            expect(
                screen.getByRole("heading", { name: /Minha experiência/i }),
            ).toBeInTheDocument();

            expect(
                screen.getByRole("heading", { name: /Minha jornada/i }),
            ).toBeInTheDocument();

            expect(
                screen.getByRole("heading", { name: /O que me move/i }),
            ).toBeInTheDocument();
        });

        it("should render the card descriptions", () => {
            expect(
                screen.getByText(/primeira/i),
            ).toBeInTheDocument();

            expect(
                screen.getByText(/financeiro/i),
            ).toBeInTheDocument();

            expect(
                screen.getByText(/visão/i),
            ).toBeInTheDocument();
        });
    });

    describe("highlights", () => {
        beforeEach(() => {
            renderAboutMe();
        });

        it("should render the highlights list", () => {
            const lists = screen.getAllByRole("list");

            expect(lists).toHaveLength(3);
        });

        it("should render highlight items", () => {
            const items = screen.getAllByRole("listitem");

            expect(items.length).toBeGreaterThan(0);
        });
    });
});