"use client";

import { Button} from "@heroui/react";
import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

const PetSearchBar = () => {
  const [search, setSearch] = useState("");
  const [species, setSpecies] = useState(""); // Stores a clean string directly

  console.log(species)

  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSearch = () => {
    const params = new URLSearchParams();
    
    // Handle text search term
    if (search) {
      params.set("searchTerm", search);
    } else {
      params.delete("searchTerm");
    }

   
    if (species) {
      params.set("species", species);
    } else {
      params.delete("species");
    }

    router.push(`/all-pets?${params.toString()}`);
  };

  return (
    <div className="mt-10 bg-white border border-[#E8D1B1] rounded-[32px] p-5 shadow-sm">
      <div className="flex flex-col xl:flex-row gap-5 items-stretch">
        
        
        <div className="flex-1 flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-[#80573A]" size={20} />
            <input
              type="text"
              value={search}
              onChange={(e) =>{
                setSearch(e.target.value);


                if(!e.target.value)                   
                {
                    router.push("/all-pets");
                    return;
              }}
              }
              placeholder="Search pets by name, breed or species..."
              className="w-full h-14 rounded-2xl border border-[#E8D1B1] bg-[#FFFCF6] pl-14 pr-4 italic text-[#2F2D2A] placeholder:text-[#80573A] outline-none focus:border-[#CFA77A] transition"
            />
          </div>

          <Button
            onClick={handleSearch}
            className="h-14 px-8 rounded-2xl bg-[#CFA77A] hover:bg-[#BB9368] text-white font-bold shrink-0"
          >
            Search
          </Button>
        </div>

      
        <div className="w-full xl:w-65">
          <div className="w-full xl:w-65">

    <select

        value={species}

        onChange={(e)=>{
            const value = e.target.value;
            setSpecies(value);

            const params = new URLSearchParams();

            if (search) {
              params.set("searchTerm", search);
            }

            if(value){
                params.set("species", value);
            }

            router.push(`/all-pets?${params.toString()}`);
        }}

        className="w-full h-14 rounded-2xl border border-[#E8D1B1] bg-[#FFFCF6] px-4  text-[#2F2D2A] outline-none focus:border-[#CFA77A]">

        <option value="">
            Filter by Species
        </option>

        <option value="Cat">
            Cat
        </option>

        <option value="Dog">
            Dog
        </option>

        <option value="Rabbit">
            Rabbit
        </option>

        <option value="Bird">
            Bird
        </option>

        <option value="Lizard">
            Lizard
        </option>

        <option value="Fish">
            Fish
        </option>

        <option value="Hamster">
            Hamster
        </option>

        <option value="Guinea Pig">
            Guinea Pig
        </option>

        <option value="Turtle">
            Turtle
        </option>

    </select>

</div>
        </div>
      </div>
    </div>
  );
};

export default PetSearchBar;