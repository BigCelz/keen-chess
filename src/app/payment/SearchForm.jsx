"use client";
import React, { useState } from "react";
import paymentOrderData from "./paymentOrderData";
import { CiSearch } from "react-icons/ci";
import { MdClear } from "react-icons/md";

const SearchForm = () => {
  const [searchFields, setSearchFields] = useState({
    creditorName: "",
    orderId: "",
    gatewayId: "",
    paymentEmail: "",
  });

  const [filteredData, setFilteredData] = useState([]);

  const handleChange = (e) => {
    setSearchFields({ ...searchFields, [e.target.name]: e.target.value });
  };

  const handleSearch = () => {
    const filtered = paymentOrderData.filter((item) => {
      return (
        (searchFields.orderId === "" ||
          item.orderId
            .toLowerCase()
            .includes(searchFields.orderId.toLowerCase())) &&
        (searchFields.gatewayId === "" ||
          item.numericalId
            .toLowerCase()
            .includes(searchFields.gatewayId.toLowerCase())) &&
        (searchFields.creditorName === "" ||
          item.processor
            .toLowerCase()
            .includes(searchFields.creditorName.toLowerCase()))
      );
    });

    setFilteredData(filtered);
  };

  const handleClear = () => {
    setSearchFields({
      creditorName: "",
      orderId: "",
      gatewayId: "",
      paymentEmail: "",
    });
    setFilteredData([]);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <div className="mb-7 border-b border-gray-200 pb-4">
        <h2 className="font-aeonik font-bold text-[24px] leading-[120%] tracking-[0%]">
          Search Orders
        </h2>
        <p className="font-aeonik font-normal text-[16px] leading-[160%] tracking-[0%] text-[#8c8c8c]">
          Search user using the details below
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="font-aeonik font-normal text-[16px] leading-[160%] tracking-[0%] mb-1">
            Creditor Name
          </label>
          <input
            type="text"
            name="creditorName"
            className="w-full p-2 border border-gray-300 rounded-[12px] focus:outline-none focus:ring-0"
            placeholder="e.g., Knight"
            value={searchFields.creditorName}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="font-aeonik font-normal text-[16px] leading-[160%] tracking-[0%] mb-1 ">
            Order ID
          </label>
          <input
            type="text"
            name="orderId"
            className="w-full p-2 border border-gray-300 rounded-[12px] focus:outline-none focus:ring-0"
            placeholder="e.g., 1245FTH234"
            value={searchFields.orderId}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="font-aeonik font-normal text-[16px] leading-[160%] tracking-[0%] mb-1">
            Payment Gateway ID
          </label>
          <input
            type="text"
            name="gatewayId"
            className="w-full p-2 border border-gray-300 rounded-[12px] focus:outline-none focus:ring-0"
            placeholder="Enter gateway ID"
            value={searchFields.gatewayId}
            onChange={handleChange}
          />
        </div>

        <div className="md:col-span-1">
          <label className="font-aeonik font-normal text-[16px] leading-[160%] tracking-[0%] mb-1">
            Payment Email
          </label>
          <input
            type="email"
            name="paymentEmail"
            className="w-full p-2 border border-gray-300 rounded-[12px] focus:outline-none focus:ring-0"
            placeholder="e.g., user@example.com"
            value={searchFields.paymentEmail}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="flex mt-6 space-x-4">
        <button
          onClick={handleSearch}
          className="px-6 py-3 bg-[#d4af37] text-white rounded-[12px] hover:bg-yellow-600 transition-colors flex items-center gap-3 whitespace-nowrap font-aeonik font-bold text-[16px] leading-[100%] tracking-[0%]"
        >
          <CiSearch className="text-2xl" />
          Search Order
        </button>

        <button
          onClick={handleClear}
          className="px-6 py-3 border-[#d4af37] bg-transparent text-[#d4af37] border  rounded-[12px]  transition-colors flex items-center gap-3 whitespace-nowrap font-bold text-[16px] leading-[100%] tracking-[0%]"
        >
          <MdClear className="text-2xl" />
          Clear Search
        </button>
      </div>

      {/* Results */}
      {filteredData.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Search Results:</h3>
          <ul className="list-disc pl-6">
            {filteredData.map((item, idx) => (
              <li key={idx} className="text-sm text-gray-700">
                Order ID: {item.orderId}, Processor: {item.processor}, Gateway
                ID: {item.numericalId}, Status: {item.status}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchForm;
