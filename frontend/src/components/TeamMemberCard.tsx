import { User } from "@/data/mockData";
import { useNavigate } from "react-router-dom";

export function TeamMemberCard({ user }: { user: User }) {
  const navigate = useNavigate();

  return (
    <div className="bg-card border border-border rounded-md p-4">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-sm font-medium text-foreground">{user.name}</h3>
          <p className="text-xs text-muted-foreground mt-0.5">{user.role}</p>
        </div>
        <span className="text-xs text-muted-foreground">{user.taskCount} tasks</span>
      </div>
      <div className="flex flex-wrap gap-1.5 mt-3">
        {user.skills.map((skill) => (
          <span key={skill} className="text-[10px] px-2 py-0.5 bg-secondary text-secondary-foreground rounded">
            {skill}
          </span>
        ))}
      </div>
      <button
        onClick={() => navigate("/tasks/new")}
        className="mt-3 text-xs text-primary hover:underline"
      >
        Assign task
      </button>
    </div>
  );
}
