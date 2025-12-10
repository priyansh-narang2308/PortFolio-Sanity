"use client"

import { SignInButton, useUser } from "@clerk/nextjs";
import { useSidebar } from "./ui/sidebar";
import { MessageSquare, SparklesIcon } from "lucide-react";

const SidebarToggle = () => {
  const { toggleSidebar, open, isMobile, openMobile } = useSidebar();
  const { isSignedIn } = useUser();

  const isSidebarOpen = isMobile ? openMobile : open;

  if (isSidebarOpen) return null;

 const buttonStyles = `
  relative w-16 h-16 rounded-full
  bg-gradient-to-br from-[#6D28D9] via-[#8B5CF6] to-[#EC4899]
  dark:from-[#5B21B6] dark:via-[#7C3AED] dark:to-[#DB2777]
  shadow-[0_0_28px_rgba(139,92,246,0.45)]
  hover:shadow-[0_0_45px_rgba(168,85,247,0.65)]
  backdrop-blur-xl
  transition-all duration-400 ease-[cubic-bezier(.25,.8,.25,1)]
  hover:scale-[1.10] active:scale-[0.96]
  flex items-center justify-center cursor-pointer
  before:absolute before:inset-0 before:rounded-full
  before:bg-white/10 before:opacity-0 hover:before:opacity-20
  before:transition-opacity
`;


  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      

   

     
    </div>
  );
};

export default SidebarToggle;
