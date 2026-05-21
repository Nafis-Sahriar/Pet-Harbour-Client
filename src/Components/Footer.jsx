import React from 'react';
import Link from "next/link";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';


const Footer = () => {
    return (
    <footer className="bg-[#2F2D2A] text-[#FFFCF6]  z-50">
           <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

    <div>
      <Image src="/footerlogo.png" alt="Pet Harbor Logo" width={150} height={50} className="mb-4" />
      <p className="mt-4 text-sm leading-6 text-[#E8D1B1]"> Connecting loving humans with adorable pets. 
        Give abandoned animals a safe and happy forever home.
      </p>
      <div className="mt-6 space-y-2 text-sm text-[#F4E7D3]">
        <p>Daffodil Smart City, Savar, Dhaka, Bangladesh</p>
        <p>+880 1618965833</p>
        <p>nafis.apid@gmail.com</p>
      </div>
    </div>

  
    <div>
      <h3 className="text-xl font-semibold text-[#CFA77A] mb-5 italic">
        Quick Links
      </h3>

      <div className="flex flex-col gap-3 text-sm">
        <Link
          href="/all-pets"
          className="hover:text-[#CFA77A] transition"
        >
          All Pets
        </Link>

        <Link
          href="/"
          className="hover:text-[#CFA77A] transition"
        >
          Featured Pets
        </Link>

        <Link
          href="/dashboard"
          className="hover:text-[#CFA77A] transition"
        >
          Dashboard
        </Link>

        <Link
          href="/dashboard/wish-list"
          className="hover:text-[#CFA77A] transition"
        >
          Wishlist
        </Link>
      </div>
    </div>

  
    <div>
      <h3 className="text-xl font-semibold text-[#CFA77A] mb-5 italic">
        Explore!
      </h3>

      <div className="flex flex-col gap-3 text-sm">
        <Link
          href="/"
          className="hover:text-[#CFA77A] transition">
          Success Stories
        </Link>

        <Link
          href="/"
          className="hover:text-[#CFA77A] transition">
          Pet Care Tips
        </Link>

        <Link
          href="/adoption-policy"
          className="hover:text-[#CFA77A] transition">
          Adoption Guide
        </Link>

        <Link
          href="/about-us"
          className="hover:text-[#CFA77A] transition">
          About Us
        </Link>
      </div>
    </div>

    <div>
      <h3 className="text-xl font-semibold text-[#CFA77A] mb-5 italic">
        Connect With Us
      </h3>

      <p className="text-sm text-[#E8D1B1] leading-6">
        Follow our journey and stay connected with the Pet Harbor community.
      </p>

        <div className="flex items-center gap-4 mt-6">

            <Link
            href="https://github.com/Nafis-Sahriar"
            target="_blank"
            className="bg-[#80573A] p-3 rounded-full hover:scale-110 transition"
            >
            <FaGithub></FaGithub>
            </Link>

            <Link
            href="https://www.linkedin.com/in/nafis-sahriar-redwan/"
            target="_blank"
            className="bg-[#80573A] p-3 rounded-full hover:scale-110 transition"
            >
                <FaLinkedin />
            </Link>

            <Link
            href="https://facebook.com/"
            target="_blank"
            className="bg-[#80573A] p-3 rounded-full hover:scale-110 transition"
            >
            <FaFacebook></FaFacebook>
            </Link>

            <Link
            href="https://www.instagram.com/sahriar_nafi/"
            target="_blank"
            className="bg-[#80573A] p-3 rounded-full hover:scale-110 transition"
            >
                <FaInstagram></FaInstagram>
            </Link>

        </div>
        </div>
    </div>

  
        <div className="border-t border-[#80573A] py-4 text-center text-sm text-[#E8D1B1]">
            © 2026 Pet Harbor. All Rights Reserved.
        </div>
</footer>
    );
};

export default Footer;