export default function Contact(){
    return (
        <section
      id="contact"
      className="relative overflow-hidden border-y border-border/40 bg-brand-middle/5 py-20 xl:px-34"
    >
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-brand-hover/5 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-brand-hover/5 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-25 flex w-full flex-col items-center justify-center text-center">
          <span className="font-heading text-5xl font-bold tracking-tight text-brand-middle md:text-6xl">
            Contato
          </span>

          <div className="mt-5 h-px w-20 bg-brand-middle/40" />

          <h2 className="mt-5 max-w-3xl text-lg text-muted-foreground md:text-2xl">
                Quer pipipopo
          </h2>
          </div>
        </div>
        </section>
    );
}