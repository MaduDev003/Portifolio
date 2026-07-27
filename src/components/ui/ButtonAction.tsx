
type Props = {
text: string
}
export default function ButtonAction({text}: Props) {
return (
   <button
    className="
        rounded-xl
        px-6
        py-2
        font-medium
        font-heading
        text-white
        bg-[linear-gradient(135deg,#0F9D7A_0%,#2DD4BF_55%,#7DDC6F_100%)]
        shadow-[0_12px_30px_rgba(15,157,122,.25)]
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:brightness-105
        active:scale-[0.98]
    "
    >
        {text}
    </button>
)
}