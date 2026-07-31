"use client"
import { ReactNode, useState } from "react";

type Props = {
  children: ReactNode;
  hoverChildren?: ReactNode;
  onClick?: () => void;
  className?: string;
};

export default function SecondaryButton({
  children,
  hoverChildren,
  onClick,
  className = "",
}: Props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        ${className}
        group
        relative
        flex
        items-center
        justify-center
        border
        border-button-secondary-border
        bg-button-secondary-bg
        text-button-secondary-text
        transition-all
        duration-300
        ease-out
        hover:-translate-y-0.5
        hover:scale-[1.03]
        hover:border-button-secondary-hover-border
        hover:bg-button-secondary-hover-bg
        hover:text-button-secondary-hover-text
        cursor-pointer
        active:scale-95
      `}
    >
      {isHovered && hoverChildren ? hoverChildren : children}
    </button>
  );
}