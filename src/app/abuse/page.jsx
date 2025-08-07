"use client";

import Link from "next/link";
import { useState } from "react";
import { BsEmojiSmileFill } from "react-icons/bs";
import { IoMdSend } from "react-icons/io";
import { arenas } from "@/app/arenaData/arenaData";

const tabs = ["Abuse Report", "Vulgarity Filter", "Blacklist", "Watchlist"];

export default function ArenaPage() {
  const [activeTab, setActiveTab] = useState("Abuse Report");
  const filteredArenas = arenas.filter((arena) => arena.status === activeTab);

  return (
    <div className="p-6 space-y-6 bg-white">
      {/* Tabs and Create Button */}
      <div className="flex items-center border-b border-[#DEDEDE] pb-7">
        <div className="flex gap-4 overflow-hidden">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`items-center gap-2 cursor-pointer opacity-100 border border-gray-300 px-6 py-3 hover:border-[#E8D596] hover:bg-[#FAF7EA] ${
                activeTab === tab
                  ? "bg-[#FAF7EA] text-yellow-600"
                  : "bg-white text-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <h1 className="font-Aeonik font-bold text-[24px] leading-[120%] tracking-[0%] border-b border-[#DEDEDE] pb-6">
        Abuse Report
      </h1>

      {/* Arena List */}
      <div className="space-y-6">
        {filteredArenas.map((arena, index) => (
          <div key={arena.id}>
            <div
              className={`border-b border-[#DEDEDE] pb-4 flex justify-between items-start ${
                index === 0 ? "mt-[60px]" : ""
              }`}
            >
              <div>
                <h2 className="font-aeonik font-bold text-xl leading-[100%] tracking-normal mb-3">
                  {arena.title}
                </h2>

                <div className="text-sm text-gray-600 space-x-2 flex flex-wrap gap-y-1">
                  <span className="font-aeonik font-normal text-base leading-[160%] tracking-normal">
                    {arena.type}
                  </span>
                  <span>&bull;</span>
                  <span className="font-aeonik font-normal text-base leading-[160%] tracking-normal">
                    {arena.date}
                  </span>
                </div>

                <div className="flex items-center justify-center space-x-4 mt-2">
                  <p className="font-aeonik font-normal text-sm leading-[160%] tracking-[0.0125em]">
                    Reported by {arena.creator}
                  </p>

                  <button className="font-[Aeonik] font-normal text-[10px] leading-[100%] tracking-[0%] text-[#D4AF37] border border-[#D4AF37] px-[8px] py-[5px] opacity-100 rounded">
                    View details
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-center space-x-4 mt-2">
                <button className="items-center gap-[10px] opacity-100 px-8 py-2.5 rounded-[12px] border border-[#D4AF37] text-[#D4AF37] cursor-pointer">
                  Go to messages
                </button>

                <button className="items-center gap-[10px] opacity-100 px-8 py-2.5 rounded-[12px] border border-[#D4AF37] text-[#D4AF37] cursor-pointer">
                  View avatar
                </button>

                <Link
                  href={`/abuse/abuse-history/${arena.id}`}
                  className="items-center gap-[10px] opacity-100 px-8 py-2.5 rounded-[12px] border border-[#D4AF37] text-[#D4AF37] cursor-pointer inline-block"
                >
                  More
                </Link>
              </div>
            </div>

            {/* Note Section */}
            <div className="mt-4 w-full">
              <h3 className="font-aeonik font-bold text-base leading-[120%] tracking-normal mb-2">
                Add Note
              </h3>

              <div className="flex items-center border border-[#DEDEDE] rounded px-3 py-2 w-full">
                <input
                  type="text"
                  placeholder="Type note here..."
                  className="w-full py-2 px-2 outline-none font-aeonik font-normal text-sm leading-[140%] tracking-normal placeholder:text-[#A1A1A1]"
                />
                <div className="flex items-center gap-2 ml-2">
                  <div className="text-black text-sm">
                    <BsEmojiSmileFill className="w-[24px] h-[24px] cursor-pointer" />
                  </div>
                  <button className="text-[#D4AF37] text-lg ">
                    <IoMdSend className="w-[19.2px] h-[19.2px] cursor-pointer" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
