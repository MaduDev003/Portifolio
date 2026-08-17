import { beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { LanguageProvider } from "@/src/contexts/LanguageContext";
import Footer from "./Footer";

describe("Footer", () => {

   const footer = () => {
     return render(
       <LanguageProvider>
         <Footer />
       </LanguageProvider>,
     );
   };

    describe("render", () => {
        it("should render successfully", () => {
            expect(() => footer()).not.toThrow();

            expect(
                screen.getByRole("heading", {
                    level: 2,
                    name: "Obrigada pela visita!",
                })
            ).toBeInTheDocument();
    });
  });
})