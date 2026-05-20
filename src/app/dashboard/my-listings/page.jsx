import Link from 'next/link';
import React from 'react';

import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { Plus, PawPrint, CheckCircle2, Clock3, Panda } from 'lucide-react';
import { Button } from '@heroui/react';
import ListedPetCard from '@/Components/ListedPetCard';

// jwt verified.

const MyListingsPage = async () => {

    const session = await auth.api.getSession({
        headers: await headers()
    });

    const user = session?.user;

    const id = user?.id;

    const {token} = await auth.api.getToken({
        headers: await headers()
    });
    
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/allPetOfOwner/${id}`,
        {
            headers:{
                authorization: `Bearer ${token}`
            }
        }
    );

    const pets = await res.json();

    // ebar count kore dashboard type data show kore dei. 
    const totalListed = pets?.length;
    const availablePets = pets?.filter(pet =>pet.adoptionStatus !=="adopted").length;
    const adoptedPets = pets?.filter(pet => pet.adoptionStatus === "adopted").length;

    return (

        <div className='space-y-10'>

            <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6'>

                <div>
                    <div className='flex items-center gap-3'>
                        <PawPrint  className='text-[#CFA77A]' size={32} />
                        <h1 className='text-4xl font-black text-[#2F2D2A]'>
                           Listings of {user?.name}
                        </h1>
                    </div>

                    <p className='text-[#80573A] mt-4 text-lg max-w-2xl leading-relaxed'>
                        Manage all your listed pets from one place.Track your pet listings, update pet details,
                        and help loving adopters find their perfect companion.
                    </p>
                </div>

                <div className='flex flex-col sm:flex-row items-start sm:items-center gap-5'>
                    <Link href="/dashboard/add-pet">
                        <Button className='bg-[#CFA77A] hover:bg-[#b98c5c] transition-all duration-300 text-white rounded-2xl px-8 py-5 font-bold flex items-center gap-3 shadow-sm'>
                            <Plus size={20} />
                            Add New Pet
                        </Button>
                    </Link>
                </div>

            </div>

            <div>
                 <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
                <div className='bg-[#FFFCF6] border border-[#E8D1B1] rounded-3xl p-6 shadow-sm'>
                    <div className='flex items-center justify-between'>
                        <div>
                            <p className='text-[#80573A] font-medium'> Total Listed</p>
                            <h1 className='text-5xl font-black text-[#2F2D2A] mt-3'>{totalListed} </h1>
                        </div>
                        <div className='w-16 h-16 rounded-2xl bg-[#F4E7D3] flex items-center justify-center'>
                            <PawPrint className='text-[#CFA77A]' size={30}/>
                        </div>
                    </div>

                </div>

                <div className='bg-[#FFFCF6] border border-yellow-200 rounded-3xl p-6 shadow-sm'>
                    <div className='flex items-center justify-between'>
                        <div>
                            <p className='text-yellow-600 font-medium'>Available</p>
                            <h1 className='text-5xl font-black text-[#2F2D2A] mt-3'>{availablePets}</h1>
                        </div>

                        <div className='w-16 h-16 rounded-2xl bg-yellow-100 flex items-center justify-center'>
                            <Panda className='text-yellow-500' size={30} />
                        </div>

                    </div>

                </div>

         

                <div className='bg-[#FFFCF6] border border-green-200 rounded-3xl p-6 shadow-sm'>

                    <div className='flex items-center justify-between'>
                        <div>
                            <p className='text-green-600 font-medium'>Adopted</p>
                            <h1 className='text-5xl font-black text-[#2F2D2A] mt-3'>{adoptedPets}</h1>
                        </div>
                        <div className='w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center'>
                            <CheckCircle2 className='text-green-600' size={30} />
                        </div>
                    </div>
                </div>


            </div>
            </div>



            <div className='bg-[#FFFCF6] border border-[#E8D1B1] rounded-3xl p-8 '>

                <h2 className='text-2xl font-bold text-[#2F2D2A] mb-5'>
                    Your Listed Pets
                </h2>

                {
                    pets?.length === 0 ? (

                         <div className='flex flex-col items-center gap-4 py-20'>
                            
                            <PawPrint className='text-[#CFA77A]' size={50} />

                            <h2 className='text-2xl font-bold text-[#2F2D2A]'>No Pets Found</h2>

                            <p className='text-[#80573A]'>You have not listed any pets yet.</p>
                            <p className='text-[#80573A] text-sm'>But Dont worry, you care one click away from adding a pet in PetHarbor!</p>

                            <Link href="/dashboard/add-pet">

                                <Button className='bg-[#CFA77A] hover:bg-[#b98c5c] text-white rounded-2xl px-8 py-5 font-bold flex items-center gap-3 shadow-sm'>
                                   
                                   + Add New Pet

                                </Button>
                            </Link>

                        </div>
                    ) : 
                    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>

                         {pets.map((pet) => (
                            <ListedPetCard key={pet._id} pet={pet} />
                        ))}




                    </div>
                }

               

            </div>

        </div>

    );
};

export default MyListingsPage;