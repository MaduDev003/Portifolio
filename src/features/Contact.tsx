export default function Contact() {
  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        border-y
        border-border/40
        bg-card/40
        py-20
        xl:px-34
      "
    >
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.035]
        "
        style={{
          backgroundImage:
            "linear-gradient(90deg, currentColor 1px, transparent 1px), linear-gradient(currentColor 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-px
          bg-linear-to-r
          from-brand-middle
          to-accent
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-px
           bg-linear-to-r
          from-brand-middle
          to-accent
        "
      />


      <div className="relative z-10 mx-auto max-w-7xl">
        <div
          className="
            mb-25
            flex
            w-full
            flex-col
            items-center
            justify-center
            text-center
          "
        >

          <span
            className="
              font-heading
              text-5xl
              font-bold
              tracking-tight
              text-brand-middle
              drop-shadow-[0_4px_15px_rgba(124,92,252,0.20)]
              md:text-6xl
            "
          >
            Contato
          </span>


          <div
            className="
              mt-5
              h-1
              w-20
              rounded-full
              bg-linear-to-r
              from-brand-middle
              to-accent
            "
          />


          <h2
            className="
              mt-5
              max-w-3xl
              text-lg
              text-muted-foreground
              md:text-2xl
            "
          >
            Vamos conversar sobre ideias, projetos e oportunidades.
          </h2>

        </div>
      </div>
    </section>
  );
}