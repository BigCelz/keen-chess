"use client";

import React, { useState } from "react";
import { useVulgarStore } from "@/store/vulgarStore";

const VulgarityFilterPage = () => {
  const { words, addWord, removeWord } = useVulgarStore();
  const [inputValue, setInputValue] = useState("");

  const handleAdd = () => {
    addWord(inputValue);
    setInputValue("");
  };

  return (
    <div className="p-6 space-y-6 h-screen">
      {/* Add new word */}
      <div>
        <label className="font-aeonik font-normal text-[16px] leading-[1.6] tracking-[0] mb-2">
          Add new word
        </label>
        <div className="mt-3">
          <input
            type="text"
            placeholder="Enter word to take action"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="border border-gray-300 rounded-[12px] px-3 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 w-[625px]"
          />
        </div>

        <div className="flex items-center gap-4 mt-5">
          <button
            onClick={handleAdd}
            className="bg-[#d4af37] hover:bg-yellow-600 text-white px-6 py-3.5 rounded-[12px]  font-aeonik font-bold text-[16px] leading-[1] tracking-[0]"
          >
            Add
          </button>

          <button className="bg-[#d4af37] hover:bg-yellow-600 text-white px-6 py-3.5 rounded-[12px]  font-aeonik font-bold text-[16px] leading-[1] tracking-[0]">
            Remove
          </button>
        </div>
      </div>

      {/* Word list */}
      <div>
        <h2 className="font-aeonik font-bold text-[24px] leading-[1] tracking-[0]">
          List of words that cannot be used on usernames and message texts
        </h2>
        <div className="mt-6 rounded p-4 h-60 w-[766px] overflow-y-auto space-y-2">
          {words.map((word, idx) => (
            // <div
            //   key={idx}
            //   className=" flex flex-col w-20"
            // >
            //   <span className="border border-[#8c8c8c] p-2 mt-3">{word}</span>
            //   <button
            //     onClick={() => removeWord(word)}
            //     className="text-red-500 hover:text-red-700"
            //   >
            //     <MdDelete size={20} />
            //   </button>
            // </div>
            <div key={idx} className="flex flex-col">
              <span className="border border-[#8c8c8c] py-1.5 px-4 mt-3 w-fit max-w-full font-aeonik font-normal text-[20px] leading-[1.6] tracking-[0] flex items-center justify-center">
                {word}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VulgarityFilterPage;
