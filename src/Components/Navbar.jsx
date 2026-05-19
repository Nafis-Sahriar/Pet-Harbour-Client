"use client";

import { useState } from "react";
import { Menu, X, User, LogOut, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";


export function Navbar() 
{
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const router = useRouter();

  const { data: session, isPending, refetch } = authClient.useSession();

  // if (isPending) {
  //   return <div>Loading...</div>;
  // }

  const userData = session?.user;
  // console.log(userData);

  const user = userData ? {
    name: userData.name,
    email: userData.email,
    imageUrl: userData.image
  } : null;
  

    const handleSignOut = async () => {
      try {
        await authClient.signOut();
        toast.success("Logged out successfully!");
        router.push("/login");
        refetch(); 
      }
      catch (error) {
        console.error("Sign Out Error:", error);
        toast.error("Failed to log out.");
      }
    }


  return (
    <nav className="sticky top-0 w-full z-50 backdrop-blur-md bg-[#FFFCF6]/80 border-b border-[#E8D1B1]/40 shadow-sm transition-all duration-300">
      <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="p-2 rounded-xl hover:bg-[#F4E7D3]/50 transition-all duration-200">
                <Image src="/logo.png" alt="Logo" width={100} height={40} className="object-contain" loading="eager" />
              </div>
            </Link>
          </div>
    
          <div className="hidden md:flex gap-8 items-center">
            <Link href="/" className="font-medium text-[#2F2D2A] hover:text-[#80573A] transition-colors duration-200">
              Home
            </Link>
            <Link href="/all-pets" className="font-medium text-[#2F2D2A] hover:text-[#80573A] transition-colors duration-200">
              All Pets
            </Link>
          </div>

          {
            isPending ? <p>Loading......</p>
            :<div className="hidden md:flex items-center gap-4">
            {user ? (
              <div className="relative">
                <button 
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-3 p-1.5 rounded-full hover:bg-[#F4E7D3]/60 transition-all duration-200 border border-[#E8D1B1]/30 cursor-pointer"
                >
                  <Avatar className="w-9 h-9 rounded-full border-2 border-[#CFA77A] shadow-md">
                    <Avatar.Image
                      src={user?.imageUrl}
                      alt={user?.name}
                      referrerPolicy="no-referrer"
                      className="object-cover"
                    />
                    <Avatar.Fallback className="text-lg font-bold bg-[#F4E7D3] text-[#CFA77A]">
                      {user?.name.charAt(0)}
                    </Avatar.Fallback>
                  </Avatar>
                  
                  <div className="text-left hidden lg:block pr-2">
                    <p className="text-sm font-semibold text-[#2F2D2A] truncate max-w-24">{user.name}</p>
                  </div>
                </button>

             
                {isDropdownOpen && (
                  <div className="absolute right-0 top-14 w-56 bg-[#FFFCF6] border border-[#E8D1B1]/50 rounded-2xl shadow-xl flex flex-col py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="px-4 py-3 border-b border-[#F4E7D3]">
                      <p className="font-bold text-sm text-[#2F2D2A]">Welcome back!</p>
                      <p className="text-xs truncate text-[#80573A]">{user.email}</p>
                    </div>
                    
                    <Link 
                      href="/dashboard" 
                      onClick={() => setIsDropdownOpen(false)}
                      className="px-4 py-2.5 text-sm text-[#2F2D2A] hover:bg-[#F4E7D3]/40 flex items-center gap-3 transition-colors"
                    >
                      <LayoutDashboard className="w-4 h-4 text-[#CFA77A]" /> Dashboard
                    </Link>
                    
                    <Link 
                      href="/settings" 
                      onClick={() => setIsDropdownOpen(false)}
                      className="px-4 py-2.5 text-sm text-[#2F2D2A] hover:bg-[#F4E7D3]/40 flex items-center gap-3 transition-colors"
                    >
                      <User className="w-4 h-4 text-[#CFA77A]" /> My Profile
                    </Link>
                    
                    <button className="w-full px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 flex items-center gap-3 transition-colors text-left font-medium cursor-pointer" onClick={handleSignOut}>
                      <LogOut className="w-4 h-4" /> Log Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link href="/login">
                  <Button variant="light" className="font-bold rounded-full px-6 text-[#2F2D2A] hover:bg-[#F4E7D3]/60">
                    LogIn
                  </Button>
                </Link>
                <Link href="/register">
                  <Button className="font-bold rounded-full px-6 bg-[#80573A] text-[#FFFCF6] hover:bg-[#2F2D2A] transition-colors">
                    Register
                  </Button>
                </Link>
              </div>
            )}
          </div>

          }
          

        
          <div className="md:hidden flex gap-3 items-center">
            {user && (
              <Link href="/dashboard">
                <Avatar className="w-11 h-11 rounded-full border-4 border-[#80573A] shadow-lg">

                      <Avatar.Image
                        src={user?.imageUrl}
                        alt={user?.name}
                        referrerPolicy="no-referrer"
                        className="object-cover"
                      />

                      <Avatar.Fallback className="text-lg font-bold bg-[#F4E7D3] text-[#CFA77A]">
                        {user?.name.charAt(0)}
                      </Avatar.Fallback>

                    </Avatar>
              </Link>
            )}
              
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="p-2 rounded-xl text-[#2F2D2A] hover:bg-[#F4E7D3]/60 transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      
      {isMenuOpen && (
        <div className="md:hidden px-4 pt-2 pb-6 space-y-3 bg-[#FFFCF6]/95 backdrop-blur-lg border-b border-[#E8D1B1]/60 animate-in slide-in-from-top-4 duration-300">
          <Link href="/" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 text-base font-medium text-[#2F2D2A] hover:bg-[#F4E7D3]/50 rounded-xl transition-all">
            Home
          </Link>
          <Link href="/all-pets" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 text-base font-medium text-[#2F2D2A] hover:bg-[#F4E7D3]/50 rounded-xl transition-all">
            All Pets
          </Link>

          {user ? (
            <div className="pt-2 border-t border-[#E8D1B1]/40 space-y-1">
              <Link href="/dashboard" onClick={() =>setIsMenuOpen(false)} className="px-4 py-3 text-base font-medium text-[#2F2D2A] hover:bg-[#F4E7D3]/50 flex items-center gap-3 rounded-xl transition-all">
                <LayoutDashboard className="w-5 h-5 text-[#CFA77A]" /> Dashboard
              </Link>
              <Link href="/settings" onClick={()=>setIsMenuOpen(false)} className="px-4 py-3 text-base font-medium text-[#2F2D2A] hover:bg-[#F4E7D3]/50 flex items-center gap-3 rounded-xl transition-all">
                <User className="w-5 h-5 text-[#CFA77A]" /> My Profile
              </Link>
              <button className="w-full text-left px-4 py-3 text-base font-medium text-red-600 hover:bg-red-50 flex items-center gap-3 rounded-xl transition-all cursor-pointer" onClick={handleSignOut}>
                <LogOut className="w-5 h-5" /> Log Out
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4 pt-2 border-t border-[#E8D1B1]/40">
              <Link href="/login" onClick={()=>setIsMenuOpen(false)} className="w-full">
                <Button variant="bordered" className="w-full rounded-xl border-[#CFA77A] text-[#2F2D2A] font-semibold">
                  Login
                </Button>
              </Link>
              <Link href="/register" onClick={()=> setIsMenuOpen(false)} className="w-full">
                <Button className="w-full rounded-xl bg-[#80573A] text-[#FFFCF6] font-semibold">
                  Register
                </Button>
              </Link>
            </div> 
          )}
        </div>
      )}
    </nav>
  );
}