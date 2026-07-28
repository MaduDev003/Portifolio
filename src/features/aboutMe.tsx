"use client";

import { ShimmerButton } from "@/components/ui/shimmer-button";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="min-h-screen p-4 flex "
    >
      <ShimmerButton
        shimmerColor="#E9D5FF"
        shimmerDuration="3s"
        shimmerSize="0.05em"
        background="linear-gradient(135deg,#6D28D9 0%,#8B5CF6 55%,#A855F7 100%)"
        borderRadius="20px"
        className="
          h-11
          px-7
          font-heading
          font-medium
          text-white
          backdrop-blur-xl
          border
          border-purple-200/20
          shadow-[0_12px_30px_rgba(109,40,217,.28)]
          transition-all
          duration-300
          hover:-translate-y-0.5
          hover:border-purple-200/40
          hover:shadow-[0_18px_40px_rgba(139,92,246,.45)]
          active:scale-[0.98]
        "
      >
        <span className="flex items-center gap-2">
          Ver Projetos
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </span>
      </ShimmerButton>
    </section>
  );
}