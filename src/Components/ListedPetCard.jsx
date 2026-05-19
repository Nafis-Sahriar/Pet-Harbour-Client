import { Button, Chip } from "@heroui/react";
import Image from "next/image";
import React from "react";

import {Eye,  Pencil, Trash2, Inbox} from "lucide-react";
import Link from "next/link";
import { DeleteAlert } from "./PetDeleteAlert/DeleteAlert";
import EditPet from "./EditPetModal/EditPet";
import { RequestContainerModal } from "./RequestModal/RequestContainerModal";

const ListedPetCard = ({ pet }) => {


  

    return (

        <div className="bg-[#FFFCF6] border border-[#E8D1B1] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">

            <div className="relative overflow-hidden">

                <Image  src={pet?.imageUrl} alt={pet?.petName} width={400} height={250}
                className="w-full h-48 object-cover group-hover:scale-105 transition duration-500"/>
                
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">

                   

                    <Chip className={`font-semibold border text-xs
                            ${
                                pet?.adoptionStatus ==="available"?"bg-green-100 text-green-700 border-green-200"
                                :"bg-red-100 text-red-700 border-red-200"
                             }`
                            }>
                        {pet?.adoptionStatus}
                    </Chip>
                 
                    <div className="bg-[#FFFCF6]/95 backdrop-blur-sm px-3 py-1 rounded-xl border border-[#E8D1B1]">
                        <p className="text-sm font-bold text-[#32200b]"> $ {pet?.adoptionFee}</p>
                           
                    </div>

                </div>
            </div>

            <div className="p-5">

    
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-black text-[#2F2D2A] leading-tight">
                            {pet?.petName}
                        </h1>
                        <p className="text-[#80573A] mt-1 text-sm">{pet?.species}-{pet?.breed}</p>
                    </div>

                </div>

   

                <div className="grid grid-cols-2 gap-3 mt-6">
                    <Link href={`/all-pets/${pet?._id}`} className="w-full">
                        <Button size="sm" className="bg-[#ac875d] hover:bg-[#BB9368] text-white font-semibold rounded-2xl w-full" >
                            <Eye size={16} /> View
                        </Button>
                    </Link>
                 
                            <div className="flex justify-end">
                                <EditPet pet={pet} />
                            </div>
                     
                    
                
                   <div size="sm">
                            <RequestContainerModal pet={pet}></RequestContainerModal>
                   </div>

                   

                    <div size="sm"  >
                        <DeleteAlert  pet={pet}/>
                    </div>

                </div>
            </div>

</div>

    );
};

export default ListedPetCard;