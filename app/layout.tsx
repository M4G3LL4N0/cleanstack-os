import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CleanStack OS — workstation health as a catalogued system",
  description:
    "CleanStack OS is a workstation-health concept: workflow-aware cleanup, archive-first recommendations, and project-aware storage. Separate from the CleanStack Mac disk tool.",
  icons: {
    icon: [
      { url: "/favicon.ico?v=2" },
      { url: "/favicon.svg?v=2", type: "image/svg+xml" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#0b1020] text-white antialiased">{children}</body>
    </html>
  );
}
