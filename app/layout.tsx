import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Victor Castro — Fullstack AI / MLOps Engineer",
  description: "Production RAG, full-stack products and DevOps. Case studies.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
