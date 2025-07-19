"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function NewEntryModal({ onClose }) {
  const [showNewEntry, setShowNewEntry] = useState(false);
  const [locationType, setLocationType] = useState("");


  return (
    <>
      {/* New Entry Modal */}
      {!showNewEntry && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center ">
          <div className="bg-white max-w-md px-12 py-8 rounded-md shadow-md h-[652px] w-[505px]">
            <h2 className="text-center text-[#d4af37] font-bold text-[24px] mb-6">
              Upload tournament
            </h2>

            {/* Steps */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex flex-col items-center space-y-1 text-center">
                <div className="w-4 h-4 rounded-full bg-[#d4af37] mb-1" />
                <p className="text-[14px] font-bold leading-[100%] tracking-[0%] text-[#111827]">
                  Tournament details
                </p>
                <p className="text-[12px] text-[#111827] leading-[100%] tracking-[0%]">
                  Enter tournament details
                </p>
              </div>

              <div className="flex flex-col items-center text-center space-y-1">
                <div className="w-4 h-4 rounded-full border-2 border-gray-300 mb-1" />
                <p className="text-[14px] font-bold leading-[100%] tracking-[0%] text-[#111827]">
                  Complete details
                </p>
                <p className="text-[12px] text-[#111827] leading-[100%] tracking-[0%]">
                  Enter tournament details
                </p>
              </div>
            </div>

            <form className="space-y-4">
              {/* Name */}
              <div className="space-y-1">
                <label className="font-[Aeonik] font-normal text-[14px] leading-[160%] tracking-[1.25%] text-[#141414]">
                  Name of tournament
                </label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  className="w-full border border-gray-300 text-[#dedede]  h-[48px] opacity-100 px-4 py-2 gap-[10px] focus:outline-none focus:ring-1 focus:ring-[#d4af37]"
                />
              </div>

              {/* Location type */}
              <div className="space-y-1">
                <label className="font-[Aeonik] font-normal text-[14px] leading-[160%] tracking-[1.25%] text-[#141414]">
                  Location type
                </label>
                <div className="relative">
                  <select
                    className="w-full border border-gray-300  h-[48px] opacity-100 px-4 py-2 gap-[10px] text-[#dedede] focus:outline-none focus:ring-1 focus:ring-[#d4af37] appearance-none"
                    value={locationType}
                    onChange={(e) => setLocationType(e.target.value)}
                  >
                    <option value="">Local or International</option>
                    <option value="local">Local</option>
                    <option value="international">International</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4 pointer-events-none" />
                </div>
              </div>

              {/* Location */}
              <div className="space-y-1">
                <label className="font-[Aeonik] font-normal text-[14px] leading-[160%] tracking-[1.25%] text-[#141414]">
                  Location
                </label>
                <div className="flex gap-3">
                  <input
                    type="text"
                    placeholder="Enter country"
                    className="w-1/2 border border-gray-300  h-[48px] opacity-100 px-4 py-2 gap-[10px] text-[#dedede] focus:outline-none focus:ring-1 focus:ring-[#d4af37] appearance-none"
                  />
                  <input
                    type="text"
                    placeholder="Enter city"
                    className="w-1/2  border border-gray-300  h-[48px] opacity-100 px-4 py-2 gap-[10px] text-[#dedede] focus:outline-none focus:ring-1 focus:ring-[#d4af37] appearance-none"
                  />
                </div>
              </div>

              {/* Contact */}
              <div className="space-y-1">
                <label className="font-[Aeonik] font-normal text-[14px] leading-[160%] tracking-[1.25%] text-[#141414]">
                  Contact
                </label>
                <input
                  type="text"
                  placeholder="+2348010133841"
                  className="w-full border border-gray-300  h-[48px] opacity-100 px-4 py-2 gap-[10px] text-[#dedede] focus:outline-none focus:ring-1 focus:ring-[#d4af37] appearance-none"
                />
              </div>

              {/* Button */}
              <div className="space-y-1 !mt-7">
                <button
                  type="submit"
                  className="w-full bg-[#d4af37] text-white h-[51px] opacity-100 px-8 py-4 gap-[10px] rounded-[12px] font-semibold text-sm hover:opacity-90 transition"
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
