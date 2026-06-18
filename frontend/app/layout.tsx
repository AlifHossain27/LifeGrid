import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Source_Serif_4 } from 'next/font/google';
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'LifeGrid',
  description: 'The complete daily command center for deep focus and productivity.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        jetbrainsMono.variable,
        sourceSerif.variable,
        inter.variable,
        "h-full antialiased font-sans dark"
      )}
    >
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 dark:bg-[#0a0a0a] dark:text-slate-200 transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}