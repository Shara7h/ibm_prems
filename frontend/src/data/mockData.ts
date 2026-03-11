export interface User {
  id: string;
  name: string;
  email: string;
  role: "Admin" | "Manager" | "Developer";
  skills: string[];
  taskCount: number;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  priority: "Low" | "Medium" | "High";
  status: "Todo" | "In Progress" | "Review" | "Completed";
  assignee: string;
  assigneeId: string;
  deadline: string;
  requiredSkill: string;
  createdAt: string;
}

export interface Notification {
  id: string;
  type: "assigned" | "completed" | "deadline";
  message: string;
  time: string;
  read: boolean;
}

export interface Activity {
  id: string;
  action: string;
  user: string;
  time: string;
}

export const mockUsers: User[] = [
  { id: "u1", name: "Rahul Sharma", email: "rahul@team.com", role: "Developer", skills: ["Node.js", "React", "MongoDB"], taskCount: 2 },
  { id: "u2", name: "Priya Patel", email: "priya@team.com", role: "Developer", skills: ["Python", "Django", "PostgreSQL"], taskCount: 3 },
  { id: "u3", name: "Alex Chen", email: "alex@team.com", role: "Manager", skills: ["Project Management", "Agile"], taskCount: 1 },
  { id: "u4", name: "Sara Kim", email: "sara@team.com", role: "Developer", skills: ["React", "TypeScript", "GraphQL"], taskCount: 1 },
  { id: "u5", name: "James Wilson", email: "james@team.com", role: "Admin", skills: ["DevOps", "AWS", "Docker"], taskCount: 0 },
];

export const mockTasks: Task[] = [
  { id: "t1", title: "Build Login API", description: "Implement JWT-based authentication endpoint with refresh tokens.", priority: "High", status: "Todo", assignee: "Rahul Sharma", assigneeId: "u1", deadline: "2026-03-15", requiredSkill: "Node.js", createdAt: "2026-03-10" },
  { id: "t2", title: "Design Dashboard UI", description: "Create wireframes and implement the main dashboard layout.", priority: "Medium", status: "In Progress", assignee: "Sara Kim", assigneeId: "u4", deadline: "2026-03-18", requiredSkill: "React", createdAt: "2026-03-09" },
  { id: "t3", title: "Database Schema Migration", description: "Migrate user tables to new schema with role-based fields.", priority: "High", status: "Review", assignee: "Priya Patel", assigneeId: "u2", deadline: "2026-03-12", requiredSkill: "PostgreSQL", createdAt: "2026-03-08" },
  { id: "t4", title: "Setup CI/CD Pipeline", description: "Configure GitHub Actions for automated testing and deployment.", priority: "Medium", status: "Completed", assignee: "James Wilson", assigneeId: "u5", deadline: "2026-03-10", requiredSkill: "DevOps", createdAt: "2026-03-05" },
  { id: "t5", title: "Implement Search Feature", description: "Add full-text search across tasks with filters.", priority: "Low", status: "Todo", assignee: "Priya Patel", assigneeId: "u2", deadline: "2026-03-20", requiredSkill: "Python", createdAt: "2026-03-10" },
  { id: "t6", title: "API Rate Limiting", description: "Add rate limiting middleware to protect endpoints.", priority: "Medium", status: "In Progress", assignee: "Rahul Sharma", assigneeId: "u1", deadline: "2026-03-16", requiredSkill: "Node.js", createdAt: "2026-03-09" },
  { id: "t7", title: "Write Unit Tests", description: "Cover core modules with unit and integration tests.", priority: "Low", status: "Todo", assignee: "Sara Kim", assigneeId: "u4", deadline: "2026-03-22", requiredSkill: "TypeScript", createdAt: "2026-03-11" },
];

export const mockNotifications: Notification[] = [
  { id: "n1", type: "assigned", message: "You were assigned 'Build Login API'", time: "2 hours ago", read: false },
  { id: "n2", type: "completed", message: "'Setup CI/CD Pipeline' was completed", time: "5 hours ago", read: false },
  { id: "n3", type: "deadline", message: "'Database Schema Migration' deadline approaching", time: "1 day ago", read: true },
  { id: "n4", type: "assigned", message: "You were assigned 'Write Unit Tests'", time: "1 day ago", read: true },
];

export const mockActivities: Activity[] = [
  { id: "a1", action: "completed 'Setup CI/CD Pipeline'", user: "James Wilson", time: "5 hours ago" },
  { id: "a2", action: "moved 'Database Schema Migration' to Review", user: "Priya Patel", time: "8 hours ago" },
  { id: "a3", action: "created task 'Write Unit Tests'", user: "Alex Chen", time: "1 day ago" },
  { id: "a4", action: "assigned 'Build Login API' to Rahul", user: "Alex Chen", time: "2 days ago" },
];

export const mockAISuggestions = [
  {
    taskId: "t1",
    taskTitle: "Build Login API",
    suggestedDev: "Rahul Sharma",
    suggestedDevId: "u1",
    reasons: ["Skill match: Node.js", "Low workload (2 tasks)", "Past experience with auth systems"],
  },
  {
    taskId: "t5",
    taskTitle: "Implement Search Feature",
    suggestedDev: "Priya Patel",
    suggestedDevId: "u2",
    reasons: ["Skill match: Python", "Domain expertise in data queries", "Available capacity"],
  },
];
