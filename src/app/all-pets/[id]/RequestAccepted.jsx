import { CheckCheck, PawPrint } from "lucide-react";
import React from "react";

const RequestAccepted = ({ pet }) => {

    return (

        <div className="mt-6 bg-[#FFFCF6] border border-[#95D5B2] rounded-3xl p-6 shadow-sm">
            <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#D8F3DC] flex items-center justify-center">
                    <CheckCheck className="text-green-600" size={30} />
                </div>

                <div>
                    <h2 className="text-2xl font-bold text-[#2F2D2A]">Request Accepted</h2>
                    <p className="text-[#40916C] mt-1"> Congratulations! Your request has been approved.</p>
                </div>
            </div>

            <div className="mt-6 bg-[#F1FAEE] border border-[#D8F3DC] rounded-2xl p-5">

                <p className="text-[#40916C] leading-relaxed">
                    The owner has accepted your adoption request for 
                    <span className="font-semibold">{pet?.petName}</span>.
                    You may now contact the owner and continue the adoption process.
                </p>

            </div>


            <div className="flex items-center gap-2 mt-6 text-[#40916C]">
                <PawPrint size={18} />
                <p className="font-medium">Status: Accepted</p>
            </div>
        </div>

    );
};

export default RequestAccepted;