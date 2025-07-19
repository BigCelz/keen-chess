"use client";

import { useState } from "react";
import Link from "next/link";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

// Reusable NavItem
const NavItem = ({ href, label }) => (
  <Link
    href={href}
    className="transition-colors text-gray-300 hover:text-white px-2 py-1 rounded"
  >
    {label}
  </Link>
);

// Trivia Submenu
const TriviaSubmenu = ({ links }) => (
  <div className="ml-4 pl-4 mt-2 border-l-2 border-[#d4af37] flex flex-col gap-2 relative">
    {links.map(({ label, href }) => (
      <Link
        key={label}
        href={href}
        className="relative pl-4 py-2 text-sm text-gray-400 hover:text-white transition-colors 
          before:content-[''] before:absolute before:top-1/2 before:-left-4 before:w-6 before:h-px before:bg-[#d4af37]"
      >
        {label}
      </Link>
    ))}
  </div>
);

export default function Sidebar() {
  const [showTriviaSubmenu, setShowTriviaSubmenu] = useState(false);

  return (
    <aside className="h-full w-full bg-[#1F2937] text-white p-6 flex flex-col gap-6">
      <div className="text-2xl font-bold tracking-wide">My Dashboard</div>

      <nav className="flex flex-col gap-3 text-sm">
        <NavItem href="/" label="Dashboard" />
        <NavItem href="/pages/arena" label="Arena" />
        <NavItem href="/components/event-calender/" label="Event Calender" />

        {/* Collapsible Trivia Section */}
        <div className="flex flex-col">
          <button
            onClick={() => setShowTriviaSubmenu(!showTriviaSubmenu)}
            className="flex items-center justify-between text-gray-300 hover:text-white px-2 py-1 rounded w-full"
          >
            <span>Trivia</span>
            {showTriviaSubmenu ? (
              <FaChevronUp className="w-4 h-4" />
            ) : (
              <FaChevronDown className="w-4 h-4" />
            )}
          </button>

          {showTriviaSubmenu && (
            <TriviaSubmenu
              links={[
                { label: "Questions", href: "/trivia/questions" },
                { label: "Results", href: "/trivia/results" },
                { label: "Leaderboard", href: "/trivia/leaderboard" }, 
              ]}
            />
          )}
        </div>
      </nav>
    </aside>
  );
}
