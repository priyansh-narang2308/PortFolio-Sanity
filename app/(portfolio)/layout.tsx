import type { Metadata } from "next";
import { Atkinson_Hyperlegible } from "next/font/google";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const atkins = Atkinson_Hyperlegible({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Priyansh Narang",
  description: "An AI Portfolio generated using OpenAI's agentkit and chatkit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body suppressHydrationWarning={true} className={`${atkins.className}`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
