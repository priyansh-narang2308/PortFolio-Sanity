import type { Metadata } from "next";
import { Atkinson_Hyperlegible } from "next/font/google";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { SanityLive } from "@/sanity/lib/live";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import SidebarToggle from "@/components/sidebar-toggle";
import Script from "next/script";
import { FloatingDock } from "@/components/floating-dock";

const atkins = Atkinson_Hyperlegible({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Priyansh Narang",
  description: "An AI Portfolio generated using OpenAI's agentkit and chatkit",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { userId } = await auth();
  const isAuthenticated = !!userId;

  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body suppressHydrationWarning={true} className={`${atkins.className}`}>
          <Script
            src="https://cdn.platform.openai.com/deployments/chatkit/chatkit.js"
            strategy="afterInteractive"
          />
          <SidebarProvider defaultOpen={false}>
            <SidebarInset>{children}</SidebarInset>
            {isAuthenticated && <AppSidebar side="right" />}
<FloatingDock/>
            <SidebarToggle />
          </SidebarProvider>

          <SanityLive />
        </body>
      </html>
    </ClerkProvider>
  );
}
