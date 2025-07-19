"use client";
import { useState } from "react";
import DetailBox from "../detail-box/page";
import EventDetailDecline from "../event-detail-decline-modal/page";
import EventDetailApprove from "../event-detail-approve-modal/page";

export default function EventDetailModal({ isOpen, onClose, data }) {
  const [showDeclineModal, setShowDeclineModal] = useState(false);
  const [showApproveModal, setShowApproveModal] = useState(false);

  if (!isOpen || !data) return null;

  return (
    <>
      {/* Main Modal */}
      <div className="fixed inset-0 z-40 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="w-[952px] h-[827px] py-[60px] px-[50px] gap-[20px] bg-white rounded-sm shadow-lg relative flex flex-col justify-between">
          {/* Top Close Icon */}
          <div className="flex justify-end mr-4">
            <button
              onClick={onClose}
              className="text-gray-600 text-3xl hover:text-black cursor-pointer"
            >
              &times;
            </button>
          </div>

          {/* Header */}
          <div className="flex justify-between items-center mb-3">
            <div>
              <h2 className="font-aeonik font-bold text-[24px] leading-[100%] tracking-[0%] text-[#141414]">
                {data.title}
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Created by{" "}
                <span className="font-aeonik font-bold text-[14px] leading-[100%] tracking-[0%]">
                  {data.creator}
                </span>
              </p>
            </div>

            <div className="flex items-center gap-4 mr-4">
              <button
                onClick={() => setShowApproveModal(true)}
                className="items-center gap-[10px] opacity-100 px-[32px] py-[16px] rounded-[12px] border border-[#D4AF37] text-[#D4AF37] cursor-pointer font-aeonik font-bold text-[16px] leading-[100%] tracking-[0]"
              >
                Approve
              </button>

              <button
                onClick={() => setShowDeclineModal(true)}
                className="items-center gap-[10px] opacity-100 px-[32px] py-[16px] rounded-[12px] border border-[#D4AF37] text-[#D4AF37] cursor-pointer font-aeonik font-bold text-[16px] leading-[100%] tracking-[0]"
              >
                Decline
              </button>
            </div>
          </div>

          {/* Detail Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-3 flex-grow">
            <DetailBox label="Name of Arena" value={data.title} />
            <DetailBox label="Tournament type" value={data.type} />
            <DetailBox label="Time Control" value={data.players} />
            <DetailBox label="Duration" value={data.duration} />
            <DetailBox label="$350" value={data.prize} />
            <DetailBox label="Visibility" value={data.visibility} />
            <DetailBox label="Mode" value={data.mode} />
            <DetailBox label="Link" value={data.website} />
          </div>

          {/* Bottom Close Button */}
          <div className="flex mt-[10px]">
            <button
              onClick={onClose}
              className="items-center gap-[10px] opacity-100 px-[32px] py-[16px] rounded-[12px] border border-[#D4AF37] text-[#D4AF37] cursor-pointer font-aeonik font-bold text-[16px] leading-[100%] tracking-[0]"
            >
              Close
            </button>
          </div>
        </div>
      </div>

      {/* Approve Modal */}
      {showApproveModal && (
        <EventDetailApprove onClose={() => setShowApproveModal(false)} />
      )}

      {/* Decline Modal */}
      {showDeclineModal && (
        <EventDetailDecline onClose={() => setShowDeclineModal(false)} />
      )}
    </>
  );
}
