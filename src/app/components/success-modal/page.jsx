import React from "react";
import { FaTimes } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

export default function SuccessModalPage({ onClose }) {
  return (
    <div className="w-[600px] h-[461px] opacity-100 top-[328px] left-[380px] p-[48px] gap-[40px] bg-white ">
      <div className="flex justify-end">
        <FaTimes onClick={onClose} />
      </div>

      <div className="mx-auto mt-20  w-[144.34px] h-[118.22px] opacity-100 bg-[#d4af37]">
        <FaCheck className="w-[144.34px] h-[118.22px] text-white" />
      </div>

      <div className="flex flex-col gap-3 mt-15 text-center">
        <div className="font-aeonik font-bold text-[20px] leading-[100%] tracking-[0]">
          Arena termination successful
        </div>

        <button
          className="mx-auto gap-[10px] rounded-[12px] py-3 px-10 opacity-100 bg-[#d4af37] text-white font-aeonik font-bold text-[16px] leading-[100%] tracking-[0]"
          onClick={onClose}
        >
          close
        </button>
      </div>
    </div>
  );
}
