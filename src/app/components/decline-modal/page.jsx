"use client";

import { FaTimes } from "react-icons/fa";
import { useState } from "react";
import DeclineSuccessModalPage from "../decline-success-modal/page";

export default function DeclinePage({ onClose }) {
  const [showDeclineSuccess, setShowDeclineSuccess] = useState(false);

  const handleConfirm = () => {
    setShowDeclineSuccess(true);
  };

  const closeSuccessModal = () => {
    setShowDeclineSuccess(false);
    onClose(); // Close both modals
  };

  return (
    <>
      {/* Decline Confirmation Modal */}
      {!showDeclineSuccess && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center ">
          <div className="w-[952px] h-[579px]  p-[48px] pr-[64px] pl-[64px] opacity-100 gap-[40px] bg-white rounded shadow-lg ">
            {/* Header */}
            <div className="flex justify-between items-center ">
              <h2 className="font-aeonik font-bold text-[24px] leading-[120%] text-[#141414]">
                Decline Arena
              </h2>
              <button
                onClick={onClose}
                className="text-gray-600 hover:text-black text-xl cursor-pointer"
              >
                <FaTimes className="w-5 h-5" />
              </button>
            </div>

            {/* Message */}
            <p className="font-aeonik font-bold text-base leading-[100%] tracking-[0] mt-10">
              You are about to decline the arena
            </p>

            {/* Bullet Points */}
            <div className="grid gap-4 w-[50%] mt-5">
              <div className="grid grid-cols-[1fr_auto] items-center gap-x-4">
                <span className="font-[Aeonik] font-normal not-italic text-[16px] leading-[160%] tracking-[0.0125em] text-[#141414]">
                  Inappropriate name for arena
                </span>
                <input
                  type="checkbox"
                  className="w-4 h-4 !accent-[#d4af37] !border-2 !border-[#d4af37] cursor-pointer"
                />
              </div>

              <div className="grid grid-cols-[1fr_auto] items-center gap-x-4">
                <span className="font-[Aeonik] font-normal not-italic text-[16px] leading-[160%] tracking-[0.0125em] text-[#141414]">
                  Violation of{" "}
                  <span className="text-[#d4af37]">terms and services</span>
                </span>
                <input
                  type="checkbox"
                  className="w-4 h-4 !accent-[#d4af37] !border-2 !border-[#d4af37] cursor-pointer"
                />
              </div>
            </div>

            {/* textarea */}
            <div className="mt-10 space-y-3">
              <label
                htmlFor="reason"
                className="font-[Aeonik] font-normal not-italic text-[16px] leading-[160%] tracking-normal text-[#20272a] "
              >
                Reason
              </label>
              <textarea
                id="reason"
                rows={4}
                className="w-full px-4 py-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] resize-none bg-[#f5f5f5] text-[#000000]"
                placeholder="Enter your reason here..."
              ></textarea>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-4">
              <button
                onClick={handleConfirm}
                className="gap-[10px] px-[32px] py-[16px] rounded-[12px] bg-[#D4AF37] text-white font-aeonik font-bold text-base cursor-pointer"
              >
                Decline
              </button>

              <button
                onClick={onClose}
                className="items-center gap-[10px] px-[32px] py-[16px] rounded-[12px] border border-[#D4AF37] text-[#D4AF37] cursor-pointer font-aeonik font-bold text-[16px] leading-[100%]"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Decline Success Modal */}
      {showDeclineSuccess && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          <DeclineSuccessModalPage onClose={closeSuccessModal} />
        </div>
      )}
    </>
  );
}
