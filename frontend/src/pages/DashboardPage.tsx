import { AppLayout } from "@/components/AppLayout";
import { ActivityFeed } from "@/components/ActivityFeed";
import { useTasks } from "@/context/TaskContext";
import { useNotifications } from "@/context/NotificationContext";

export default function DashboardPage() {
  const { tasks } = useTasks();
  const { notifications, unreadCount } = useNotifications();

  const stats = [
    { label: "Total Tasks", value: tasks.length },
    { label: "In Progress", value: tasks.filter((t) => t.status === "In Progress").length },
    { label: "Completed", value: tasks.filter((t) => t.status === "Completed").length },
    { label: "Overdue", value: tasks.filter((t) => new Date(t.deadline) < new Date() && t.status !== "Completed").length },
  ];

  return (
    <AppLayout>
      <div className="max-w-3xl">
        <h1 className="text-lg font-semibold text-foreground">Today's Focus</h1>
        <p className="text-xs text-muted-foreground mt-0.5 font-body">
          {new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-6">
          {stats.map((s) => (
            <div key={s.label} className="bg-card border border-border rounded-md p-3">
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{s.label}</p>
              <p className="text-xl font-semibold text-foreground mt-1">{s.value}</p>
            </div>
          ))}
        </div>

        {/* Notification preview */}
        {unreadCount > 0 && (
          <div className="mt-6">
            <h2 className="text-xs font-medium text-foreground uppercase tracking-wider mb-2">
              Unread ({unreadCount})
            </h2>
            <div className="bg-card border border-border rounded-md divide-y divide-border">
              {notifications
                .filter((n) => !n.read)
                .map((n) => (
                  <div key={n.id} className="px-4 py-2.5">
                    <p className="text-xs text-foreground font-body">{n.message}</p>
                    <p className="text-[10px] text-muted-foreground mt-0.5">{n.time}</p>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* Activity */}
        <div className="mt-6">
          <h2 className="text-xs font-medium text-foreground uppercase tracking-wider mb-2">Recent Activity</h2>
          <div className="bg-card border border-border rounded-md px-4">
            <ActivityFeed />
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
