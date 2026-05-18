import DashBoardSideBar from "@/Components/DashBoardSideBar";

const DashboardLayout = ({ children }) => {
  return (

    <div className="min-h-screen bg-[#FFFCF6]">

      
      <DashBoardSideBar />

      
      <main className="ml-65 p-6">
        {children}
      </main>

    </div>

  );
};

export default DashboardLayout;