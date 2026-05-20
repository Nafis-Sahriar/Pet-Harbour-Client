import PetCard from '@/Components/PetCard';
import PetSearchBar from '@/Components/SearchBar/PetSearchBar';
import { fetchPets } from '@/lib/pets/data';
import { PawPrint } from 'lucide-react';
import React from 'react';

const AllPetsPage =async ({searchParams}) => {

  const {searchTerm,species} = await searchParams;

  const pets = await fetchPets(searchTerm || "", species|| "");

    return (
        <section className="w-full py-10 bg-[#FFFCF6]">

        <div className="max-w-[90%] mx-auto px-4">

            <div className="text-center max-w-3xl mx-auto">

     
          <h1 className="text-2xl lg:text-4xl font-black text-[#2F2D2A] leading-tight italic">
            Meet All Beautiful Creatures
          </h1>

        
          <p className="mt-6 text-lg leading-8 text-[#6A5D52]">
            Explore our diverse range of pets waiting for adoption. We believe each pet deserves a loving home, and they are only click away from finding 
            their family!
          </p>

          <div>
            <PetSearchBar></PetSearchBar>
          </div>
          
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          {
            pets?.length > 0 ? 
            (pets?.map((pet) => 
              (
                   <PetCard key={pet?._id} pet={pet} />
            ))) : (
              <div className='flex flex-col items-center justify-center gap-4 py-20 col-span-full'>

                <p className='text-[#80573A] text-xl font-bold italic text-center'>Oops. No Pet Found.</p>
                <PawPrint size={48} className='text-[#E8D1B1]' />
              </div>
            )
          }
  
        </div>
      </div>

    </section>
    );
};

export default AllPetsPage;