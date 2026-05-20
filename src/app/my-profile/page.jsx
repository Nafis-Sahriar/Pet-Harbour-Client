import { auth } from '@/lib/auth';
import { Avatar } from '@heroui/react';
import { headers } from 'next/headers';
import React from 'react';

const MyProfilePage =async () => {

        const session = await auth.api.getSession({
                headers: await headers()
            });
        
            const user = session?.user;
        
            const id = user?.id;


    return (
      <div className="bg-[#FFFCF6] border border-[#E8D1B1] rounded-3xl p-6 md:p-10 w-[90%] md:w-[50%] mx-auto shadow-sm mt-20 mb-20">

              <div className="flex flex-col lg:flex-row items-center gap-10">

   
        <div className="w-full lg:w-[35%]">

            <Avatar className="w-full h-50 md:h-60 rounded-3xl">

                <Avatar.Image src={user?.image} alt={user?.name} className="object-cover" />
                <Avatar.Fallback className="bg-[#F4E7D3] text-[#80573A] text-6xl font-black">
                    {user?.name?.charAt(0)}
                </Avatar.Fallback>
            </Avatar>

        </div>
        <div className="flex-1 text-center lg:text-left">

            <p className="text-[#CFA77A] uppercase tracking-[4px] text-sm">
                My Profile
            </p>

            <h1 className="mt-4 text-4xl md:text-5xl font-black text-[#2F2D2A] leading-tight">
                {user?.name}
            </h1>

            <p className="mt-5 text-[#80573A] text-base md:text-lg break-all">
                {user?.email}
            </p>

            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-3">

                <span className="bg-[#F4E7D3] text-[#2F2D2A] px-4 py-2 rounded-md text-sm font-semibold">
                    Pet Harbor Member
                </span>

            </div>
           
          </div>
    </div>

</div>
    );
};

export default MyProfilePage;