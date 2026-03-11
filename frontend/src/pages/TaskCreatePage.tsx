import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppLayout } from "@/components/AppLayout";
import { useTasks } from "@/context/TaskContext";
import { mockUsers, mockAISuggestions } from "@/data/mockData";
import type { Task } from "@/data/mockData";

export default function TaskCreatePage() {
  const navigate = useNavigate();
  const { addTask } = useTasks();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState<Task["priority"]>("Medium");
  const [deadline, setDeadline] = useState("");
  const [assigneeId, setAssigneeId] = useState("");
  const [requiredSkill, setRequiredSkill] = useState("");
  const [showAI, setShowAI] = useState(false);

  const developers = mockUsers.filter((u) => u.role === "Developer");
  const aiSuggestion = mockAISuggestions[0];

  const handleAssigneeFocus = () => {
    setShowAI(true);
  };

  const acceptSuggestion = () => {
    setAssigneeId(aiSuggestion.suggestedDevId);
    setShowAI(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const assignee = mockUsers.find((u) => u.id === assigneeId);
    addTask({
      title,
      description,
      priority,
      deadline,
      assignee: assignee?.name || "Unassigned",
      assigneeId,
      requiredSkill,
      status: "Todo",
    });
    navigate("/tasks");
  };

  return (
    <AppLayout>
      <div className="max-w-lg">
        <h1 className="text-lg font-semibold text-foreground">Create Task</h1>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="text-xs font-medium text-foreground block mb-1.5">Title</label>
            <input
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full h-9 px-3 text-sm bg-card border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-primary text-foreground"
            />
          </div>

          <div>
            <label className="text-xs font-medium text-foreground block mb-1.5">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              className="w-full px-3 py-2 text-sm bg-card border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-primary text-foreground font-serif resize-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-medium text-foreground block mb-1.5">Priority</label>
              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value as Task["priority"])}
                className="w-full h-9 px-3 text-sm bg-card border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-primary text-foreground"
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-medium text-foreground block mb-1.5">Deadline</label>
              <input
                type="date"
                required
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                className="w-full h-9 px-3 text-sm bg-card border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-primary text-foreground"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-medium text-foreground block mb-1.5">Required Skill</label>
            <input
              value={requiredSkill}
              onChange={(e) => setRequiredSkill(e.target.value)}
              className="w-full h-9 px-3 text-sm bg-card border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-primary text-foreground"
              placeholder="e.g. React, Node.js"
            />
          </div>

          <div>
            <label className="text-xs font-medium text-foreground block mb-1.5">Assign Member</label>
            <select
              value={assigneeId}
              onChange={(e) => setAssigneeId(e.target.value)}
              onFocus={handleAssigneeFocus}
              className={`w-full h-9 px-3 text-sm bg-card border rounded-md focus:outline-none focus:ring-1 text-foreground transition-colors ${
                showAI ? "border-primary ring-1 ring-primary" : "border-border focus:ring-primary"
              }`}
            >
              <option value="">Select member</option>
              {developers.map((u) => (
                <option key={u.id} value={u.id}>{u.name}</option>
              ))}
            </select>

            {showAI && (
              <div className="mt-2 animate-fade-in">
                <p className="text-xs text-muted-foreground font-body">
                  AI suggests <span className="font-sans font-medium text-foreground">{aiSuggestion.suggestedDev}</span>{" "}
                  ({aiSuggestion.reasons[0]}, {aiSuggestion.reasons[1].toLowerCase()})
                </p>
                <div className="flex gap-3 mt-1.5">
                  <button type="button" onClick={acceptSuggestion} className="text-xs text-primary hover:underline font-medium">
                    Accept
                  </button>
                  <button type="button" onClick={() => setShowAI(false)} className="text-xs text-muted-foreground hover:text-foreground">
                    Assign manually
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="submit"
              className="h-9 px-4 bg-primary text-primary-foreground text-sm font-medium rounded-md hover:opacity-90 transition-opacity"
            >
              Create task
            </button>
            <button
              type="button"
              onClick={() => navigate("/tasks")}
              className="h-9 px-4 bg-secondary text-secondary-foreground text-sm rounded-md hover:bg-secondary/80 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </AppLayout>
  );
}
