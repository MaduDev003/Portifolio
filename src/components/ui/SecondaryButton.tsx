import { ReactNode, useState } from "react";

type Props = {
  children: ReactNode;
  hoverChildren?: ReactNode;
  onClick?: () => void;
};

export default function SecondaryButton({
  children,
  hoverChildren,
  onClick,
}: Props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="
        group
        relative
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-full
        border
        border-[#D4C5FF]
        bg-[#EEE8FF]
        text-[#6D5EF7]
        shadow-[0_2px_8px_rgba(15,23,42,0.06)]
        transition-all
        duration-400
        ease-out
        hover:-translate-y-0.5
        hover:scale-[1.03]
        hover:border-[#C3AEFF]
        hover:bg-[#F5F2FF]
        hover:text-[#5B46E8]
        hover:shadow-[0_8px_22px_rgba(109,94,247,.14)]
        cursor-pointer
        active:scale-95
      "
    >
      {isHovered && hoverChildren ? hoverChildren : children}
    </button>
  );
}