"use client";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";
import SuccessModalPage from "../success-modal/page"; 

export default function TerminatePage({ onClose }) {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleConfirm = () => {
    setShowSuccess(true);
  };

  const closeSuccessModal = () => {
    setShowSuccess(false);
    onClose(); // Close both modals
  };

  return (
    <>
      {/* Terminate Confirmation Modal */}
      {!showSuccess && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="w-[952px] h-[377px] py-[60px] px-[48px] gap-4 bg-white rounded-xl shadow-lg relative flex flex-col justify-between">
            {/* Header */}
            <div className="flex justify-between items-center">
              <h2 className="font-aeonik font-bold text-[24px] leading-[120%] text-[#141414]">
                Terminate Arena
              </h2>
              <button
                onClick={onClose}
                className="text-gray-600 hover:text-black text-xl cursor-pointer"
              >
                <FaTimes className="w-5 h-5" />
              </button>
            </div>

            {/* Message */}
            <p className="font-aeonik font-bold text-base leading-[100%] tracking-[0] mt-4">
              You are about to terminate the arena
            </p>

            {/* Bullet Points */}
            <ul className="list-decimal list-inside space-y-3 text-base mt-2">
              <li className="font-aeonik font-normal text-[14px] leading-[160%] tracking-[0.0125em]">
                User won’t be able to play games in the{" "}
                <span className="font-bold text-[#d4af37]">arena</span>.
              </li>
              <li className="font-aeonik font-normal text-[14px] leading-[160%] tracking-[0.0125em]">
                There will be no{" "}
                <span className="font-bold text-[#d4af37]">podium</span>.
              </li>
              <li className="font-aeonik font-normal text-[14px] leading-[160%] tracking-[0.0125em]">
                There will be no{" "}
                <span className="font-bold text-[#d4af37]">prize award</span>.
              </li>
            </ul>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-4">
              <button
                onClick={handleConfirm}
                className="gap-[10px] px-[32px] py-[16px] rounded-[12px] bg-[#D4AF37] text-white font-aeonik font-bold text-base cursor-pointer"
              >
                Terminate Arena
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

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          <SuccessModalPage onClose={onClose} />  
        </div>
      )}
    </>
  );
}

