import ButtonAction from "../ui/ButtonAction";

export default function Header() {
  return (
    <header
      className="
        fixed
        top-2
        left-1/2
        -translate-x-1/2
        z-50
        flex
        h-14
        w-[80%]
        items-center
        justify-between
        rounded-full
        border
        border-white/30
        bg-white/60
        px-6
        backdrop-blur-2xl
        shadow-[0_8px_30px_rgba(0,0,0,0.08)]
      "
    >
      {/* LOGO */}
      <div>Madu</div>

      {/* MENU */}
      <nav>
        <ul className="flex items-center gap-10">
          {[
            "Home",
            "Sobre mim",
            "Experiência",
            "Projetos",
            "Contato",
          ].map((item) => (
            <li
              key={item}
              className="
                cursor-pointer
                font-heading
                text-zinc-700
                transition-all
                duration-200
                hover:bg-[linear-gradient(135deg,#0F9D7A_0%,#2DD4BF_55%,#7DDC6F_100%)]
                hover:bg-clip-text
                hover:text-transparent
              "
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>

      {/* BOTÃO CURRÍCULO */}
     <ButtonAction text={"Curriculo"}/>
    </header>
  );
}