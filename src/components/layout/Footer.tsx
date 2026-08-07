"use client";
import { PiStarFourFill } from "react-icons/pi";
import { FaRegCopyright } from "react-icons/fa";
import { motion } from "framer-motion";

const stars = [
  { top: "5%", left: "22%", size: "text-lg", duration: 4 },
  { top: "10%", right: "28%", size: "text-sm", duration: 5 },
  { top: "22%", left: "10%", size: "text-xs", duration: 3.5 },
  { top: "30%", right: "12%", size: "text-base", duration: 4.8 },
  { top: "45%", left: "18%", size: "text-sm", duration: 5.5 },
  { top: "55%", right: "20%", size: "text-lg", duration: 3.8 },
  { top: "68%", left: "8%", size: "text-xs", duration: 4.2 },
  { top: "52%", right: "8%", size: "text-base", duration: 5.2 },
  { top: "33%", left: "30%", size: "text-sm", duration: 4.5 },
  { top: "80%", right: "50%", size: "text-sm", duration: 4.5 },
  { top: "40%", left: "10%", size: "text-sm", duration: 2.8 },
  { top: "40%", right: "10%", size: "text-sm", duration: 3.5 }
];

export default function Footer() {
  return (
    <footer className="relative border-t border-border/20 py-12  justify-center items-center flex">
      {stars.map((star, index) => (
        <motion.span
          key={index}
          className={`absolute text-brand-primary/80 ${star.size} select-none`}
          style={{
            top: star.top,
            left: star.left,
            right: star.right
          }}
          animate={{
            opacity: [1, 0.3, 1],
            scale: [0.9, 1.5, 0.9],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <PiStarFourFill/>
        </motion.span>
      ))}

     <div className=" z-10 mx-auto flex max-w-2xl flex-col items-center text-center">
        <div className="mb-2 flex items-center gap-3">
            <motion.span
            animate={{
                rotate: [0, 180, 360],
                opacity: [0.4, 1, 0.4],
            }}
            transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
            }}
            className="text-brand-primary text-xl"
            >
             <PiStarFourFill/>
            </motion.span>

            <motion.span
            animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 1, 0.3],
            }}
            transition={{
                duration: 3,
                repeat: Infinity,
            }}
            
            >
            <div className="bg-accent w-2 h-2 rounded-full"/>
            </motion.span>

            <motion.span
            animate={{
                rotate: [360, 180, 0],
                opacity: [0.4, 1, 0.4],
            }}
            transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
            }}
            className="text-brand-primary text-xl"
            >
             <PiStarFourFill/>
            </motion.span>
        </div>

        <h2 className="text-xl font-semibold text-foreground">
            Obrigada pela visita!
        </h2>

            <div className="flex gap-2 mt-3">
                 <FaRegCopyright className="mt-1 text-secondary-font"/>
                 <p className="text-[16px] text-secondary-font">
                    {new Date().getFullYear()} Madu. Todos os direitos reservados.
                </p>
            </div>
       
        </div>
    </footer>
  );
}