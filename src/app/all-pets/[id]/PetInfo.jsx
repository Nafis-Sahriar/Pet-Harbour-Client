import { Avatar } from "@heroui/react";
import { MapPin, PawPrint } from "lucide-react";
import React from "react";

const PetInfo = ({ pet }) => {
    return (
        <div className="space-y-4">

            {/* <Image src={pet?.imageUrl} alt={pet?.petName} width={600} height={400} className="w-full  object-cover rounded-2xl" /> */}

            <Avatar className="w-full h-120 rounded-t-xl rounded-b-none group-hover:scale-105 transition duration-500">
            
                    <Avatar.Image src={pet?.imageUrl} alt={pet?.petName} className="object-cover"/>
            
                    <Avatar.Fallback className="bg-[#F4E7D3] text-[#80573A] text-4xl font-black">
                        {pet?.petName?.charAt(0)}
                    </Avatar.Fallback>
                  </Avatar>

            <div className="space-y-1">
                <div className="flex items-center gap-3 flex-wrap">
                    <h1 className="text-3xl lg:text-4xl font-black italic text-[#2F2D2A]">{pet?.petName}</h1>

                    <PawPrint className="text-[#CFA77A]" />
                </div>

                <div className="flex items-center gap-2 text-sm text-[#6A5D52]">
                    <MapPin size={17} />
                <p>{pet?.location}</p>
                </div>
            </div>

            <p className="text-[15px] lg:text-base text-[#6A5D52] leading-relaxed">{pet?.description}</p>

            <div className="bg-white border border-[#E8D1B1] rounded-2xl overflow-hidden">

                <div className="grid grid-cols-2 md:grid-cols-4">

                    <div className="p-3 border-b md:border-b-0 md:border-r border-[#F4E7D3]">

                    <p className="text-xs text-[#8B7B6B]">Species</p>

                        <h3 className="font-bold text-[#2F2D2A]">{pet?.species}</h3>
                    </div>

                    <div className="p-3 border-b md:border-b-0 md:border-r border-[#F4E7D3]">

                        <p className="text-xs text-[#8B7B6B]">Breed</p>

                        <h3 className="font-bold text-[#2F2D2A]">{pet?.breed}</h3>
                    </div>

                    <div className="p-3 border-b md:border-b-0 md:border-r border-[#F4E7D3]">

                           <p className="text-xs text-[#8B7B6B]">Age</p>

                    <h3 className="font-bold text-[#2F2D2A]">{pet?.age} Years</h3>
                    </div>

                    <div className="p-3 border-b md:border-b-0 border-[#F4E7D3]">

                    <p className="text-xs text-[#8B7B6B]">Gender</p>


                        <h3 className="font-bold text-[#2F2D2A]">{pet?.gender}</h3>
                    </div>
                </div>



                <div className="grid grid-cols-2 md:grid-cols-4">
                    <div className="p-3 border-r border-t border-[#F4E7D3]">


                        <p className="text-xs text-[#8B7B6B]">Health</p>
                          <h3 className="font-bold text-[#2F2D2A]">{pet?.healthStatus}</h3>
                    </div>

                    <div className="p-3 border-r border-t border-[#F4E7D3]">

                        <p className="text-xs text-[#8B7B6B]">Vaccination</p>

                        <h3 className="font-bold text-[#2F2D2A]">{pet?.vaccinationStatus}</h3>
                    </div>

                    <div className="p-3 border-r border-t border-[#F4E7D3]">

                        <p className="text-xs text-[#8B7B6B]">Fee</p>

                           <h3 className="font-bold text-[#2F2D2A]">$ {pet?.adoptionFee}</h3>
                    </div>

                    <div className="p-3 border-t border-[#F4E7D3]">

                        <p className="text-xs text-[#8B7B6B]">Listed By</p>

                        <h3 className="font-bold text-[#2F2D2A]">{pet?.ownerName}</h3>


                    </div>
                </div>

            </div>
        </div>
);
};

export default PetInfo;