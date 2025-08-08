"use client";

import { useState } from "react";
import ProductTable from "@/app/payment/productTable"; 
import PaymentOrder from "./payment-order/page";
import Membership from "./membership/page";
import WithdrawalPage from "./withdrawal/page";

const tabs = ["Products", "Orders", "Membership Cancellation", "Withdrawal"];

export default function PaymentPage() {
  const [activeTab, setActiveTab] = useState("Products");

  return (
    <div className="p-6 space-y-6 bg-white">
      {/* Tabs and Create Button */}
      <div className="flex items-center justify-between border-b border-[#DEDEDE] pb-7 mb-15">
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

        <button className="px-6 py-4 bg-[#d4af37] text-white rounded-[12px] hover:bg-yellow-600 flex items-center gap-2 cursor-pointer font-aeonik font-bold text-base leading-[100%] tracking-[0]">
          Create Product
        </button>
      </div>

      {/* Content Based on Active Tab */}
      {activeTab === "Products" && <ProductTable />}
      {activeTab === "Orders" && <PaymentOrder />}
      {activeTab === "Membership Cancellation" && <Membership />}
      {activeTab === "Withdrawal" && <WithdrawalPage />}
    </div>
  );
}

