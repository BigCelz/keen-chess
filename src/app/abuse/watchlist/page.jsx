"use client";

import { BsEmojiSmileFill } from "react-icons/bs";
import { IoMdSend } from "react-icons/io";
import Link from "next/link";
import { arenas } from "@/app/arenaData/arenaData";

const WatchlistPage = ({ activeTab = "Watchlist" }) => {
  const filteredArenas =
    activeTab === "Watchlist"
      ? arenas
      : arenas.filter((arena) => arena.status === activeTab);

  return (
    <div>
      <h1 className="font-Aeonik font-bold text-[24px] leading-[120%] tracking-[0%] border-b border-[#DEDEDE] pb-6">
        Abuse Watchlist
      </h1>

      <div className="space-y-6">
        {filteredArenas.length > 0 ? (
          filteredArenas.map((arena, index) => (
            <div key={arena.id}>
              <div
                className={`border-b border-[#DEDEDE] pb-4 flex justify-between items-start ${
                  index === 0 ? "mt-[60px]" : ""
                }`}
              >
                {/* Left */}
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
                    <button className="font-[Aeonik] font-normal text-[10px] leading-[100%] tracking-[0%] text-[#D4AF37] border border-[#D4AF37] px-[8px] py-[5px] rounded">
                      View details
                    </button>
                  </div>
                </div>

                {/* Right */}
                <div className="flex items-center justify-center space-x-4 mt-2">
                  <button className="px-8 py-2.5 rounded-[12px] border border-[#D4AF37] text-[#D4AF37] cursor-pointer">
                    Go to messages
                  </button>
                  <button className="px-8 py-2.5 rounded-[12px] border border-[#D4AF37] text-[#D4AF37] cursor-pointer">
                    View avatar
                  </button>
                  <Link
                    href={`/abuse/abuse-history/${arena.id}`}
                    className="px-8 py-2.5 rounded-[12px] border border-[#D4AF37] text-[#D4AF37] cursor-pointer inline-block"
                  >
                    More
                  </Link>
                </div>
              </div>

              {/* Note Section */}
              <div className="mt-4 w-full">
                <h3 className="font-aeonik font-bold text-base leading-[120%] mb-2">
                  Add Note
                </h3>
                <div className="flex items-center border border-[#DEDEDE] rounded px-3 py-2 w-full">
                  <input
                    type="text"
                    placeholder="Type note here..."
                    className="w-full py-2 px-2 outline-none font-aeonik text-sm placeholder:text-[#A1A1A1]"
                  />
                  <div className="flex items-center gap-2 ml-2">
                    <BsEmojiSmileFill className="w-[24px] h-[24px] cursor-pointer text-black" />
                    <IoMdSend className="w-[19.2px] h-[19.2px] cursor-pointer text-[#D4AF37]" />
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 mt-6">No items in watchlist.</p>
        )}
      </div>
    </div>
  );
};

export default WatchlistPage;



