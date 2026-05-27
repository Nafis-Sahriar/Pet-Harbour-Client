import { Avatar } from "@heroui/react";
import React from "react";
import { RequestContainerModal } from "../RequestModal/RequestContainerModal";
import Link from "next/link";
import { Button } from "@heroui/react";

const OwnerReqCard = ({ request }) => {
  const pet = request?.petId;

  return (
    <div
      className="
        w-full
        bg-[#FFFCF6]
        border border-[#E8D1B1]
        rounded-3xl
        overflow-hidden
        shadow-sm
        hover:shadow-xl
        transition-all
        duration-300
      "
    >
      {/* TOP BANNER: image + header */}
      <div className="flex min-h-45">
        {/* PET IMAGE */}
        <div className="w-45 min-w-45 shrink-0 bg-[#F4E7D3] flex items-center justify-center">
          <Avatar className="w-full h-full rounded-none">
            <Avatar.Image
              src={request?.petImage}
              alt={request?.petName}
              className="object-cover w-full h-full"
            />
            <Avatar.Fallback className="bg-[#F4E7D3] text-[#80573A] text-5xl font-black rounded-none w-full h-full flex items-center justify-center">
              {request?.petName?.charAt(0)}
            </Avatar.Fallback>
          </Avatar>
        </div>

        {/* HEADER INFO */}
        <div className="flex-1 flex flex-col justify-between p-5 border-l border-[#E8D1B1]">
          {/* NAME + STATUS */}
          <div className="flex items-start justify-between gap-3 flex-wrap">
            <div>
              <h1 className="text-2xl font-black italic text-[#2F2D2A]">
                {request?.petName}
              </h1>
              <p className="text-sm text-[#80573A] mt-1">
                Requested by {request?.requesterName}
              </p>

          
            </div>

            {/* STATUS BADGE */}
            <div
              className={`
                text-xs font-semibold px-3 py-1.5 rounded-xl border whitespace-nowrap

                ${
                  request?.requestStatus === "pending"
                    ? "bg-yellow-50 text-yellow-700 border-yellow-200"
                    : request?.requestStatus === "accepted"
                      ? "bg-green-50 text-green-700 border-green-200"
                      : "bg-red-50 text-red-600 border-red-200"
                }
              `}
            >
              {request?.requestStatus}
            </div>
          </div>

          {/* INLINE META FIELDS */}
          <div className="flex flex-wrap gap-x-6 gap-y-3 mt-4">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-[#B89A7A]">
                Email
              </p>
              <p className="text-sm text-[#2F2D2A] mt-0.5 break-all">
                {request?.requesterEmail}
              </p>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-widest text-[#B89A7A]">
                Phone
              </p>
              <p className="text-sm text-[#2F2D2A] mt-0.5">{request?.phone}</p>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-widest text-[#B89A7A]">
                Pickup date
              </p>
              <p className="text-sm text-[#2F2D2A] mt-0.5">
                {request?.pickupDate?.split("T")[0]}
              </p>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-widest text-[#B89A7A]">
                Location
              </p>
              <p className="text-sm text-[#2F2D2A] mt-0.5">
                {request?.location}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-[#E8D1B1]" />

      {/* MESSAGE */}
      <div className="px-6 py-5">
        <p className="text-[10px] uppercase tracking-widest text-[#B89A7A] mb-2">
          Adoption message
        </p>
        <p className="text-sm text-[#5A4A3A] leading-7">{request?.message}</p>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-[#E8D1B1]" />

      {/* BUTTONS */}
      <div className="px-6 py-4">
        {request?.requestStatus === "pending" && (
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              className="
                flex-1
               
                rounded-xl
                bg-[#eee2d1]
                hover:  bg-[#e0d1b8]
              text-[#5A4A3A] 
                border border-[#E8D1B1]
                text-sm font-semibold
                transition
              "
            >
              Pending
            </button>

            <Link
              href={`/all-pets/${request?.petId}`}
              className="flex-1 bg-[#CFA77A] hover:bg-[#BB9368] text-white font-semibold rounded-2xl h-12 flex items-center justify-center"
            >
              <Button className="flex-1 bg-[#CFA77A] hover:bg-[#BB9368] text-white font-semibold rounded-2xl h-12">
                Go to Details page to Manage Requests
              </Button>
            </Link>
          </div>
        )}

        {request?.requestStatus === "accepted" && (
          <div
            className="
              w-full h-10
              bg-green-50 border border-green-200
              text-green-700
              rounded-xl
              flex items-center justify-center
              text-sm font-semibold
            "
          >
            ✓ Request Accepted
          </div>
        )}

        {request?.requestStatus === "rejected" && (
          <div
            className="
              w-full h-10
              bg-red-50 border border-red-200
              text-red-600
              rounded-xl
              flex items-center justify-center
              text-sm font-semibold
            "
          >
            ✗ Request Rejected
          </div>
        )}
      </div>
    </div>
  );
};

export default OwnerReqCard;
