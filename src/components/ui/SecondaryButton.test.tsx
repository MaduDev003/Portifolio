import { beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import SecondaryButton from "./SecondaryButton";

describe("SecondaryButton", () => {
  const mockChildren = "Click me";
  const mockHoverChildren = "Hovered!";
  const mockOnClick = vi.fn();

  const renderSecondaryButton = () => {
    return render(
      <SecondaryButton
        onClick={mockOnClick}
        hoverChildren={mockHoverChildren}
      >
        {mockChildren}
      </SecondaryButton>,
    );
  };

  describe("render", () => {
    beforeEach(() => {
      renderSecondaryButton();
    });

    it("should render the button", () => {
      expect(
        screen.getByRole("button", {
          name: mockChildren,
        }),
      ).toBeInTheDocument();
    });

    it("should render the children by default", () => {
      expect(screen.getByText(mockChildren)).toBeInTheDocument();
      expect(
        screen.queryByText(mockHoverChildren),
      ).not.toBeInTheDocument();
    });
  });

  describe("hover", () => {
    beforeEach(() => {
      renderSecondaryButton();
    });

    it("should render the hover children when the button is hovered", async () => {
      const user = userEvent.setup();

      const button = screen.getByRole("button", {
        name: mockChildren,
      });

      await user.hover(button);

      expect(
        screen.getByText(mockHoverChildren),
      ).toBeInTheDocument();

      expect(
        screen.queryByText(mockChildren),
      ).not.toBeInTheDocument();
    });
  });

  describe("click", () => {
    beforeEach(() => {
      mockOnClick.mockClear();
      renderSecondaryButton();
    });

    it("should call onClick when the button is clicked", async () => {
      const user = userEvent.setup();

      const button = screen.getByRole("button", {
        name: mockChildren,
      });

      await user.click(button);

      expect(mockOnClick).toHaveBeenCalledTimes(1);
    });
  });
});