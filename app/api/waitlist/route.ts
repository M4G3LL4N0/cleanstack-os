import { promises as fs } from "fs";
import path from "path";
import { NextRequest, NextResponse } from "next/server";
import type { WaitlistEntry } from "@/lib/waitlist";

type WaitlistPayload = {
  name?: string;
  email?: string;
  role?: string;
  interest?: string;
  source?: string;
};

const dataFilePath = path.join(process.cwd(), "data", "waitlist.json");

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function readEntries(): Promise<WaitlistEntry[]> {
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

async function writeEntries(entries: WaitlistEntry[]) {
  await fs.mkdir(path.dirname(dataFilePath), { recursive: true });
  await fs.writeFile(dataFilePath, JSON.stringify(entries, null, 2), "utf8");
}

export async function GET() {
  try {
    const entries = await readEntries();

    return NextResponse.json({
      ok: true,
      count: entries.length,
      entries,
    });
  } catch {
    return NextResponse.json(
      { ok: false, message: "Failed to load waitlist entries." },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as WaitlistPayload;

    const name = (body.name || "").trim();
    const email = (body.email || "").trim().toLowerCase();
    const role = (body.role || "").trim();
    const interest = (body.interest || "").trim();
    const source = (body.source || "website").trim();

    if (!name) {
      return NextResponse.json(
        { ok: false, message: "Name is required." },
        { status: 400 }
      );
    }

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { ok: false, message: "A valid email is required." },
        { status: 400 }
      );
    }

    const entries = await readEntries();
    const alreadyExists = entries.some((entry) => entry.email === email);

    if (alreadyExists) {
      return NextResponse.json({
        ok: true,
        message: "You’re already on the waitlist.",
      });
    }

    const newEntry: WaitlistEntry = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`,
      name,
      email,
      role,
      interest,
      source,
      submittedAt: new Date().toISOString(),
    };

    entries.unshift(newEntry);
    await writeEntries(entries);

    return NextResponse.json({
      ok: true,
      message: "Joined waitlist successfully.",
    });
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid request." },
      { status: 400 }
    );
  }
}
