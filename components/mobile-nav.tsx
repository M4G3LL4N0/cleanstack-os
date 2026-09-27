"use client";

import Link from "next/link";
import { useState } from "react";

type NavItem = {
  href: string;
  label: string;
};

export default function MobileNav({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="xl:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/[0.06]"
      >
        {open ? "Close" : "Menu"}
      </button>

      {open ? (
        <div className="absolute left-4 right-4 top-[72px] z-50 rounded-[1.75rem] border border-white/10 bg-black/95 p-4 shadow-[0_24px_100px_rgba(0,0,0,0.55)] backdrop-blur-xl">
          <div className="grid gap-2">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/75 transition hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
