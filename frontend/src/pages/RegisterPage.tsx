import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import type { User } from "@/data/mockData";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<User["role"]>("Developer");
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (register(name, email, password, role)) {
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-sm">
        <h1 className="text-lg font-semibold text-foreground text-center">Create account</h1>
        <p className="text-xs text-muted-foreground text-center mt-1 font-body">Join your team on Stillwater.</p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div>
            <label className="text-xs font-medium text-foreground block mb-1.5">Name</label>
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full h-9 px-3 text-sm bg-card border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-primary text-foreground"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-foreground block mb-1.5">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-9 px-3 text-sm bg-card border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-primary text-foreground"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-foreground block mb-1.5">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-9 px-3 text-sm bg-card border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-primary text-foreground"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-foreground block mb-1.5">Role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value as User["role"])}
              className="w-full h-9 px-3 text-sm bg-card border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-primary text-foreground"
            >
              <option value="Admin">Admin</option>
              <option value="Manager">Manager</option>
              <option value="Developer">Developer</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full h-9 bg-primary text-primary-foreground text-sm font-medium rounded-md hover:opacity-90 transition-opacity"
          >
            Create account
          </button>
        </form>

        <p className="text-xs text-muted-foreground text-center mt-6">
          Already have an account?{" "}
          <Link to="/" className="text-primary hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
