import type { Metadata } from "next";
import { Atkinson_Hyperlegible } from "next/font/google";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { SanityLive } from "@/sanity/lib/live";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import SidebarToggle from "@/components/sidebar-toggle";

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
          <SidebarProvider>
            <SidebarInset>{children}</SidebarInset>
            <AppSidebar side="right" />

            <SidebarToggle />
          </SidebarProvider>

          <SanityLive />
        </body>
      </html>
    </ClerkProvider>
  );
}
