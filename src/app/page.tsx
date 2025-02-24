import Link from "next/link";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-4 items-center justify-center">
        <Link
          href="./importing-all-icons"
          className="border border-slate-950 rounded p-2 hover:underline"
        >
          IconResolver importing all icons by default
        </Link>

        <Link
          href="./lazy-loading"
          className="border border-slate-950 rounded p-2 hover:underline"
        >
          IconResolver lazy loading
        </Link>

        <Link
          href="./import-dynamic-with-webpack"
          className="border border-slate-950 rounded p-2 hover:underline"
        >
          IconResolver import dynamic with webpack
        </Link>

        <Link
          href="./import-server-side-and-pass-to-client"
          className="border border-slate-950 rounded p-2 hover:underline"
        >
          Import icon server side and pass to client
        </Link>
      </main>
    </div>
  );
}
