import React from 'react';
import {HeartHandshake, Utensils, ShieldCheck,Syringe,} from 'lucide-react';

const tips = [
  {

    id: 1,
    title: 'Healthy Nutrition',
    description:'Provide balanced meals, fresh water, and maintain proper feeding habits for your pets.',
    icon: <Utensils size={38} />,


  },

  {
    id: 2,
    title: 'Regular Vet Checkups',
    description:
    'Routine health checkups and vaccinations help pets stay healthy and active.',
    icon: <Syringe size={38} />,
  },

  {
    id: 3,
    title: 'Love & Attention',
    description:'Spend quality time with your pets and make them feel safe, loved, and comfortable.',
    icon: <HeartHandshake size={38} />,
  },

  {
    id: 4,
    title: 'Safe Environment',
    description:'Keep your home clean and pet-friendly to ensure a secure and stress-free life.',
    icon: <ShieldCheck size={38} />,
  },
];

const PetCareTips = () => {
  return (
    <div className="bg-[#FFFCF6] py-20 px-6">
      <div className="max-w-[90%] mx-auto">

        <div className="text-center mb-14 animate__animated animate__fadeInDown">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2F2D2A]">
            Pet Care Tips</h2>

          <p className="mt-4 max-w-2xl mx-auto text-[#80573A] leading-7">
            Simple but important tips to keep your beloved pets healthy, happy, and full of energy every single day.
          </p>
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {tips.map((tip, index) => (
            <div
              key={tip.id}
              className={`bg-[#F4E7D3] rounded-3xl p-8 shadow-md hover:-translate-y-2 transition animate duration-300 animate__animated animate__fadeInUp`}
             >
             
                    <div className="w-16 h-16 rounded-2xl bg-[#CFA77A] text-[#2F2D2A] flex items-center justify-center mb-6">
                        {tip.icon}
                    </div>
                    <h3 className="text-2xl font-semibold text-[#2F2D2A] mb-4">
                        {tip.title}
                    </h3>

                    <p className="text-[#80573A] leading-7 text-sm">
                        {tip.description}
                    </p>
            </div>
          ))}

            </div>
      </div>
    </div>
  );
};

export default PetCareTips;