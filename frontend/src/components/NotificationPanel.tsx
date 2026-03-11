import { useNotifications } from "@/context/NotificationContext";
import { ClipboardCheck, Clock, UserPlus } from "lucide-react";

const iconMap = {
  assigned: UserPlus,
  completed: ClipboardCheck,
  deadline: Clock,
};

export function NotificationPanel({ onClose }: { onClose: () => void }) {
  const { notifications, markAsRead, markAllRead } = useNotifications();

  return (
    <>
      <div className="fixed inset-0 z-40" onClick={onClose} />
      <div className="absolute right-0 top-full mt-1 w-80 bg-card border border-border rounded-md shadow-lg z-50 animate-fade-in">
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-border">
          <span className="text-xs font-medium text-foreground">Notifications</span>
          <button onClick={markAllRead} className="text-xs text-primary hover:underline">
            Mark all read
          </button>
        </div>
        <div className="max-h-72 overflow-y-auto">
          {notifications.map((n) => {
            const Icon = iconMap[n.type];
            return (
              <button
                key={n.id}
                onClick={() => markAsRead(n.id)}
                className={`w-full text-left px-4 py-3 flex gap-3 hover:bg-secondary/50 transition-colors ${
                  !n.read ? "bg-primary/[0.03]" : ""
                }`}
              >
                <Icon className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-foreground leading-relaxed font-body">{n.message}</p>
                  <p className="text-[10px] text-muted-foreground mt-0.5">{n.time}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
