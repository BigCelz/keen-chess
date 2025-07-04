"use client";

import { useState } from "react";
import Modal from "@/app/components/modal/page";
import Link from "next/link";

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
  },
];

const tabs = ["Ongoing", "Pending", "Declined", "Specials"];

export default function ArenaPage() {
  const [activeTab, setActiveTab] = useState("Ongoing");
  const [showModal, setShowModal] = useState(false);
  const [selectedArena, setSelectedArena] = useState(null);

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

        <Link href="/pages/create-arena">
          <button className="gap-[10px] opacity-100 px-8 py-4 rounded-[12px] bg-[#D4AF37] text-white font-aeonik font-bold text-base leading-[100%] tracking-normal cursor-pointer">
            Create Arena
          </button>
        </Link>
      </div>

      {/* Arena List */}
      <div className="space-y-6">
        {filteredArenas.map((arena, index) => (
          <div
            key={arena.id}
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
                  {arena.players}
                </span>
                <span>&bull;</span>
                <span className="font-aeonik font-normal text-base leading-[160%] tracking-normal">
                  {arena.duration}
                </span>
                <span>&bull;</span>
                <span className="font-aeonik font-normal text-base leading-[160%] tracking-normal">
                  {arena.prize}
                </span>
                <span>&bull;</span>
                <span className="font-aeonik font-normal text-base leading-[160%] tracking-normal">
                  {arena.visibility}
                </span>
                <span>&bull;</span>
                <span className="font-aeonik font-normal text-base leading-[160%] tracking-normal">
                  {arena.mode}
                </span>
                <span>&bull;</span>
                <span className="font-aeonik font-normal text-base leading-[160%] tracking-normal">
                  {arena.entry}
                </span>
                <span>&bull;</span>
                <span className="font-aeonik font-normal text-base leading-[160%] tracking-normal">
                  {arena.date}
                </span>
              </div>
              <p className="font-aeonik font-normal text-sm leading-[160%] tracking-[0.0125em] mt-3">
                Created by {arena.creator}
              </p>
            </div>

            <button
              onClick={() => openModal(arena)}
              className="items-center gap-[10px] opacity-100 px-8 py-4 rounded-[12px] border border-[#D4AF37] text-[#D4AF37] cursor-pointer"
            >
              View details
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && selectedArena && (
        <Modal isOpen={showModal} onClose={closeModal} data={selectedArena} />
      )}
    </div>
  );
}
