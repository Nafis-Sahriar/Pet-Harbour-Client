import { PawPrint, XCircle } from "lucide-react";
import React from "react";

const RequestRejected = ({ pet }) => {

    return (

        <div className="mt-6 bg-[#f9cdcd] border border-[#F5C2C7] rounded-3xl p-6 shadow-sm">


            <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#FDECEC] flex items-center justify-center">
                    <XCircle className="text-red-500" size={30} />
                </div>

                <div>
                    <h2 className="text-2xl font-bold text-[#2F2D2A]"> Request Rejected </h2>
                       <p className="text-red-500 mt-1">Unfortunately your adoption request was declined.</p>
                </div>
            </div>



            <div className="mt-6 bg-[#FFF5F5] border border-[#F5C2C7] rounded-2xl p-5">

                <p className="text-red-500 leading-relaxed">The owner has either rejected your request for{" "}
                    <span className="font-semibold">{pet?.petName}</span>. or someone else has adopted the pet.
                    You can still explore and adopt other lovely pets on Pet Harbor.
                </p>
            </div>

     

            <div className="flex flex-col md:flex-row items-center gap-2 mt-6 text-red-500">
                <PawPrint size={18} />
                <p className="font-bold "> Status: Rejected</p>
            </div>
        </div>

    );
};

export default RequestRejected;