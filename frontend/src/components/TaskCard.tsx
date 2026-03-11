import { Task } from "@/data/mockData";
import { GripVertical } from "lucide-react";

const priorityStyles: Record<string, string> = {
  High: "text-primary font-medium",
  Medium: "text-muted-foreground",
  Low: "text-muted-foreground/60",
};

export function TaskCard({
  task,
  onDragStart,
}: {
  task: Task;
  onDragStart: (e: React.DragEvent, taskId: string) => void;
}) {
  return (
    <div
      draggable
      onDragStart={(e) => onDragStart(e, task.id)}
      className="bg-card border border-border rounded-md p-3 cursor-grab active:cursor-grabbing hover:border-primary/30 transition-colors group"
    >
      <div className="flex items-start justify-between">
        <h4 className="text-sm font-medium text-foreground leading-snug">{task.title}</h4>
        <GripVertical className="h-3.5 w-3.5 text-muted-foreground/40 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
      </div>
      <p className="text-xs text-muted-foreground mt-1">{task.assignee}</p>
      <div className="flex items-center justify-between mt-2.5">
        <span className={`text-[10px] uppercase tracking-wider ${priorityStyles[task.priority]}`}>
          {task.priority}
        </span>
        <span className="text-[10px] text-muted-foreground">{task.deadline}</span>
      </div>
    </div>
  );
}
