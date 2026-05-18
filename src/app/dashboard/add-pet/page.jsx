"use client";

import React from "react";

const AddPetPage = () => {
  return (

    <div className="w-full">

      <div className="bg-[#FFFCF6] border border-[#E8D1B1] rounded-3xl p-8 shadow-sm">

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F4E7D3] border border-[#E8D1B1] mb-6">
          <div className="w-2 h-2 rounded-full bg-[#CFA77A]"></div>
          <p className="text-sm font-medium text-[#80573A]">
            List Your Pets!
          </p>
        </div>

        <h1 className="text-xl lg:text-3xl font-black text-[#2F2D2A] leading-tight"> Add a New Pet </h1>

        <p className="mt-5 text-lg leading-8 text-[#6A5D52] max-w-3xl">

          Fill in your pets information and create a new adoption listing.
          Provide accurate details, health information, and a clear description
          to help adopters find the perfect companion.

        </p>

      </div>

      <div>
        {/* ekhane form dibo */}
      </div>

    </div>

  );
};

export default AddPetPage;