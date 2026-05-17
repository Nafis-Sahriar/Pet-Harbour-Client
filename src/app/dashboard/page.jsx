import { redirect } from 'next/navigation';
import React from 'react';

const DashBoardPage = () => {
   redirect("/dashboard/my-listings");
};
export default DashBoardPage;