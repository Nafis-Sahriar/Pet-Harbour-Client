import { RequestContainerModal } from "@/Components/RequestModal/RequestContainerModal";
import { CheckCircle2, Lock } from "lucide-react";
import React from 'react';

const AdoptedForOwnerPage = ({ pet }) => {

    return (

        <div className='bg-[#f2eedf6c] border border-[#efc65d] rounded-3xl p-10 flex flex-col shadow-xl items-center justify-center text-center min-h-125'>
            <div className='w-24 h-24 rounded-full bg-green-100 flex items-center justify-center'>
                <CheckCircle2 className='text-green-600' size={42}/>
            </div>

            <h1 className='text-4xl lg:text-5xl font-black text-[#2F2D2A] italic mt-8 leading-tight'>
                {pet?.petName} Has Been Adopted
            </h1>


            <p className='text-[#80573A] text-lg leading-relaxed mt-6 max-w-xl'>
                Congratulations! Your pet has successfully found a new home. This listing is now finalized and can no longer be edited or managed.
            </p>

            <div className='mt-8 bg-[#f4d6d6] border border-[#bc060f] rounded-2xl px-6 py-5 flex items-center gap-3'>
                <Lock className='text-[#bc0a0d]' size={20} />
             
                <p className='text-[#d30808] font-semibold'>
                    You can not edit this pet anymore,someone else owns {pet?.petName} now.
                </p>
                
            </div>

            <div size="sm" className="mt-10">
                <RequestContainerModal pet={pet}></RequestContainerModal>
            </div>
        </div>

    );
};

export default AdoptedForOwnerPage;