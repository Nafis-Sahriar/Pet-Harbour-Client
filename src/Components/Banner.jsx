import { Button } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <div>
     <div className="w-full bg-[#FFFFFF] overflow-hidden">

  <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24">

    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

    
      <div>

   
        <div className="inline-flex items-center gap-2 bg-[#F4E7D3] border border-[#E8D1B1] px-4 py-2 rounded-full mb-6">

          <div className="w-2 h-2 rounded-full bg-[#CFA77A]"></div>
          <p className="text-sm font-medium text-[#80573A]">
            Trusted Pet Adoption Platform
          </p>
        </div>

      
        <h1 className="text-5xl lg:text-7xl font-black leading-tight text-[#2F2D2A]">
          Find Your<span className="block text-[#CFA77A] italic">Perfect Pet</span> Companion
        </h1>

       
        <p className="mt-6 text-lg leading-8 text-[#6A5D52] max-w-xl">
        <span className="font-bold text-[#CFA77A]">Welcome!</span> To PetHarbor <br></br>
          Discover loving pets waiting for a forever home. Browse available pets, connect with trusted owners, and make adoption simple, safe, and joyful.
        </p>

   
        <div className="flex flex-wrap items-center gap-4 mt-10">

          <Button className="px-8 py-6 bg-[#a0723e] hover:bg-[#BB9368] text-white font-semibold rounded-2xl transition duration-300 shadow-lg shadow-[#CFA77A]/30">
            Adopt Now
          </Button>

          <Button variant='outline' className="px-8 py-6 border-2 border-[#E8D1B1] hover:bg-[#F4E7D3] text-[#2F2D2A] font-semibold rounded-2xl transition duration-300">
            Browse Pet
          </Button>
        </div>
      </div>

      <div className="relative flex items-center justify-center min-h-125">
        <Image src={'/bannerbg.png'} alt="Banner" width={500} height={500} className='rounded-tr-4xl' />
      </div>

    </div>

  </div>

</div>
        </div>
    );
};

export default Banner;