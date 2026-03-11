import { AppLayout } from "@/components/AppLayout";
import { TeamMemberCard } from "@/components/TeamMemberCard";
import { mockUsers } from "@/data/mockData";

export default function TeamPage() {
  return (
    <AppLayout>
      <h1 className="text-lg font-semibold text-foreground">Team</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
        {mockUsers.map((u) => (
          <TeamMemberCard key={u.id} user={u} />
        ))}
      </div>
    </AppLayout>
  );
}
