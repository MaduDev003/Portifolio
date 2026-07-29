import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

import "./globals.css";

import { cn } from "@/lib/utils";
import ThemeProvider from "@/src/providers/ThemeProvider";


const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});


export const metadata: Metadata = {
  title: "Maria Eduarda | Front-End Developer",
  description:
    "Portfólio de Maria Eduarda, desenvolvedora Front-End especializada em React, Next.js e TypeScript.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={cn(
        "h-full",
        "antialiased",
        jakarta.variable
      )}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}