import React from 'react';

export const metadata = {
  title: "Adoption Policy - Pet Harbor",
  description:"Learn about our pet adoption policies and guidelines to ensure a safe and loving home for every rescued pet.",
};

const policies = [
  {
    id: 1,
    title: 'Provide a Safe Home',
    description:'Adopters must ensure pets receive a safe, clean, and caring environment.',
  },

  {
    id: 2,
    title: 'Responsible Pet Care',
    description:'Pets should receive proper food, medical care, exercise, and attention regularly.',
  },

  {
    id: 3,
    title: 'No Abandonment',
    description:'Adopted pets must never be abandoned, neglected, or mistreated.',
  },

  {
    id: 4,
    title: 'Meet Adoption Requirements',
    description:'Users must provide accurate information during the adoption process.',
  },

  {
    id: 5,
    title:'Respect Adoption Process',
    description:'Every adoption request is reviewed carefully for pet safety.',
  },

  {
    id: 6,
    title: 'Lifelong Commitment',
    description:'Adopting a pet means accepting long-term responsibility and care.',
  },
];

const guides = [
  {
    id: 1,
    title: 'Prepare Your Home',
    description:'Create a safe and comfortable environment before bringing your pet home.',
  },
  {
    id: 2,
    title: 'Give Them Time',
    description:'Allow pets time to adjust emotionally to their new surroundings and family.',
  },

  {
    id: 3,
    title: 'Visit A Veterinarian',
    description:'Schedule regular health checkups and vaccinations for your pet.',
  },
  {
    id: 4,
    title: 'Build Trust Slowly',
    description:'Patience, love, and consistency help create a strong bond with your pet.',
  },
];

const AdoptionPolicyPage = () => {
  return (
    <div className="bg-[#2F2D2A] min-h-screen py-14 md:py-24 px-4 md:px-6 overflow-hidden">

      <div className="max-w-[90%] mx-auto">

      
        <div className="text-center animate__animated animate__fadeInDown">

          <p className="text-[#CFA77A] uppercase tracking-[4px] md:tracking-[6px] text-xs sm:text-sm md:text-base">
            Pet Harbor Policies
          </p>

          <h1 className="mt-4 md:mt-5 text-4xl sm:text-5xl md:text-7xl font-black text-white leading-tight">

            Adoption Policy

          </h1>

          <p className="mt-6 md:mt-8 max-w-3xl mx-auto text-sm sm:text-base md:text-lg leading-7 md:leading-8 text-[#E8D1B1] px-2">

            Our adoption policies are designed to ensure every rescued pet
            finds a loving, safe, and responsible forever home.

          </p>

        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 mt-14 md:mt-24">

          {policies.map((policy, index) => (

            <div
              key={policy.id}
              className="bg-[#80573A] rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 animate__animated animate__fadeInUp"
              style={{
                animationDelay: `${index * 0.12}s`,
              }}
            >

        
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#CFA77A] flex items-center justify-center text-white text-lg md:text-xl font-bold">

                {policy.id}

              </div>

          
              <h2 className="mt-5 md:mt-6 text-xl sm:text-2xl font-bold text-white leading-snug">

                {policy.title}

              </h2>

     
              <p className="mt-3 md:mt-4 text-sm md:text-base leading-7 md:leading-8 text-[#F4E7D3]">
                {policy.description} </p>  
            </div>

          ))}

        </div>


        <div className="mt-16 md:mt-24">
          <div className="text-center animate__animated animate__fadeInUp">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">Adoption Guides</h2>

            <p className="mt-5 max-w-2xl mx-auto text-sm sm:text-base leading-7 md:leading-8 text-[#E8D1B1] px-2">
              Helpful guidance to make your pet adoption journey smooth, safe, and comfortable for both you and your companion.
            </p>

          </div>

    
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-12 md:mt-16">
            {guides.map((guide, index) => (
              <div
                key={guide.id}
                className="border border-[#80573A] rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 animate__animated animate__fadeInUp"
                style={{
                  animationDelay: `${index * 0.15}s`,
                }}>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#CFA77A] flex items-center justify-center text-white font-bold text-sm md:text-base">
                    {guide.id}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    {guide.title}
                  </h3>
                </div>
                <p className="mt-5 text-sm md:text-base leading-7 md:leading-8 text-[#E8D1B1]">
                  {guide.description}
                </p>
              </div>

            ))}

          </div>

        </div>

    
        <div className="mt-16 md:mt-24 text-center animate__animated animate__fadeInUp">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white leading-tight px-2">

        “Adoption is not just rescuing a pet.
        <span className="block mt-2 text-[#CFA77A]">It is building a lifelong bond.”</span>
          </h2>

          <p className="mt-6 md:mt-8 max-w-2xl mx-auto text-sm sm:text-base leading-7 md:leading-8 text-[#E8D1B1] px-2">
            Thank you for helping us create a safer and more compassionate future for rescued animals through responsible adoption.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdoptionPolicyPage;