"use client";

import { ShimmerButton } from "@/components/ui/shimmer-button";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="min-h-screen p-4"
    >
      <ShimmerButton
        shimmerColor="#D1FAE5"
        shimmerDuration="3s"
        shimmerSize="0.05em"
        background="linear-gradient(135deg,rgba(15,157,122,0.75) 0%,rgba(45,212,191,0.65) 55%,rgba(125,220,111,0.55) 100%)"
        borderRadius="12px"
        className="
          h-10
          px-6
          font-medium
          font-heading
          text-white

          backdrop-blur-xl

          border
          border-emerald-100/30

          shadow-[0_12px_30px_rgba(15,157,122,.25)]

          transition-all
          duration-300

          hover:-translate-y-0.5
          hover:border-emerald-100/60
          hover:shadow-[0_15px_35px_rgba(45,212,191,.35)]

          active:scale-[0.98]
        "
      >
        <span className="flex items-center gap-2">
          Ver Projetos →
        </span>
      </ShimmerButton>
    </section>
  );
}