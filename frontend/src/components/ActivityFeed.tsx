import { mockActivities } from "@/data/mockData";

export function ActivityFeed() {
  return (
    <div className="space-y-0">
      {mockActivities.map((a) => (
        <div key={a.id} className="py-2.5 border-b border-border last:border-0">
          <p className="text-xs text-foreground font-body">
            <span className="font-sans font-medium">{a.user}</span> {a.action}
          </p>
          <p className="text-[10px] text-muted-foreground mt-0.5">{a.time}</p>
        </div>
      ))}
    </div>
  );
}
