
import DashBoardSideBar from "@/Components/DashBoardSideBar";


const DashboardLayout = ({ children }) => {
  return (

    <div className="min-h-screen bg-[#FFFCF6]">

      

      <div className="flex">
        
        <DashBoardSideBar></DashBoardSideBar>

        <div className="flex-1 p-6">
          {children}
        </div>

      </div>

    </div>

  );
};

export default DashboardLayout;