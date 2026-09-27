import { promises as fs } from "fs";
import path from "path";

export type WaitlistEntry = {
  id: string;
  name: string;
  email: string;
  role: string;
  interest: string;
  source: string;
  submittedAt: string;
};

const dataFilePath = path.join(process.cwd(), "data", "waitlist.json");

export async function readWaitlistEntries(): Promise<WaitlistEntry[]> {
  try {
    const raw = await fs.readFile(dataFilePath, "utf8");
    const parsed = JSON.parse(raw) as Partial<WaitlistEntry>[];

    if (!Array.isArray(parsed)) return [];

    return parsed.map((entry) => ({
      id: entry.id || `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`,
      name: entry.name || "",
      email: entry.email || "",
      role: entry.role || "",
      interest: entry.interest || "",
      source: entry.source || "unknown",
      submittedAt: entry.submittedAt || new Date().toISOString(),
    }));
  } catch {
    return [];
  }
}
