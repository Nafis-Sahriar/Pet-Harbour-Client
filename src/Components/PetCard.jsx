"use client";

import React from "react";
import { Button, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const PetCard = ({pet}) => {

  return (

    <div className="bg-[#FFFCF6] border border-[#E8D1B1] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">

   
      <div className="relative overflow-hidden">

       <Image src={`${pet?.imageUrl}`} alt={pet?.petName} width={250} height={200} className="w-full h-63 object-cover group-hover:scale-105 transition duration-500" />

       
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">

         
          <Chip
            className="bg-[#F4E7D3] text-[#80573A] font-semibold border border-[#E8D1B1]"
          >
            {pet?.species}
          </Chip>

          
          <Chip
            className={`
              font-semibold border

              ${
                pet?.adoptionStatus === "available"
                  ? "bg-green-100 text-green-700 border-green-200"
                  : "bg-red-100 text-red-700 border-red-200"
              }
            `}
          >
            {pet?.adoptionStatus}
          </Chip>

        </div>

      </div>

    
      <div className="p-6">

     
        <h1 className="text-3xl font-black italic text-[#2F2D2A]">

          {pet?.petName}

        </h1>

        
        <p className="text-[#80573A] mt-1 text-lg">

          {pet?.breed}

        </p>

      
        <div className="flex flex-wrap gap-3 mt-5">

          <div className="px-4 py-2 rounded-xl bg-[#F4E7D3] text-sm font-medium text-[#2F2D2A]">
            Age: {pet?.age}
          </div>

          <div className="px-4 py-2 rounded-xl bg-[#F4E7D3] text-sm font-medium text-[#2F2D2A]">
            {pet?.gender}
          </div>

        </div>

        {/* ADOPTION FEE */}
        <div className="mt-6">

          <p className="text-sm text-[#80573A]">
            Adoption Fee
          </p>

          <h2 className="text-3xl font-black text-[#CFA77A] mt-1">

            $ {pet?.adoptionFee}

          </h2>

        </div>

        {/* BUTTONS */}
        <div className="flex items-center gap-3 mt-8">


            <Link href={`/all-pets/${pet?._id}`}
              className="flex-1 bg-[#CFA77A] hover:bg-[#BB9368] text-white font-semibold rounded-2xl h-12 flex items-center justify-center"
            >
                <Button
            className="flex-1 bg-[#CFA77A] hover:bg-[#BB9368] text-white font-semibold rounded-2xl h-12"
          >
            View Details
          </Button>
            </Link>

        

          <Button
            variant="bordered"
            className="flex-1 border-[#E8D1B1] text-[#2F2D2A] hover:bg-[#F4E7D3] rounded-2xl h-12 font-semibold"
          >
            Adopt Now
          </Button>

        </div>

      </div>

    </div>

  );
};

export default PetCard;