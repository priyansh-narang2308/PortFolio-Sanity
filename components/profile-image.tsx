"use client";

import { useClerk, useUser } from "@clerk/nextjs";
import { MessageCircle, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useSidebar } from "./ui/sidebar";

interface ProfileImageProps {
  imageUrl: string;
  firstName: string;
  lastName: string;
}

export function ProfileImage({
  imageUrl,
  firstName,
  lastName,
}: ProfileImageProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { toggleSidebar, open, isMobile, openMobile } = useSidebar();
  const { isSignedIn } = useUser();
  const { openSignIn } = useClerk();

  const isSidebarOpen = isMobile ? openMobile : open;

  return (
    <button
      type="button"
      onClick={() => (isSignedIn ? toggleSidebar() : openSignIn())}
      className="relative aspect-square rounded-2xl overflow-hidden border-4 border-primary/20 block group cursor-pointer w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Toggle AI Chat Sidebar"
    >
      <Image
        src={imageUrl}
        alt={`${firstName} ${lastName}`}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        priority
      />

      <div className="absolute top-4 right-4 flex items-center gap-2 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full">
        <div className="relative">
          <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
          <div className="absolute inset-0 w-2.5 h-2.5 bg-green-500 rounded-full animate-ping" />
        </div>
        <span className="text-xs font-medium text-white">Online</span>
      </div>

      {isHovered && (
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center">
          <div className="text-center space-y-3">
            {isSidebarOpen ? (
              <X className="w-12 h-12 text-white mx-auto" />
            ) : (
              <MessageCircle className="w-12 h-12 text-white mx-auto" />
            )}

            <div className="text-white text-xl font-semibold">
              {isSidebarOpen ? "Close Chat" : "Chat with AI Twin"}
            </div>
            <div className="text-white/80 text-sm">
              {isSidebarOpen ? "Click to close chat" : "Click to open chat"}
            </div>
          </div>
        </div>
      )}
    </button>
  );
}
