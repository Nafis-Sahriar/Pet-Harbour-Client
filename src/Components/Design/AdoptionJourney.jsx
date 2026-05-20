"use client"
import React from 'react';

const steps = [
  {
    id: 1,
    title: 'Browse Pets',
    description:
      'Explore adorable pets waiting for a loving home.',
  },
  {
    id: 2,
    title: 'Send Request',
    description:
      'Choose your companion and submit your adoption request.',
  },


  {
    id: 3,
    title: 'Meet Pet',
    description:
      'Connect with the owner and meet your future friend.',
  },
  {
    id: 4,
    title: 'Bring Home',
    description:
      'Complete the process and welcome them home forever.',
  },
];

const AdoptionJourney = () => {
  return (
    <div className="bg-[#2F2D2A] py-14 md:py-20 px-4 md:px-6 w-[95%] md:w-[90%] mx-auto rounded-2xl md:rounded-3xl">

      <div className="max-w-7xl mx-auto">
        <div className="text-center">

          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight"> Pet Adoption Journey</h2>
           
       

          <p className="mt-4 md:mt-5 max-w-2xl mx-auto text-sm md:text-base text-[#E8D1B1] leading-7 md:leading-8">
            A simple journey to help pets find a safe, loving, and forever home.</p>
        </div>

      
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8 mt-12 md:mt-16">

          {
          
            steps.map((step, index) => (

                <div key={index} className="bg-[#80573A] rounded-2xl md:rounded-3xl p-6 md:p-8 text-center">
            
    
              <div className="w-12 h-12 md:w-14 md:h-14 mx-auto rounded-full bg-[#CFA77A] flex items-center justify-center
               text-white text-lg md:text-xl font-bold">
                {step.id}
              </div>
          
              <h3 className="mt-5 md:mt-6 text-xl md:text-2xl font-semibold text-white">
                {step.title}
              </h3>

              <p className="mt-3 md:mt-4 text-sm md:text-base text-[#F4E7D3] leading-6 md:leading-7">
                {step.description}
              </p>

             </div> 
             )
        )

   
    }

  </div>
</div>
    </div>
  );
};

export default AdoptionJourney;