"use client";

import { useState } from "react";
// import Link from "next/link";
import Image from "next/image";
import EventDetailModal from "../event-detail-modal/page";
import NewEntryModal from "../new-entry/page";

const arenas = [
  {
    id: 1,
    title: "Kingz villa",
    type: "Swiss",
    status: "Pending",
    players: "3/10",
    duration: "30 mins",
    prize: "Prize",
    visibility: "Public",
    mode: "Traditional",
    entry: "Free for all",
    date: "12th June, 2024",
    creator: "Usman Mustapha",
    website: "http://www.playchess.com/tournam....",
  },
  {
    id: 2,
    title: "Champions Den",
    type: "Round Robin",
    status: "Ongoing",
    players: "8/12",
    duration: "45 mins",
    prize: "₦50,000",
    visibility: "Public",
    mode: "Blitz",
    entry: "Invite Only",
    date: "19th July, 2024",
    creator: "Adeola Benson",
    website: "http://www.playchess.com/tournam....",
  },
  {
    id: 3,
    title: "Chessyard Royale",
    type: "Round Robin",
    status: "Ongoing",
    players: "6/12",
    duration: "1 hr",
    prize: "Cash Reward",
    visibility: "Public",
    mode: "Traditional",
    entry: "Invite only",
    date: "14th July, 2024",
    creator: "Esther James",
    website: "http://www.playchess.com/tournam....",
  },
  {
    id: 4,
    title: "Battle Square",
    type: "Knockout",
    status: "Specials",
    players: "12/12",
    duration: "45 mins",
    prize: "Trophy",
    visibility: "Public",
    mode: "Blitz",
    entry: "Free for all",
    date: "9th May, 2024",
    creator: "Samuel Ade",
    website: "http://www.playchess.com/tournam....",
  },
  {
    id: 5,
    title: "Mind Clash",
    type: "Arena",
    status: "Declined",
    players: "5/8",
    duration: "20 mins",
    prize: "Medal",
    visibility: "Private",
    mode: "OTB",
    entry: "Restricted",
    date: "1st August, 2024",
    creator: "Fatima Bello",
    website: "http://www.playchess.com/tournam....",
  },
];

const tabs = ["Pending", "Displayed", "Declined"];

export default function EventCalenderPage() {
  const [activeTab, setActiveTab] = useState("Ongoing");
  const [showModal, setShowModal] = useState(false);
  const [selectedArena, setSelectedArena] = useState(null);
  const [showNewEntryModal, setShowNewEntryModal] = useState(false);

  const filteredArenas = arenas.filter((arena) => arena.status === activeTab);

  const openModal = (arena) => {
    setSelectedArena(arena);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedArena(null);
  };

  return (
    <div className="p-6 space-y-6 bg-white">
      {/* Tabs and Create Button */}
      <div className="flex items-center justify-between border-b border-[#DEDEDE] pb-7">
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

        <button
          onClick={() => setShowNewEntryModal(true)}
          className="gap-[10px] opacity-100 px-8 py-4 rounded-[12px] bg-[#D4AF37] text-white font-aeonik font-bold text-base leading-[100%] tracking-normal cursor-pointer"
        >
          New Entry
        </button>
      </div>

      {/* Arena List */}
      <div className="space-y-6">
        {filteredArenas.map((arena, index) => (
          <div
            key={arena.id}
            className={`border-b border-[#DEDEDE] pb-4 flex gap-4 justify-between items-start ${
              index === 0 ? "mt-[60px]" : ""
            }`}
          >
            <div className="w-[100px] h-[100px] flex-shrink-0 bg-gray-100 rounded overflow-hidden">
              <Image
                src="/images/arena.jpg"
                alt="Arena"
                width={100}
                height={100}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Middle content dat grows */}
            <div className="flex-grow px-4">
              <h2 className="font-aeonik font-bold text-xl leading-[100%] tracking-normal mb-3">
                {arena.title}
              </h2>

              <div className="text-sm text-gray-600 space-x-2 flex flex-wrap gap-y-1">
                <span className="font-aeonik font-normal text-base leading-[160%] tracking-normal">
                  {arena.type}
                </span>
                <span className="text-lg font-bold leading-none text-black">
                  &bull;
                </span>

                <span className="font-aeonik font-normal text-base leading-[160%] tracking-normal">
                  {arena.players}
                </span>
                <span className="text-lg font-bold leading-none text-black">
                  &bull;
                </span>

                <span className="font-aeonik font-normal text-base leading-[160%] tracking-normal">
                  {arena.duration}
                </span>
                <span className="text-lg font-bold leading-none text-black">
                  &bull;
                </span>

                <span className="font-aeonik font-normal text-base leading-[160%] tracking-normal">
                  {arena.prize}
                </span>
                <span className="text-lg font-bold leading-none text-black">
                  &bull;
                </span>

                <span className="font-aeonik font-normal text-base leading-[160%] tracking-normal">
                  {arena.visibility}
                </span>
                <span className="text-lg font-bold leading-none text-black">
                  &bull;
                </span>

                <span className="font-aeonik font-normal text-base leading-[160%] tracking-normal">
                  {arena.mode}
                </span>
                <span className="text-lg font-bold leading-none text-black">
                  &bull;
                </span>

                <span className="font-aeonik font-normal text-base leading-[160%] tracking-normal">
                  {arena.entry}
                </span>
                <span className="text-lg font-bold leading-none text-black">
                  &bull;
                </span>

                <span className="font-aeonik font-normal text-base leading-[160%] tracking-normal">
                  {arena.date}
                </span>
                <span className="text-lg font-bold leading-none text-black">
                  &bull;
                </span>

                <span className="font-aeonik font-normal text-base leading-[160%] tracking-normal text-[#d4af37]">
                  {arena.website}
                </span>
              </div>

              <p className="font-aeonik font-normal text-sm leading-[160%] tracking-[0.0125em] mt-3">
                Created by {arena.creator}
              </p>
            </div>

            {/* Button */}
            <div className="flex-shrink-0">
              <button
                onClick={() => openModal(arena)}
                className="px-6 py-3 rounded-[12px] border border-[#D4AF37] text-[#D4AF37] cursor-pointer"
              >
                View details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && selectedArena && (
        <EventDetailModal
          isOpen={showModal}
          onClose={closeModal}
          data={selectedArena}
        />
      )}

      {/* entry modal */}
      {showNewEntryModal && (
        <NewEntryModal onClose={() => setShowNewEntryModal(false)} />
      )}
    </div>
  );
}
