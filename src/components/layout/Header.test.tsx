import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";

import { LanguageProvider } from "@/src/contexts/LanguageContext";
import Header from "./Header";

describe("Header", () => {
  const renderHeader = () => {
    return render(
      <LanguageProvider>
        <Header />
      </LanguageProvider>,
    );
  };

  describe("render", () => {
    it("should render successfully", () => {
      expect(() => renderHeader()).not.toThrow();
    });
  });
});