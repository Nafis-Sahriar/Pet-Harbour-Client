import React from "react";
import PetCard from "./PetCard";

const FeaturedSectionHome = async () => {


    // Now I need an api that will fetch only 6 peths, and those pets willbe available for adoption.

    const res = await fetch("http://localhost:5000/featuredPets", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const featuredPets = await res.json();
    console.log(featuredPets);


  return (

    <section className="w-full py-20 bg-[#FFFCF6]">

      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center max-w-3xl mx-auto">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F4E7D3] border border-[#E8D1B1] mb-6">

            <div className="w-2 h-2 rounded-full bg-[#CFA77A]"></div>

            <p className="text-sm font-medium text-[#80573A]">
              Featured Pets
            </p>
          </div>

       
          <h1 className="text-4xl lg:text-6xl font-black text-[#2F2D2A] leading-tight">
            Meet Pets Looking
            <span className="block text-[#CFA77A]">
              For a Loving Home
            </span>

          </h1>

          <p className="mt-6 text-lg leading-8 text-[#6A5D52]">
            Explore some of our most adorable pets waiting for adoption. Each pet deserves care, affection, and a forever family.
            Find your perfect companion today.
          </p>

        </div>

       
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          {
            featuredPets.map((pet) => (<PetCard key={pet._id} pet={pet} />))
          }

        </div>

      </div>

    </section>

  );
};

export default FeaturedSectionHome;