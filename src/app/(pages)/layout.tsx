import Link from "next/link";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen p-8 space-y-4">
      <Link
        href="/"
        className="border border-slate-950 rounded p-2 hover:underline"
      >
        Go back
      </Link>

      {children}
    </div>
  );
}
