import { NextResponse } from "next/server";
import { readWaitlistEntries } from "@/lib/waitlist";

function escapeCsv(value: string) {
  const safe = value.replace(/"/g, '""');
  return `"${safe}"`;
}

export async function GET() {
  const entries = await readWaitlistEntries();

  const header = ["id", "name", "email", "role", "source", "interest", "submittedAt"];
  const rows = entries.map((entry) =>
    [
      entry.id,
      entry.name,
      entry.email,
      entry.role,
      entry.source,
      entry.interest,
      entry.submittedAt,
    ]
      .map((value) => escapeCsv(String(value ?? "")))
      .join(",")
  );

  const csv = [header.join(","), ...rows].join("\n");

  return new NextResponse(csv, {
    status: 200,
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": 'attachment; filename="cleanstack-leads.csv"',
    },
  });
}
