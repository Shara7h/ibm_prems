import {
  Bell,
  Search
} from "lucide-react";

import { useState } from "react";
import { NotificationPanel } from "@/components/NotificationPanel";

export function Navbar() {

  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <header className="h-14 border-b border-border bg-card flex items-center justify-between px-4 lg:px-8 sticky top-0 z-20">

      {/* LEFT SIDE */}
      <div className="flex items-center gap-6 flex-1">

        {/* Page Title */}
        <h1 className="hidden md:block text-sm font-semibold text-foreground">
          Dashboard
        </h1>

        {/* Global Search */}
        <div className="relative hidden md:block w-full max-w-sm">

          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />

          <input
            type="text"
            placeholder="Search tasks, members..."
            className="w-full h-9 pl-9 pr-3 text-sm rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/40"
          />

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-3">

        {/* Notifications */}
        {/* Notifications */}
<div className="relative">
  <button
    onClick={() => setShowNotifications(!showNotifications)}
    className="relative flex items-center justify-center w-9 h-9 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition"
  >
    <Bell className="h-4 w-4" />
    <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary" />
  </button>

  {showNotifications && (
    <div className="fixed top-14 right-4 z-50">
      {/* Adjust `top` to be below navbar height */}
      <NotificationPanel onClose={() => setShowNotifications(false)} />
    </div>
  )}
</div>


      </div>

    </header>
  );
}
