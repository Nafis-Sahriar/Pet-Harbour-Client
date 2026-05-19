import { Spinner } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const LoadingPage = () => {
    return (
        <div className='min-h-screen flex items-center justify-center bg-[#FFFCF6] px-4'>
            
            <div className='flex flex-col items-center gap-4 bg-[#F4E7D3] border border-[#E8D1B1] rounded-3xl px-8 py-10 shadow-md'>
    
                <h1 className='text-3xl font-extrabold text-[#80573A]'>
                    Pet Harbor </h1>
               
                <Spinner size='xl' color='warning' />

                <Image src={'/logo.png'} height={300} width={300} alt='logo' ></Image>
                <p className='text-sm text-[#2F2D2A]'>
                    Loading...
                </p>

            </div>

        </div>
    );
};

export default LoadingPage;