"use client"

import type { CHAT_PROFILE_QUERYResult } from "@/sanity.types";
import { useSidebar } from "../ui/sidebar";

const Chat = ({ profile }: { profile: CHAT_PROFILE_QUERYResult | null }) => {
  const { toggleSidebar } = useSidebar();

//   this is for generating the greet
  const getGreeting = () => {
    if (!profile?.firstName) {
      return "Hi there! Ask me anything about my work, experience, or projects.";
    }

    // .filter(Boolean) removes all falsy values from the array
    const fullName = [profile.firstName, profile.lastName]
      .filter(Boolean)
      .join(" ");

    return `Hi! I'm ${fullName}. Ask me anything about my work, experience, or projects.`;
  };

  return <div>Chat</div>;
};

export default Chat;
