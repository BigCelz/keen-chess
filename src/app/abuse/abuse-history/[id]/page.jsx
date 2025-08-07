"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { arenas } from "@/app/arenaData/arenaData";
import Link from "next/link";

export default function AbuseHistoryProfile() {
  const { id } = useParams();
  const [arena, setArena] = useState(null);

  useEffect(() => {
    const arenaData = arenas.find((a) => a.id === parseInt(id));
    setArena(arenaData);
  }, [id]);

  if (!arena) {
    return <p className="p-6">User with ID "{id}" not found.</p>;
  }

  const { profile, abuseHistory } = arena;

  return (
    <div className="p-6 bg-white">
      <h1 className="font-Aeonik font-normal text-base leading-[160%] tracking-[0%] mb-10">
        <Link href="/abuse">Abuse report</Link>{" "}
        <span className="text-[#d4af37] font-semibold">/ Abuse history</span>
      </h1>
      {/* Profile Header */}
      <div className="border-b border-[#dedede] pb-6 mb-6">
        <div className="flex items-center gap-4 ">
          <Image
            src={profile?.avatar || "/default-avatar.png"}
            alt="avatar"
            width={100}
            height={100}
            className=" object-cover"
          />
          <div className="flex-1 space-y-3">
            <h1 className="font-Aeonik font-bold text-2xl leading-[100%] tracking-[0%]">
              {arena.title}
            </h1>
            <p className="text-gray-600">
              <span className="font-aeonik font-normal text-sm leading-[160%] tracking-[0.0125em]">
                {profile.username}
              </span>{" "}
              •{" "}
              <span className="font-aeonik font-normal text-sm leading-[160%] tracking-[0.0125em]">
                {profile.playerId}
              </span>{" "}
              •{" "}
              <span className="font-aeonik font-normal text-sm leading-[160%] tracking-[0.0125em]">
                {profile.rank}
              </span>
            </p>
            <p className="text-gray-400 text-xs">Joined: {profile.joined}</p>
          </div>
        </div>
        <h2 className="text-base font-semibold mt-4">Abuse History</h2>
      </div>

      {/* Abuse History */}
      <div className="space-y-4">
        {abuseHistory.length > 0 ? (
          <ul className="space-y-4">
            {abuseHistory.map((abuse, index) => (
              <li
                key={index}
                className="bg-white rounded-md px-4 py-5 flex justify-between items-start border-b border-[#dedede] pb-6"
              >
                <div className="space-y-4 flex flex-col">
                  <p className="font-aeonik font-bold text-2xl leading-[100%] tracking-[0]">{arena.title}</p>
                  <p className="font-aeonik font-normal text-base leading-[160%] tracking-[0] text-[#666666]">
                    <span>Cussing</span> • {abuse.date}
                  </p>
                  <p className="text-gray-500 text-xs mt-1">
                    Reported by{" "}
                    <span className="text-yellow-600">{abuse.reporter}</span>{" "}
                    <button className="ml-2 px-2 py-0.5 text-[11px] font-medium text-yellow-700 border border-yellow-600 rounded hover:bg-yellow-100">
                      View profile
                    </button>
                  </p>
                </div>
                <div className="ml-4 mt-1">
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded ${
                      abuse.action === "Avatar removed"
                        ? "bg-[#f5f5f5] text-gray-800 py-2 px-4  font-aeonik font-bold text-xs leading-[160%] tracking-[0] items-center flex"
                        : abuse.action === "Ignored"
                        ? "bg-[#f5f5f5] text-gray-800 py-2 px-4  font-aeonik font-bold text-xs leading-[160%] tracking-[0] items-center flex"
                        : abuse.action === "Issued warning"
                        ? "bg-[#f5f5f5] text-gray-800 py-2 px-4  font-aeonik font-bold text-xs leading-[160%] tracking-[0] items-center flex"
                        : abuse.action === "Added to watchlist"
                        ? "bg-[#f5f5f5] text-gray-800 py-2 px-4  font-aeonik font-bold text-xs leading-[160%] tracking-[0] items-center flex"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {abuse.action}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No abuse history found.</p>
        )}
      </div>
    </div>
  );
}
