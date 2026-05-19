import { Button } from "@heroui/react";
import { HeartCrack } from "lucide-react";
import Link from "next/link";
import React from 'react';

const AdoptedPage = ({ pet }) => {

    return (

        <div className='bg-[#FFFCF6] border border-[#E8D1B1] rounded-3xl p-10 flex flex-col items-center justify-center text-center min-h-[500px]'>
            <div className='w-24 h-24 rounded-full bg-[#F4E7D3] flex items-center justify-center'>
                <HeartCrack  className='text-[#CFA77A]' size={42}/>
            </div>

            <h1 className='text-4xl lg:text-5xl font-black text-[#2F2D2A] italic mt-8 leading-tight'>
                {pet?.petName} is Already Adopted
            </h1>

            <p className='text-[#80573A] text-lg leading-relaxed mt-6 max-w-xl'>
                {pet?.petName} has already found a new home.but there are still many adorable pets waiting
                for someone like you.
            </p>
            <div className='mt-8 bg-[#F4E7D3] border border-[#E8D1B1] rounded-2xl px-6 py-4'>
                <p className='text-[#2F2D2A] font-semibold'>
                    Browse more pets and discover your perfect companion.
                </p>
            </div>
            <div>

                <Link href="/all-pets" className="mt-8 bg-[#CFA77A] hover:bg-[#b98c5c] text-white rounded-2xl px-8 py-5 md:py-6 font-semibold text-sm md:text-base inline-block">
                    Explore More Pets
                </Link>
                  
            </div>

        </div>

    );
};

export default AdoptedPage;