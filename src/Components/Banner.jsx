import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Banner = () => {
  return (
    <div className="w-full bg-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">

          {/* LEFT: TEXT CONTENT */}
          <div>

            {/* BADGE */}
            <div className="inline-flex items-center gap-2 bg-[#F4E7D3] border border-[#E8D1B1] px-4 py-2 rounded-full mb-7">
              <div className="w-2 h-2 rounded-full bg-[#CFA77A]" />
              <p className="text-sm font-semibold text-[#80573A]">
                Trusted Pet Adoption Platform
              </p>
            </div>

            {/* HEADLINE */}
            <h1 className="text-5xl lg:text-[62px] font-black leading-[1.08] text-[#2F2D2A] mb-6"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Find Your
              <span className="block text-[#C9964D] italic">Perfect Pet</span>
              Companion
            </h1>

            {/* SUBTEXT */}
            <p className="text-base lg:text-lg leading-8 text-[#6A5D52] max-w-xl mb-10">
              <span className="font-bold text-[#C9964D]">Welcome!</span> To PetHarbor —{' '}
              Discover loving pets waiting for a forever home. Browse available pets,
              connect with trusted owners, and make adoption simple, safe, and joyful.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/all-pets">
                <Button className="px-8 py-6 bg-[#A0723E] hover:bg-[#BB9368] text-white font-bold rounded-2xl transition duration-300 shadow-lg shadow-[#CFA77A]/30">
                  Adopt Now
                </Button>
              </Link>
              <Link href="/adoption-policy">
                <Button
                  variant="outline"
                  className="px-8 py-6 border-2 border-[#E8D1B1] hover:bg-[#F4E7D3] text-[#2F2D2A] font-bold rounded-2xl transition duration-300"
                >
                  About Our Adoption Policy
                </Button>
              </Link>
            </div>

          </div>

          {/* RIGHT: IMAGE WITH DECORATIONS */}
          <div className="relative flex items-end justify-center min-h-105 lg:min-h-120">

            {/* DECORATIVE RING */}
            <div className="absolute -top-7 -right-4 w-24 h-24 rounded-full border-14 border-[#F4E7D3] z-0" />

            {/* DECORATIVE DOT GRID */}
            <div className="absolute bottom-2 -left-6 grid grid-cols-4 gap-1.5 z-0">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#D9B896]" />
              ))}
            </div>

            {/* IMAGE CARD */}
            <div className="relative w-full rounded-[32px] rounded-bl-none overflow-hidden  bg-[#F4E7D3] z-10">
              <Image
                src="/bannerbg.png"
                alt="Cat coming out of the screen"
                width={560}
                height={480}
                className="w-full h-auto object-cover"
                priority
              />
            </div>

            {/* STAT PILL — top left */}
            <div className="absolute -top-3.5 -left-3.5 z-20 bg-white border border-[#E8D1B1] rounded-2xl px-4 py-3 shadow-[0_4px_20px_rgba(160,114,62,0.12)]">
              <p className="text-xl font-black text-[#C9964D] leading-none">2.4k+</p>
              <p className="text-[11px] font-semibold text-[#80573A] mt-0.5">Pets adopted</p>
            </div>

            {/* STAT PILL — bottom right */}
            <div className="absolute bottom-6 right-3.5 z-20 bg-white border border-[#E8D1B1] rounded-2xl px-4 py-3 shadow-[0_4px_20px_rgba(160,114,62,0.12)]">
              <p className="text-xl font-black text-[#C9964D] leading-none">98%</p>
              <p className="text-[11px] font-semibold text-[#80573A] mt-0.5">Happy families</p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Banner;