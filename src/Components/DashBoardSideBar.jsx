"use client";
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const DashBoardSideBar = () => {
  const pathname = usePathname();
  const router = useRouter();

   const handleSignOut = async () => {
      try {
        await authClient.signOut();
        toast.success("Logged out successfully!");
        router.push("/login");
      }
      catch (error) {
        console.error("Sign Out Error:", error);
        toast.error("Failed to log out.");
      }
    }

  return (
    <div className="w-65 fixed left-0 top-0 h-screen bg-[#FFFCF6] border-r border-[#E8D1B1] p-5 flex flex-col justify-between">
      <div>
        <div className="mb-10">
          <h1 className="text-3xl font-black text-[#2F2D2A]"> Dashboard </h1>

          <p className="text-sm text-[#80573A] mt-2"> Menu</p>
        </div>

        <div className="flex flex-col gap-3">
          <Link
            href="/dashboard/my-listings"
            className={`
              px-4 py-3 rounded-xl font-medium transition-all duration-300  ${
                pathname === "/dashboard/my-listings"
                  ? "bg-[#CFA77A] text-white"
                  : "text-[#2F2D2A] hover:bg-[#F4E7D3]"
              }`}
          >
            My Listings
          </Link>

          <Link
            href="/dashboard/my-request"
            className={`
              px-4 py-3 rounded-xl font-medium transition-all duration-300
              ${
                pathname === "/dashboard/my-request"
                  ? "bg-[#CFA77A] text-white"
                  : "text-[#2F2D2A] hover:bg-[#F4E7D3]"
              }
            `}
          >
            My Requests
          </Link>

          <Link
            href="/dashboard/add-pet"
            className={`px-4 py-3 rounded-xl font-medium transition-all duration-300
              ${pathname === "/dashboard/add-pet" ? "bg-[#CFA77A] text-white" : "text-[#2F2D2A] hover:bg-[#F4E7D3]"}`}
          >
            Add Pet
          </Link>
          <Link
            href="/dashboard/wish-list"
            className={`px-4 py-3 rounded-xl font-medium transition-all duration-300
              ${pathname === "/dashboard/wish-list" ? "bg-[#CFA77A] text-white" : "text-[#2F2D2A] hover:bg-[#F4E7D3]"}`}
          >
            Wish List
          </Link>
        </div>
      </div>
      <div>
        <Button onClick={handleSignOut} className="w-full px-4 py-3 rounded-xl bg-red-50 hover:bg-red-100 text-red-600 font-medium transition duration-300">
          Logout
        </Button>
      </div>
    </div>
  );
};

export default DashBoardSideBar;
