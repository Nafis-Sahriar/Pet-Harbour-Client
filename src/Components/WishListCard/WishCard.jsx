"use client"
import { Avatar, Button } from '@heroui/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';


const WishCard = ({ wish }) => {

    const router = useRouter();

    const handleRemoveFromWishList = async() =>{

        try{
            const res = await fetch(`http://localhost:5000/removeFromWishList/${wish?._id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if(res.ok)
            {
                toast.success("Removed from WishList successfully!");
                router.refresh();
            }
            else{
                toast.error("Failed to remove from WishList. Please try again.");
            }
        }
        catch(error)
        {
            toast.error("An error occurred while removing from WishList. Please try again.");
        }


    }

    return (

        <div className='bg-[#FFFCF6] border border-[#E8D1B1] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group'>


            <div className='relative overflow-hidden'>
            
             {/*  ekhane avatar dibo. */}

                <Avatar className="w-full h-56 rounded-t-3xl rounded-b-none group-hover:scale-105 transition duration-500">
                    <Avatar.Image src={wish?.imageUrl} alt={wish?.petName}className="object-cover"/>
                    <Avatar.Fallback className="bg-[#F4E7D3] text-[#80573A] text-4xl font-black">
                        {wish?.petName?.charAt(0)}
                    </Avatar.Fallback>
                </Avatar>

            </div>


            <div className='p-6'>
                <div className='flex items-center justify-between gap-4'>
                    <div>

                        <h1 className='text-3xl font-black italic text-[#2F2D2A]'>  {wish?.petName}</h1>
                        <p className='text-[#80573A] mt-1'>{wish?.species}</p>
            
                    </div>

                    <div>
                        <p className='text-[#80573a]'>Fee : {wish?.adoptionFee}</p>
                    </div>

                </div>


                <div className='flex items-center gap-3 mt-8'>

                    <Link  href={`/all-pets/${wish?.petId}`} className='flex-1' >

                        <Button className='w-full bg-[#CFA77A] hover:bg-[#BB9368] text-white rounded-2xl h-12 font-semibold' >
                              View Details
                       </Button>

                    </Link>

                    <Button  variant='outline'  className='flex-1 border-[#E8D1B1] text-red-600 hover:bg-red-50 rounded-2xl h-12 font-semibold' onClick={handleRemoveFromWishList}>
                        Remove
                    </Button>

                </div>

            </div>

        </div>

    );
};

export default WishCard;