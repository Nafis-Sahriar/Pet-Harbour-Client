"use client"
import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';
import { motion } from 'framer-motion';

const stories = [
  {
    id: 1,
    name: 'SRK & Salman',
    image:
      'https://i.ibb.co.com/SDBmQ23n/little-boy-holding-kitten-his-600nw-2665203073.webp',
    story:
      'Salman was rescued from the streets and now enjoys a safe and loving home with Sarah.',
  },
  {
    id: 2,
    name: 'J.Cutler & Mike Tyson',
    image:
      'https://i.ibb.co.com/CKD5BFw8/striped-fluffy-kitten-sits-on-600nw-2343765251.webp',
    story:
      'Rocky found his forever family after months in a shelter and now lives happily every day.',
  },

    {
        id: 3,
        name: 'Lina & Lilly',
        image:
        'https://i.ibb.co.com/RTKRvvzX/maxresdefault.jpg',
        story:
        'Luna helped Emma overcome loneliness and became her closest companion.',
    },

  {
    id: 4,
    name: 'Mike & Max',
    image:
      'https://i.ibb.co.com/kgtxhQFb/boy-with-cat.jpg',
    story:
      'Max was adopted as a tiny rescue puppy and grew into a joyful member of the family.',
  },

  {
    id: 5,
    name: 'Tom & Jerry',
    image:
      'https://i.ibb.co.com/JFF8YYCz/a-cartoon-character-holding-a-mouse-in-his-hand.jpg',
    story:
      'Tom and jerry found each other in Pet Harbor and after that they are now rival and friend .',
  },
];

const SuccessStories = () => {
  return (
    <div className="bg-white py-20 overflow-hidden">

    
      <motion.div initial={{ opacity:0,  y:-30 }}
        whileInView={{ opacity:1,   y:0}}
        transition={{duration:0.5}}
        viewport={{ once:true}}
        className="text-center px-6"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-[#2F2D2A]">Our Success Stories</h2>

        <p className="mt-5 max-w-2xl mx-auto text-[#80573A] leading-8">
          Every adoption has a beautiful story behind it. Here are some happy moments shared by pet lovers who found their perfect companions through Pet Harbor </p>
      </motion.div>

     
      <div className="mt-16">

        <Marquee
          pauseOnHover={true}
          speed={45}
          gradient={false}
        >

          {stories.map((story) => (
            <motion.div
              key={story.id} whileHover={{y:-8}}
              className="bg-[#F4E7D3] w-87 mx-4 rounded-3xl p-6 border-2 border-[#E8D1B1] shadow-xl ">
            
              <div className="flex items-center gap-4 ">
                 <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image src={story.image} alt={story.name} fill className="object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#2F2D2A]">
                    {story.name}
                  </h3>

                  <p className="text-sm text-[#80573A]">
                    Happy Adoption Story</p>
                </div>


        </div>

          
              <p className="mt-6 text-[#80573A] leading-7 line-clamp-2">“{story.story}” </p>
            </motion.div>
     ))}

  </Marquee>
</div>
</div>
  );};

export default SuccessStories;