import { CheckCircle2, PawPrint } from "lucide-react";
import React from "react";

const RequestSubmitted = ({ pet }) => {

    return (

        <div className="mt-6 bg-[#FFFCF6] border border-[#B7E4C7] rounded-3xl p-6 shadow-sm">

            <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#D8F3DC] flex items-center justify-center">
                    <CheckCircle2 className="text-green-600" size={30} />
                </div>

                <div>

                    <h2 className="text-2xl font-bold text-[#2F2D2A]">Request Submitted</h2>
                    <p className="text-[#40916C] mt-1">Your adoption request has been sent successfully.</p>

                </div>

            </div>

            <div className="mt-6 bg-[#F1FAEE] border border-[#D8F3DC] rounded-2xl p-5">

                <p className="text-[#40916C] leading-relaxed"> The owner of 
                    <span className="font-semibold">{pet?.petName}</span> will review your request soon. Please wait for approval.
                </p>

            </div>

        

            <div className="flex items-center gap-2 mt-6 text-[#40916C]">
                <PawPrint size={18} />
                <p className="font-bold">Status: Pending Review</p>
            </div>
        </div>

    );
};

export default RequestSubmitted;