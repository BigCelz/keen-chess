"use client";

import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="h-full w-full bg-[#1F2937] text-white p-6 flex flex-col gap-6">
      <div className="text-2xl font-bold tracking-wide">My Dashboard</div>

      <nav className="flex flex-col gap-3 text-sm">
        <Link
          href="/"
          className="transition-colors text-gray-300 hover:text-white px-2 py-1 rounded"
        >
          Dashboard
        </Link>

        <Link
          href="/pages/arena"
          className="transition-colors text-gray-300 hover:text-white px-2 py-1 rounded"
        >
          Arena
        </Link>

        <Link
          href="/settings"
          className="transition-colors text-gray-300 hover:text-white px-2 py-1 rounded"
        >
          Settings
        </Link>
      </nav>
    </aside>
  );
}
