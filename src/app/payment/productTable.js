"use client";

import { tableData } from "@/app/payment/tableData";
import { FaArrowDown } from "react-icons/fa";

export default function ProductTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full table-fixed">
        <thead className="bg-[#f5f5f5]">
          <tr>
            {[
              "Subscription Name",
              "Price",
              "Status",
              "Subscription Unit",
              "Subscription Length",
              "Features",
            ].map((label, index) => (
              <th
                key={index}
                className="text-center px-4 py-3 font-aeonik font-bold text-[16px] leading-[100%] tracking-[0%]"
              >
                <div className="flex items-center justify-center gap-x-2">
                  {label} <FaArrowDown />
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-center px-4 py-3 font-aeonik font-normal text-[16px] leading-[160%] tracking-[0%]">
          {tableData.map((item, idx) => (
            <tr key={idx} className="pb-3 border-[#dedede] border-b">
              <td className="px-4 py-3 ">{item.subscriptionName}</td>
              <td className="px-4 py-3 ">{item.price}</td>
              <td className="px-4 py-3 ">{item.status}</td>
              <td className="px-4 py-3 ">{item.subscriptionUnit}</td>
              <td className="px-4 py-3 ">{item.subscriptionLength}</td>
              <td className="px-4 py-3 ">{item.features}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
