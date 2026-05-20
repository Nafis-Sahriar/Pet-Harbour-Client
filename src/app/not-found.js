import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
  return (

    <section className="min-h-screen bg-[#2F2D2A] flex items-center justify-center px-6">
      <div className="text-center max-w-2xl mx-auto">

        <h1 className="text-7xl md:text-8xl font-black text-[#CFA77A] animate__animated animate__pulse animate__infinite">
          404
        </h1>

        <h2 className="mt-6 text-3xl md:text-4xl font-bold text-white">
          Lost Along The Journey
        </h2>

        <p className="mt-6 text-sm md:text-base leading-8 text-[#E8D1B1]">
          The page you are looking for may have been moved, removed, or perhaps it never existed.
         But dont worry — there are still many adorable
          pets waiting to meet you at Pet Harbor.
        </p>

        
        <div className="mt-10">


          <Link
            href="/" className="bg-[#80573A] hover:bg-[#6d4b34] transition text-white px-8 py-3 rounded-full font-semibold">
            Back To Home
          </Link>

        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;