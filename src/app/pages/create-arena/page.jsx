"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function CreateArenaPage() {
  const [form, setForm] = useState({
    title: "",
    type: "",
    players: "",
    duration: "",
    prize: "",
    visibility: "",
    mode: "",
    entry: "",
    date: "",
    creator: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Arena created:", form);
  };

  return (
    <div className="min-h-screen bg-white p-10">
      <div className="flex items-center justify-between mb-4">
        <div className="font-aeonik font-normal text-base leading-[160%] tracking-normal text-[#8C8C8C]">
          <Link href="/pages/arena">
            <span className="cursor-pointer">Ongoing Arena</span>
          </Link>{" "}
          /{" "}
          <span className="font-aeonik font-bold text-base leading-[100%] tracking-normal text-[#D4AF37]">
            Create Arena
          </span>
        </div>

        <Link href="/pages/edit-arena">
          <button className="gap-[10px] opacity-100 px-[32px] py-[16px] rounded-[12px] bg-[#D4AF37] text-white font-aeonik font-bold text-base items-center cursor-pointer">
            Create Arena
          </button>
        </Link>
      </div>

      <div className="w-[60%] border-b border-[#DEDEDE] pb-6 mb-8">
        <div className="flex flex-col gap-2">
          <h2 className="font-aeonik font-bold text-[24px] leading-[120%] tracking-normal text-[#474747]">
            Create Arena
          </h2>
          <p className="font-aeonik font-normal text-[16px] leading-[160%] tracking-normal text-[#8c8c8c]">
            Set up Arena for unmatched game{" "}
          </p>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 "
      >
        <div className="flex flex-col gap-2">
          <label
            htmlFor="title"
            className="font-aeonik font-normal text-base leading-[160%] tracking-normal text-[#20272a]"
          >
            Name of Arena
          </label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter name of Arena"
            value={form.title}
            onChange={handleChange}
            className="items-center text-gray-400 h-[50px] gap-[10px] opacity-100 border border-solid border-gray-300 px-[16px] py-[12px] rounded-[12px] focus:outline-none focus:ring-0 active:ring-0"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="type"
            className="font-aeonik font-normal text-base leading-[160%] tracking-normal text-[#20272a]"
          >
            Tournament Type?
          </label>
          <div className="relative">
            <select
              id="type"
              name="type"
              value={form.type}
              onChange={handleChange}
              className="items-center appearance-none w-full text-gray-400 h-[50px] gap-[10px] opacity-100 border border-solid border-gray-300 px-[16px] py-[12px] rounded-[12px] focus:outline-none focus:ring-0 active:ring-0"
            >
              <option value="">Select tournament type</option>
              <option value="Swiss">Swiss</option>
              <option value="Round Robin">Round Robin</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="type"
            className="font-aeonik font-normal text-base leading-[160%] tracking-normal text-[#20272a]"
          >
            Best Ofs
          </label>
          <div className="relative">
            <select
              id="type"
              name="type"
              value={form.type}
              onChange={handleChange}
              className="items-center appearance-none w-full text-gray-400 h-[50px] gap-[10px] opacity-100 border border-solid border-gray-300 px-[16px] py-[12px] rounded-[12px] focus:outline-none focus:ring-0 active:ring-0"
            >
              <option value="">Select</option>
              <option value="Swiss">Swiss</option>
              <option value="Round Robin">Round Robin</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="type"
            className="font-aeonik font-normal text-base leading-[160%] tracking-normal text-[#20272a]"
          >
            Mode?
          </label>
          <div className="relative">
            <select
              id="type"
              name="type"
              value={form.type}
              onChange={handleChange}
              className="items-center appearance-none w-full text-gray-400 h-[50px] gap-[10px] opacity-100 border border-solid border-gray-300 px-[16px] py-[12px] rounded-[12px] focus:outline-none focus:ring-0 active:ring-0"
            >
              <option value="">Select Mode</option>
              <option value="Swiss">Swiss</option>
              <option value="Round Robin">Round Robin</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="type"
            className="font-aeonik font-normal text-base leading-[160%] tracking-normal text-[#20272a]"
          >
            Entry?
          </label>
          <div className="relative">
            <select
              id="type"
              name="type"
              value={form.type}
              onChange={handleChange}
              className="items-center appearance-none w-full text-gray-400 h-[50px] gap-[10px] opacity-100 border border-solid border-gray-300 px-[16px] py-[12px] rounded-[12px] focus:outline-none focus:ring-0 active:ring-0"
            >
              <option value="">Select entry</option>
              <option value="Swiss">Swiss</option>
              <option value="Round Robin">Round Robin</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="type"
            className="font-aeonik font-normal text-base leading-[160%] tracking-normal text-[#20272a]"
          >
            Time Control?
          </label>
          <div className="relative">
            <select
              id="type"
              name="type"
              value={form.type}
              onChange={handleChange}
              className="items-center appearance-none w-full text-gray-400 h-[50px] gap-[10px] opacity-100 border border-solid border-gray-300 px-[16px] py-[12px] rounded-[12px] focus:outline-none focus:ring-0 active:ring-0"
            >
              <option value="">Select time control</option>
              <option value="Swiss">Swiss</option>
              <option value="Round Robin">Round Robin</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="type"
            className="font-aeonik font-normal text-base leading-[160%] tracking-normal text-[#20272a]"
          >
            Duration?
          </label>
          <div className="relative">
            <select
              id="type"
              name="type"
              value={form.type}
              onChange={handleChange}
              className="items-center appearance-none w-full text-gray-400 h-[50px] gap-[10px] opacity-100 border border-solid border-gray-300 px-[16px] py-[12px] rounded-[12px] focus:outline-none focus:ring-0 active:ring-0"
            >
              <option value="">Select duration</option>
              <option value="Swiss">Swiss</option>
              <option value="Round Robin">Round Robin</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="type"
            className="font-aeonik font-normal text-base leading-[160%] tracking-normal text-[#20272a]"
          >
            Publicity?
          </label>
          <div className="relative">
            <select
              id="type"
              name="type"
              value={form.type}
              onChange={handleChange}
              className="items-center appearance-none w-full text-gray-400 h-[50px] gap-[10px] opacity-100 border border-solid border-gray-300 px-[16px] py-[12px] rounded-[12px] focus:outline-none focus:ring-0 active:ring-0"
            >
              <option value="">Select publicity</option>
              <option value="Swiss">Swiss</option>
              <option value="Round Robin">Round Robin</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="type"
            className="font-aeonik font-normal text-base leading-[160%] tracking-normal text-[#20272a]"
          >
            Prize?
          </label>
          <div className="relative">
            <select
              id="type"
              name="type"
              value={form.type}
              onChange={handleChange}
              className="items-center appearance-none w-full text-gray-400 h-[50px] gap-[10px] opacity-100 border border-solid border-gray-300 px-[16px] py-[12px] rounded-[12px] focus:outline-none focus:ring-0 active:ring-0"
            >
              <option value="">Select Prize</option>
              <option value="Swiss">Swiss</option>
              <option value="Round Robin">Round Robin</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
          </div>
        </div>
      </form>
    </div>
  );
}
