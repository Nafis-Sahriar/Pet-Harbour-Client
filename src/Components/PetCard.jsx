"use client";

import React from "react";
import { Avatar, Button, Chip } from "@heroui/react";
import Link from "next/link";
import { Heart } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

const PetCard = ({pet}) => {

   const { data: session, isPending } = authClient.useSession();

  //  if(isPending){
  //   return <div>Loading...</div>
  //  }
    const currentUser = session?.user;

    const userId = currentUser?.id;

    const isOwner = userId === pet?.ownerId;

    const id = pet?._id;

    if(!pet){
        return <div>Something went wrong...</div>}

    // jodi owner hoy tahole wishlist button ta disable kore dibo. 

    const {petName, imageUrl, species, adoptionStatus, age, gender, adoptionFee} = pet || {};

  const handleWishList =async()=>{

            try{

                const wishListData ={
                    petId: id,
                    userId, 
                    petName, 
                    imageUrl,
                    species,
                    adoptionStatus,
                    age,
                    gender,
                    adoptionFee,
                    ownerId: pet?.ownerId,
                    createdAt: new Date()
                }

                const {data:tokenData}  = await authClient.token();
                const token = tokenData?.token;

                const res = await fetch("http://localhost:5000/addToWishlist", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        authorization: `Bearer ${token}`
                    },
                    body: JSON.stringify(wishListData),
                });

               const data = await res.json();

               if(data?.message ==="Already in WishList!")
              {
                toast.error("This pet is already in your WishList.");
               }
               else{
                toast.success("Added to WishList");
               }

            }
            catch(error){
                toast.error("Failed to add to WishList. Please try again.");
                console.error("Error adding to WishList:", error);
            }

  }



  return (

    <div className="bg-[#FFFCF6] border border-[#E8D1B1] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">

   
      <div className="relative overflow-hidden">

       <Avatar className="w-full h-70 rounded-t-xl rounded-b-none group-hover:scale-105 transition duration-500">

        <Avatar.Image src={pet?.imageUrl} alt={pet?.petName} className="object-cover"/>

        <Avatar.Fallback className="bg-[#F4E7D3] text-[#80573A] text-4xl font-black">

            {pet?.petName?.charAt(0)}

        </Avatar.Fallback>
      </Avatar>

       
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

          <div className="flex flex-col md:flex-row justify-between items-center">

              <div>
                 <h1 className="text-3xl font-black italic text-[#2F2D2A]">{pet?.petName}</h1>
                 <p className="text-[#80573A] mt-1 text-lg">{pet?.breed} </p>
             </div>

              <div>
                <Button variant="outline" className="mt-3 border-[#E8D1B1] text-[#2F2D2A] hover:bg-[#F4E7D3] rounded-2xl font-semibold" onClick={handleWishList} 
                isDisabled={isOwner ||pet?.adoptionStatus!=="available" || !currentUser}>
                  Add to WishList <Heart />
                </Button>
              </div>

          </div>
      
        <div className="flex flex-wrap justify-between gap-3 mt-5">

          <div className="px-4 py-2 rounded-xl bg-[#F4E7D3] text-sm font-medium text-[#2F2D2A]">
            Age: {pet?.age} Years Old
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
            variant="outline"
            isDisabled={pet?.adoptionStatus !== "available"}
            className="flex-1 border-[#E8D1B1] text-[#2F2D2A] hover:bg-[#F4E7D3] rounded-2xl h-12 font-semibold"
          >
           {
              pet?.adoptionStatus === "available"?"Adopt Now": "Adopted"
           }
          </Button>

        </div>

      </div>

    </div>

  );
};

export default PetCard;