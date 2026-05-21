import Image from 'next/image';
import React from 'react';

export const metadata = {
  title: "About Us - Pet Harbor",
  description: "Learn about our pet adoption platform, mission, and the the person behind Pet Harbor.",
}

const AboutUsPage = () => {



  return (


    <div className="bg-[#2F2D2A] min-h-screen py-16 md:py-24 px-4 md:px-6">

      <div className="max-w-[90%] mx-auto">

        <div className="text-center">

          <p className="text-[#CFA77A] uppercase tracking-[6px] text-sm md:text-base">About Pet Harbor</p>

          <h1 className="mt-5 text-4xl sm:text-5xl md:text-7xl font-black text-white leading-tight">
            Giving Every Pet <span className="block text-[#CFA77A]">A Loving Home</span>
          </h1>

          <p className="mt-8 max-w-3xl mx-auto text-sm sm:text-base md:text-lg leading-8 text-[#E8D1B1]">
            Pet Harbor is a modern pet adoption platform built to connect loving families with rescued and homeless pets. We believe every
            animal deserves care, safety, and a forever home filled with love.
          </p>

        </div>

   
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 mt-16 md:mt-24">
        
          <div className="bg-[#80573A] rounded-3xl p-6 md:p-10">

            <h2 className="text-3xl md:text-4xl font-bold text-white">Our Mission</h2>

            <p className="mt-6 text-sm sm:text-base leading-8 text-[#F4E7D3]">Our mission is simple — reduce the number of abandoned animals
              and help pets find caring families through a trusted and
              user-friendly adoption experience.</p>
            <p className="mt-5 text-sm sm:text-base leading-8 text-[#F4E7D3]">
              We aim to create a compassionate community where every rescued pet gets the opportunity to live a healthy, happy, and meaningful
              life.
            </p>
          </div>

         
          <div className="bg-[#CFA77A] rounded-3xl p-6 md:p-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2F2D2A]"> Why Pet Harbor?</h2>

            <div className="mt-8 space-y-5">

              <div className="border-b border-[#2F2D2A]/20 pb-4">
                <h3 className="text-xl font-semibold text-[#2F2D2A]">Trusted Adoption Process</h3>

                <p className="mt-2 text-[#2F2D2A] leading-7">Safe and transparent adoption experience for everyone.</p>
              </div>

              <div className="border-b border-[#2F2D2A]/20 pb-4">

                <h3 className="text-xl font-semibold text-[#2F2D2A]">

                  Caring Community
            </h3>

                <p className="mt-2 text-[#2F2D2A] leading-7">

                   A growing network of pet lovers and rescuers.

                </p>


              </div>



              <div>

                <h3 className="text-xl font-semibold  text-[#2F2D2A]" >

                  Better Future For Pets

                </h3>

                <p className="mt-2 text-[#2F2D2A] leading-7">

                  Helping pets move from shelters to loving forever homes.


                   </p>
              </div>

            </div>




          </div>





        </div>


        <div className="mt-16 md:mt-24 bg-[#80573A] rounded-3xl p-6 md:p-10">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
 
            <div className="relative w-full h-80 md:h-112 rounded-3xl overflow-hidden">

              <Image src="https://i.ibb.co.com/WNmDgNHw/photo-2026-01-04-16-42-43.jpg" alt="My Pic"
                fill className="object-cover"/>
            </div>

            <div>

              <p className="text-[#E8D1B1] uppercase tracking-[4px] text-sm">Meet The Designer & Developer</p>

              <h2 className="mt-4 text-4xl md:text-5xl font-black text-white leading-tight">Nafis Sahriar</h2>

              <p className="mt-6 text-sm sm:text-base leading-8 text-[#F4E7D3]">

                SWE student at <span className='italic'>Daffodil International Univerisy</span> and a junior web
                  developer focused on building modern, responsive, and meaningful
                    digital experiences.

              </p>

              <p className="mt-5 text-sm sm:text-base leading-8 text-[#F4E7D3]">

                Pet Harbor was created with the vision of helping rescued pets connect with caring families through a clean, user-friendly,
                and emotionally engaging adoption platform, securing smooth and joyful adoption journey for all users.
              </p>

            </div>

          </div>

        </div>

 
        <div className="mt-16 md:mt-24 text-center">

          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            “Animals are not property.<span className="block mt-2 text-[#CFA77A]">They are family.”</span>
          </h2>

          <p className="mt-8 max-w-2xl mx-auto text-sm sm:text-base leading-8 text-[#E8D1B1]">

            At Pet Harbor, we are dedicated to creating a world where every pet is treated with kindness, dignity, and unconditional love.

             </p>

             </div>

      </div>
</div>
  );
};

export default AboutUsPage;