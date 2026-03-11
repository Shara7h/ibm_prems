import { useState } from "react";
import { mockAISuggestions } from "@/data/mockData";
import { Sparkles } from "lucide-react";

export function AISuggestionPanel() {
  const [accepted, setAccepted] = useState<Record<string, boolean>>({});

  return (
    <div className="space-y-4">
      {mockAISuggestions.map((s) => (
        <div
          key={s.taskId}
          className={`bg-card border rounded-md p-4 transition-colors ${
            accepted[s.taskId] ? "border-border" : "border-primary/30"
          }`}
        >
          <div className="flex items-start gap-2.5">
            <Sparkles className="h-4 w-4 text-primary shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-xs text-muted-foreground">Task</p>
              <p className="text-sm font-medium text-foreground">{s.taskTitle}</p>

              <div className="mt-3 py-2 px-3 bg-primary/[0.03] rounded border border-primary/10">
                <p className="text-xs text-muted-foreground">Suggested Developer</p>
                <p className="text-sm font-medium text-foreground mt-0.5">{s.suggestedDev}</p>
                <ul className="mt-2 space-y-1">
                  {s.reasons.map((r, i) => (
                    <li key={i} className="text-xs text-muted-foreground font-body">
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              {!accepted[s.taskId] ? (
                <div className="flex gap-3 mt-3">
                  <button
                    onClick={() => setAccepted((p) => ({ ...p, [s.taskId]: true }))}
                    className="text-xs text-primary hover:underline font-medium"
                  >
                    Accept
                  </button>
                  <button className="text-xs text-muted-foreground hover:text-foreground">
                    Assign manually
                  </button>
                </div>
              ) : (
                <p className="text-xs text-muted-foreground mt-3 animate-fade-in">
                  ✓ {s.suggestedDev} assigned
                </p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
