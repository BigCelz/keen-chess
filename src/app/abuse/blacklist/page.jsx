"use client";

import React, { useState } from "react";
import { useVulgarStore } from "@/store/vulgarStore";

const BlacklistPage = () => {
 
  return (
    <div className="p-6 space-y-6 h-screen">
      {/* Word list */}
      <div>
        <h2 className="font-aeonik font-bold text-[24px] leading-[1] tracking-[0]">
          User Ban: IP Address and Fingerprint
        </h2>
        <p className="font-aeonik font-normal text-[20px] leading-[1.6] tracking-[0] mt-2 text-[#8c8c8c]">
          Permanently restrict access for users associated with suspicious or
          harmful activity.
        </p>

        {/* ip data*/}
        <div className="mt-10">
          <label className="font-aeonik font-normal text-[16px] leading-[1.6] tracking-[0] mb-2">
            IP Data
          </label>
          <div className="mt-3">
            <input
              type="text"
              placeholder="Enter user IP data"
              className="border border-gray-300 rounded-[12px] px-3 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 w-[625px]"
            />
          </div>

          <div className="flex items-center gap-4 mt-5">
            <button
              className="bg-[#d4af37] hover:bg-yellow-600 text-white px-6 py-3.5 rounded-[12px]  font-aeonik font-bold text-[16px] leading-[1] tracking-[0]"
            >
              Ban
            </button>

            <button className="bg-[#d4af37] hover:bg-yellow-600 text-white px-6 py-3.5 rounded-[12px]  font-aeonik font-bold text-[16px] leading-[1] tracking-[0]">
              Remove Ban
            </button>
          </div>
        </div>

        {/* fingerprint data*/}
        <div className="mt-10">
          <label className="font-aeonik font-normal text-[16px] leading-[1.6] tracking-[0] mb-2">
            IP Data
          </label>
          <div className="mt-3">
            <input
              type="text"
              placeholder="Enter fingerprint data"
              className="border border-gray-300 rounded-[12px] px-3 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 w-[625px]"
            />
          </div>

          <div className="flex items-center gap-4 mt-5">
            <button
              className="bg-[#d4af37] hover:bg-yellow-600 text-white px-6 py-3.5 rounded-[12px]  font-aeonik font-bold text-[16px] leading-[1] tracking-[0]"
            >
              Ban
            </button>

            <button className="bg-[#d4af37] hover:bg-yellow-600 text-white px-6 py-3.5 rounded-[12px]  font-aeonik font-bold text-[16px] leading-[1] tracking-[0]">
              Remove Ban
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlacklistPage;
