import { useState } from "react";
import { AppLayout } from "@/components/AppLayout";
import { TaskCard } from "@/components/TaskCard";
import { useTasks } from "@/context/TaskContext";
import type { Task } from "@/data/mockData";

const columns: Task["status"][] = ["Todo", "In Progress", "Review", "Completed"];

export default function TaskBoardPage() {
  const { tasks, updateTaskStatus } = useTasks();
  const [dragOverCol, setDragOverCol] = useState<string | null>(null);

  const handleDragStart = (e: React.DragEvent, taskId: string) => {
    e.dataTransfer.setData("taskId", taskId);
  };

  const handleDrop = (e: React.DragEvent, status: Task["status"]) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData("taskId");
    if (taskId) updateTaskStatus(taskId, status);
    setDragOverCol(null);
  };

  const handleDragOver = (e: React.DragEvent, col: string) => {
    e.preventDefault();
    setDragOverCol(col);
  };

  return (
    <AppLayout>
      <h1 className="text-lg font-semibold text-foreground">Task Board</h1>
      <div className="mt-4 flex gap-4 overflow-x-auto pb-4">
        {columns.map((col) => {
          const colTasks = tasks.filter((t) => t.status === col);
          return (
            <div
              key={col}
              onDrop={(e) => handleDrop(e, col)}
              onDragOver={(e) => handleDragOver(e, col)}
              onDragLeave={() => setDragOverCol(null)}
              className={`w-64 shrink-0 rounded-md border p-3 transition-colors ${
                dragOverCol === col ? "border-primary bg-primary/[0.02]" : "border-border bg-secondary/30"
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xs font-medium text-foreground uppercase tracking-wider">{col}</h3>
                <span className="text-[10px] text-muted-foreground">{colTasks.length}</span>
              </div>
              <div className="space-y-2">
                {colTasks.map((task) => (
                  <TaskCard key={task.id} task={task} onDragStart={handleDragStart} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </AppLayout>
  );
}
