"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

import DashBoardSideBar from "@/Components/DashBoardSideBar";

const DashboardLayout = ({ children }) => {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className="min-h-screen bg-[#FFFCF6]">
      <div className="lg:hidden flex items-center justify-between p-4 border-b border-[#E8D1B1] bg-[#FFFCF6] sticky top-0 z-40">
        <button
          onClick={() => setOpenSidebar(true)}
          className="p-2 rounded-xl hover:bg-[#F4E7D3] transition"
        >
          <Menu className="w-7 h-7 text-[#2F2D2A]" />
        </button>

        <h1 className="text-xl font-bold text-[#2F2D2A]">Dashboard</h1>
      </div>

      <div
        className={`
          fixed lg:fixed
          top-0 left-0
          z-50
          h-screen
          w-65

          transform transition-transform duration-300

          ${
            openSidebar ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          }
        `}
      >
        <div className="lg:hidden absolute top-4 right-4 z-50">
          <button
            onClick={() => setOpenSidebar(false)}
            className="p-2 rounded-xl bg-white shadow"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <DashBoardSideBar />
      </div>

      {openSidebar && (
        <div
          onClick={() => setOpenSidebar(false)}
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
        ></div>
      )}

      <main className="lg:ml-65 p-4 lg:p-6">{children}</main>
    </div>
  );
};

export default DashboardLayout;
