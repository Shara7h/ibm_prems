import { ReactNode } from "react";
import { AppSidebar } from "@/components/AppSidebar";
import { Navbar } from "@/components/Navbar";

export function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-full min-h-screen">
      <AppSidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <Navbar />
        <main className="flex-1 p-4 lg:p-6">{children}</main>
      </div>
    </div>
  );
}
