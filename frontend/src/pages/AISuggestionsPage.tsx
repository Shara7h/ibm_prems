import { AppLayout } from "@/components/AppLayout";
import { AISuggestionPanel } from "@/components/AISuggestionPanel";

export default function AISuggestionsPage() {
  return (
    <AppLayout>
      <div className="max-w-lg">
        <h1 className="text-lg font-semibold text-foreground">AI Insights</h1>
        <p className="text-xs text-muted-foreground mt-0.5 font-body">
          Intelligent assignment suggestions based on skills and workload.
        </p>
        <div className="mt-6">
          <AISuggestionPanel />
        </div>
      </div>
    </AppLayout>
  );
}
