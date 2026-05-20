import React from 'react';

const stats = [
  {
    id: 1,
    number: '150+',
    title: 'Pets Adopted',
  },

  {
    id: 2,
    number: '98%',
    title: 'Happy Families',
  },

  {
    id: 3,
    number: '300+',
    title: 'Rescue Requests',
  },

  {
    id: 4,
    number: '24/7',
    title: 'Community Support',
  },
];

const Statistics = () => {
  return (
    <section className="bg-[#FFFCF6] py-16 md:py-24 px-4 md:px-6">

      <div className="max-w-7xl mx-auto">

        <div className="text-center">

          <h2 className="text-3xl md:text-5xl font-bold text-[#2F2D2A] leading-tight">
            Pet Harbor In Numbers
          </h2>

          <p className="mt-4 md:mt-5 max-w-2xl mx-auto text-sm md:text-base text-[#80573A] leading-7 md:leading-8">
            Every adoption creates happiness, love, and a brighter future for rescued animals.
          </p>

        </div>


        <div className="mt-12 md:mt-20 grid grid-cols-2 gap-4 md:gap-8">

          {stats.map((stat) => (

            <div
              key={stat.id}
              className="bg-[#2F2D2A] rounded-2xl md:rounded-[40px] p-5 md:p-10 border border-[#80573A]"
            >

     
              <h1 className="text-3xl sm:text-4xl md:text-7xl font-black text-[#CFA77A]">

                {stat.number}

              </h1>

          
              <div className="w-10 md:w-20 h-1 bg-[#CFA77A] rounded-full mt-4 md:mt-6"></div>

            
              <h3 className="mt-4 md:mt-6 text-sm sm:text-lg md:text-2xl font-semibold text-white leading-snug">

                {stat.title}

              </h3>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Statistics;