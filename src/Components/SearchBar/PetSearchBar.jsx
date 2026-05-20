"use client";
// client component lagbe nahole states use korte parbo na.
import { Button } from "@heroui/react";
import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

const PetSearchBar = () => {

// first e user jokhon kichu likhe serach a click korbe,amake oita store korte hobe.

  const [search,setSearch]=  useState("");


  const router= useRouter();
  const searchParams = useSearchParams();

  const handleSearch = () => 
    {
    // janina ken korsi, vai dekhaise tai.
    const params = new URLSearchParams(searchParams.toString());
    if (search) 
    {
      params.set("searchTerm", search);
    } 
    else 
    {
      params.delete("searchTerm");
    }

    router.push(`/all-pets?${params.toString()}`);
  };

  return (
    <div className="mt-10 bg-white border border-[#E8D1B1] rounded-3xl p-4 shadow-sm">
      <div className="flex flex-col lg:flex-row items-stretch gap-4">


        <div className="flex-1 relative">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-[#80573A]"  size={20} />
            
          <input  type="text" value={search} onChange={(e) => setSearch(e.target.value)}
             placeholder="Search pets by name or breed or species......."
           
            className="w-full italic  h-14 rounded-2xl border border-[#E8D1B1] bg-[#FFFCF6]  pl-14  pr-4  
            text-[#2F2D2A] placeholder:text-[#80573A]  outline-none focus:border-[#CFA77A]"/>
        </div>

        <Button
          onClick={handleSearch}
          className=" h-14 px-8  rounded-2xl  bg-[#CFA77A] hover:bg-[#BB9368] text-white font-bold">
          Search
        </Button>
      </div>
    </div>
  );
};

export default PetSearchBar;
