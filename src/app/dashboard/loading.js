import { PawPrint } from 'lucide-react';
import React from 'react';

const LoadingPage = () => {
    return (
        <div className='min-h-screen flex flex-col items-center justify-center bg-[#FFFCF6] gap-5'>
            
            <PawPrint size={70} className='text-[#80573A] animate-bounce'/>

            <h1 className='text-3xl font-bold text-[#2F2D2A]'>
                Loading...
            </h1>

            <p className='text-[#80573A] text-sm tracking-wide'>
                Preparing your dashboard....
            </p>

        </div>
    );
};

export default LoadingPage;