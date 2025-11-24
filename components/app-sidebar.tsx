import { Suspense } from "react";
import { Sidebar, SidebarContent, SidebarRail } from "@/components/ui/sidebar";
import ChatComponent from "./chat/chat-component";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarContent className="h-full w-full bg-white">
        <Suspense fallback={null}>
          <ChatComponent />
        </Suspense>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
