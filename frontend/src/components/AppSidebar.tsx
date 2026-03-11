import {
  LayoutDashboard,
  KanbanSquare,
  PlusCircle,
  Users,
  UserPlus,
  Sparkles,
  LogOut,
  ChevronRight,
} from "lucide-react";

import { NavLink } from "@/components/NavLink";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";

const navItems = [
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard, roles: ["Admin", "Manager", "Developer"] },
  { title: "Task Board", url: "/tasks", icon: KanbanSquare, roles: ["Admin", "Manager", "Developer"] },
  { title: "New Task", url: "/tasks/new", icon: PlusCircle, roles: ["Admin", "Manager"] },
  { title: "Team", url: "/team", icon: Users, roles: ["Admin", "Manager", "Developer"] },
  { title: "Add Member", url: "/team/new", icon: UserPlus, roles: ["Admin"] },
  { title: "AI Insights", url: "/ai", icon: Sparkles, roles: ["Admin", "Manager"] },
];

export function AppSidebar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <aside className="group w-16 lg:w-64 transition-all duration-300 bg-card border-r border-border flex flex-col h-screen sticky top-0 shadow-sm">

      {/* Brand */}
      <div className="h-14 flex items-center justify-center lg:justify-between lg:px-6 border-b border-border">
        <div className="flex items-center gap-2">

          <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary text-primary-foreground font-semibold">
            S
          </div>

          <span className="hidden lg:block text-sm font-semibold tracking-tight">
            Stillwater
          </span>
        </div>

        <ChevronRight className="hidden lg:block h-4 w-4 text-muted-foreground" />
      </div>

      {/* User Info */}
      <div className="hidden lg:flex items-center gap-3 px-4 py-4 border-b border-border">

        <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center text-primary font-medium">
          {user?.name?.charAt(0)}
        </div>

        <div className="flex flex-col">
          <span className="text-sm font-medium leading-none">
            {user?.name}
          </span>

          <span className="text-xs text-muted-foreground">
            {user?.role}
          </span>
        </div>

      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-2 py-4 space-y-1">

        {navItems
          .filter((item) => user?.role && item.roles.includes(user.role))
          .map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.url}
                to={item.url}
                className="group/nav relative flex items-center gap-3 px-3 py-2.5 text-sm text-muted-foreground rounded-lg transition-all duration-200 hover:bg-secondary hover:text-foreground"
                activeClassName="bg-secondary text-primary font-medium shadow-sm active"
              >

                {/* Active Bar */}
                <span className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-1 rounded-r bg-primary opacity-0 group-[.active]/nav:opacity-100 transition" />

                {/* Icon */}
                <div className="flex items-center justify-center w-8 h-8 rounded-md group-hover/nav:bg-primary/10 transition">
                  <Icon className="h-4 w-4 group-hover/nav:text-primary transition" />
                </div>

                {/* Label */}
                <span className="hidden lg:block flex-1">
                  {item.title}
                </span>

              </NavLink>
            );
          })}

      </nav>

      {/* Footer */}
      <div className="border-t border-border p-3 space-y-2">

        <button
          onClick={handleLogout}
          className="group flex items-center gap-3 w-full px-3 py-2.5 text-sm text-muted-foreground rounded-lg transition-all duration-200 hover:bg-destructive/10 hover:text-destructive"
        >

          <div className="flex items-center justify-center w-8 h-8 rounded-md group-hover:bg-destructive/10 transition">
            <LogOut className="h-4 w-4" />
          </div>

          <span className="hidden lg:block">
            Sign out
          </span>

        </button>

        {/* Version */}
        <div className="hidden lg:block text-xs text-muted-foreground px-3 pt-2">
          v1.0.0
        </div>

      </div>

    </aside>
  );
}
