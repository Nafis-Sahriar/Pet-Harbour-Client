
import EditPet from "@/Components/EditPetModal/EditPet";
import { Button } from "@heroui/react";
import { CircleX, Pencil, ShieldAlert } from "lucide-react";
import Link from "next/link";
import React from "react";

const CanNotAdopt = ({ pet }) => {

    return (

        <div className="mt-12 space-y-6 px-4 md:px-0">

  
    <div className="bg-[#FFF4F4] border border-red-200 rounded-3xl p-6 md:p-8 shadow-sm">

        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            
          
            <div className="w-12 h-12 shrink-0 rounded-full bg-red-100 flex items-center justify-center">
                <CircleX className="text-red-500" size={24} />
            </div>

           
            <div className="flex flex-col sm:flex-row justify-between w-full items-start sm:items-center gap-4">
                <div>
                    <h2 className="text-xl md:text-2xl font-bold text-[#d5002b]">
                        You Cannot Adopt This Pet
                    </h2>
                    <p className="text-[#80573A] mt-1 text-sm md:text-base">
                        You already own and listed this pet.
                    </p>
                </div>

                <div className="w-full sm:w-auto">
                    <Button className="w-full sm:w-auto rounded-2xl bg-[#CFA77A] hover:bg-[#b98c5c] text-white px-8 py-5 md:py-6 font-semibold text-sm md:text-base">
                        Go to My Listing
                    </Button>
                </div>
            </div>

        </div>
    </div>


    <div className="bg-[#FFFCF6] border border-[#E8D1B1] rounded-3xl p-6 md:p-8 shadow-sm">
        
       
        <div className="flex items-start gap-4">
            <div className="w-12 h-12 shrink-0 rounded-full bg-[#F4E7D3] flex items-center justify-center">
                <ShieldAlert className="text-[#80573A]" size={24} />
            </div>

            <div>
                <h2 className="text-xl md:text-2xl font-bold text-[#2F2D2A]">
                    You Own {pet.petName}
                </h2>
                <p className="text-[#80573A] mt-1 text-sm md:text-base">
                    Manage or update your pet listing information.
                </p>
            </div>
        </div>

        {/* BUTTON */}
        <div className="mt-6 md:mt-8">
            {/* <Link href={`/update-pet/${pet._id}`} className="block sm:inline-block">
                <Button className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-2xl bg-[#CFA77A] hover:bg-[#b98c5c] text-white px-8 py-5 md:py-6 font-semibold text-sm md:text-base">
                    <Pencil size={18} />
                    Edit Pet
                </Button>
            </Link> */}

            <EditPet pet={pet} />

            
        </div>

    </div>

</div>

    );
};

export default CanNotAdopt;