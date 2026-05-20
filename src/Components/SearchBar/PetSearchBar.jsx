"use client";
// client component lagbe nahole states use korte parbo na.
import { Button, Label, ListBox, Select } from "@heroui/react";
import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

const PetSearchBar = () => {

// first e user jokhon kichu likhe serach a click korbe,amake oita store korte hobe.

//   const [species, setSpecies] = useState(""); // filter korar jonno state lagbe.

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
    <div className="mt-10 bg-white border border-[#E8D1B1] rounded-[32px] p-5 shadow-sm ">
  <div className="flex flex-col xl:flex-row gap-5 items-stretch">
    
    <div className="flex-1 flex flex-col sm:flex-row gap-4">
   
      <div className="flex-1 relative">
        <Search className="absolute left-5 top-1/3 -translate-y-1/2 text-[#80573A]" size={20} />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search pets by name, breed or species..."
          className="w-full h-14 rounded-2xl border border-[#E8D1B1] bg-[#FFFCF6] pl-14 pr-4 italic text-[#2F2D2A] placeholder:text-[#80573A] outline-none focus:border-[#CFA77A] transition"
        />
      </div>

    
      <Button
        onClick={handleSearch}
        className="h-13 px-8 rounded-2xl bg-[#CFA77A] hover:bg-[#BB9368] text-white font-bold shrink-0"
      >
        Search
      </Button>
    </div>

   
    <div className="w-full xl:w-35">
        <Select className="w-full" placeholder="Filter by Species">
                <Label className="font-bold italic text-[#80573A]">Filter by Species</Label>
                <Select.Trigger className="h-14 rounded-2xl border border-[#E8D1B1] bg-[#FFFCF6]">
                <Select.Value />
                <Select.Indicator />
                </Select.Trigger>

                <Select.Popover>
                    <ListBox>

                        <ListBox.Item id="Cat">
                            Cat
                        <ListBox.ItemIndicator/>
                        </ListBox.Item>
    
                        <ListBox.Item id="Dog">
                            Dog
                          <ListBox.ItemIndicator/>
                        </ListBox.Item>

                        <ListBox.Item id="Rabbit">
                            Rabbit
                        <ListBox.ItemIndicator/>
                         </ListBox.Item>

                        <ListBox.Item id="Bird">
                            Bird
                        <ListBox.ItemIndicator/>
                        </ListBox.Item>

                        <ListBox.Item id="Lizard">
                            Lizard
                        <ListBox.ItemIndicator/>
                        </ListBox.Item>

                        <ListBox.Item id="Fish">
                            Fish<ListBox.ItemIndicator/>
                        </ListBox.Item>

                        <ListBox.Item id="Hamster">
                            Hamster
                        <ListBox.ItemIndicator/>
                        </ListBox.Item>

                        <ListBox.Item id="Guinea Pig">
                            Guinea Pig
                        <ListBox.ItemIndicator />
                        </ListBox.Item>

                        <ListBox.Item id="Turtle">
                            Turtle
                        <ListBox.ItemIndicator />
                        </ListBox.Item>
                        
                    </ListBox>
            </Select.Popover>
      </Select>
    </div>
  </div>
</div>
  );
};

export default PetSearchBar;
