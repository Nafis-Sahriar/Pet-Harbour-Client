"use client"
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const reasons = [
  {
    id: 1,
    quote: '“Saving one animal will not change the world, but for that one animal, the world changes forever.”',
    description:
      'Thousands of pets wait every day for a safe and loving family. Your small decision can completely transform a life.',
  },

  {
    id: 2,
    quote: '“Pets teach us unconditional love, loyalty, and kindness.”',
    description:
      'Adopted pets become loyal companions who bring emotional comfort, happiness, and positive energy into your home.',
  },

  {
    id: 3,
    quote: '“A home filled with paws is a home filled with love.”',
    description:
      'Giving a rescued pet a forever home creates beautiful memories and a lifelong bond between you and your companion.',
  },
];

const WhyAdoptPets = () => {
  return (
    <section className="bg-[#FFFCF6] py-20 px-6">
      <div className="max-w-6xl mx-auto">

        <motion.div 
                initial={{ opacity:0, y:-30 } }

                whileInView={{opacity:1,y: 0 }}

                transition={{duration:0.5}}

                viewport={{ once:true}}

                className="text-center mb-14"
        >
          <h2 className="text-4xl font-bold text-[#2F2D2A]"> Why Adopt Pets? </h2>

          <p className="mt-4 text-[#80573A] max-w-2xl mx-auto"> Every adoption creates a story of love, hope, and companionship.</p>
        </motion.div>

      
        <div className="space-y-8">

          {reasons.map((reason, index) => 
           (
            <motion.div
              key={reason.id}

              initial={{ opacity:0,x:index%2 ===0?-60:60}}

              whileInView={{opacity:1,x:0}}

              transition={{

                duration:0.9,

                delay: index*0.4,

              }}

              viewport={{ once: true }}

              whileHover ={{ scale: 1.01 }}

              className="bg-[#F4E7D3] rounded-3xl p-8 md:p-10">

              <h3 className="text-2xl md:text-3xl font-semibold text-[#2F2D2A] leading-relaxed">{reason.quote}</h3>

              <p className="mt-5 text-[#80573A] leading-8"> {reason.description}</p>

            </motion.div>
          ))}

        </div>

    
        <motion.div initial={{ opacity:0,y:20 }}  whileInView={{opacity:1,y: 0 }}

          transition={{ delay:0.3}}

          viewport={{ once:true}}

          className="flex justify-center mt-14">
          <motion.div
            whileHover={{ scale:1.05 }}
            whileTap={{ scale: 0.95 }}>
            <Link href="/all-pets" className="bg-[#80573A] text-[#FFFCF6] px-8 py-3 rounded-full font-medium">
              Adopt Now
            </Link>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default WhyAdoptPets;