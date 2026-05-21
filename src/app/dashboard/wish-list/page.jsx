import React from 'react';
import Link from 'next/link';
import { Heart } from 'lucide-react';
import { Button } from '@heroui/react';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import WishCard from '@/Components/WishListCard/WishCard';

export const metadata = {
    title: "My Wishlist - Pet Harbor",
    description: "Keep track of your favorite pets and quickly revisit the companions you are interested in adopting.",
}
 

const WishListPage = async() => {



       // ekhane amake user er wishList pet gulo ke ene show korte hobe, tw amake just userId diye dilei hobe, sob wishList data niye ashbeni.
       // etake server component rakhi apatoto.

        const session = await auth.api.getSession({
               headers: await headers()
           });
       
           const user = session?.user;

           const id = user?.id;

           const{token} = await auth.api.getToken({
            headers: await headers()
           })

           const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/wishList/${id}`,
            {
                headers:{
                    authorization: `Bearer ${token}`
                },
               cache:"no-store",
           });

           if(!res.ok){
            return <div>Failed to load WishList. Please try again later.</div>
           }

          const wishListPets = await res.json();

        //   console.log(wishListPets)




    return (

        <div className='w-[90%] mx-auto px-4 py-8'>

           

            <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10'>

                <div>
                    <h1 className='text-4xl lg:text-5xl font-black italic text-[#2F2D2A]'>
                        My Wishlist
                    </h1>
                    <p className='text-[#80573A] mt-3 text-lg max-w-2xl'>
                        Keep track of your favorite pets and quickly revisit the companions you are interested in adopting.</p>
                </div>

            <div className='bg-[#F4E7D3] border border-[#E8D1B1] rounded-3xl px-6 py-5 min-w-55'>
                    <p className='text-[#80573A] text-sm font-medium'>
                        Total Wishlisted Pets
                    </p>
                    <h2 className='text-4xl font-black text-[#2F2D2A] mt-2'>
                        {wishListPets.length}
                    </h2>
                </div>
            </div>

             <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>

                {
                    
                    wishListPets.length > 0 ? 
                    (
                        wishListPets.map((wish) => (
                            <WishCard key={wish._id} wish={wish} />
                        ))
                    ) 
                    : 
                    (
                        <div className='flex flex-col items-center justify-center gap-4 py-20 col-span-full'>
                            <Heart size={48} className='text-[#E8D1B1]' />
                            <p className='text-[#80573A] text-lg'>Your WishList is empty. Start adding pets you love!</p>
                        </div>
                    )

                }

             

            </div>

           

           

        </div>

    );
};

export default WishListPage;