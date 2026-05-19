import PetCard from '@/Components/PetCard';
import React from 'react';

const AllPetsPage =async () => {


    // api call to fetch all pets, then map through the data and show the pet cards here.

    const res = await fetch("http://localhost:5000/allpets", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if(!res.ok){
        return <div>Failed to load pets.Please try again later.</div>
    }

    const pets = await res.json();
    // console.log(pets);



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

        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          {
            pets?.map((pet) => (
              <PetCard key={pet._id} pet={pet} />
            ))
          }
          
        </div>
      </div>

    </section>
    );
};

export default AllPetsPage;