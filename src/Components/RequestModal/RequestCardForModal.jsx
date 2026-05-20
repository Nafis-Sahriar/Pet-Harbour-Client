"use client";

import React, { useState } from "react";

import { Button, Chip } from "@heroui/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

const RequestCardForModal = ({request}) => {

    const router = useRouter();
    
    const [loading,setLoading] = useState(false);

    if(!request){
        return <div>Something went wrong....</div>
    }

    const reqId = request?._id;
    const petId = request?.petId;

    // console.log("Request ID:", reqId);
    // console.log("Pet ID:", petId);

    

    const handleAccept = async() =>{



        try{
             setLoading(true);

             const {data:tokenData}  = await authClient.token();
             const token = tokenData?.token;

            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/acceptRequest/${reqId}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${token}`
                },
                body: JSON.stringify({
                    petId: petId
                }),
            });
            // const data = await res.json();
            // console.log(data);

            if(res.ok)
            {
                toast.success("Request accepted successfully!");
                router.refresh();
            }
        }
        catch(error){
            toast.error("Failed to Update Request.Please Try again.");
        }
        finally{
            setLoading(false);
        }
    }

    const handleReject = async() =>{


       
        try{
                setLoading(true);

                const {data:tokenData}  = await authClient.token();
                const token = tokenData?.token;
                const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/rejectRequest/${reqId}`,{
                    method:"PATCH",
                    headers:{
                        "Content-Type": "application/json",
                        authorization: `Bearer ${token}`,
                    }           
                })
                const data = await res.json();
                console.log(data);

                if(res.ok)
                {
                    toast.success("Request rejected successfully!");
                    router.refresh();
                }

        }
        catch(error){
            toast.error("Failed to Update Request.Please Try again.");
        }
        finally{
            setLoading(false);
        }
    }

  return (

    <div className="bg-white border border-[#E8D1B1] rounded-3xl p-5">

      <div className="flex items-start justify-between gap-4">

        <div>
          <h1 className="text-xl font-bold text-[#2F2D2A]">{request?.requesterName}</h1>
          <p className="text-sm text-[#80573A] mt-1">{request?.requesterEmail}</p>
          <p className="text-sm text-[#80573A] mt-1">{request?.phone}</p>
        </div>

        <Chip className="bg-yellow-100 text-yellow-700 border border-yellow-200 font-semibold">
          {request?.requestStatus}
        </Chip>
      </div>


      <div className="mt-5 space-y-2 text-sm text-[#6A5D52]">

        <p> Request Date:<span className="font-semibold ml-2">{request?.createdAt?.split('T')[0]}</span></p>

        <p> Adoption Date:<span className="font-semibold ml-2">{request?.pickupDate?.split('T')[0]}</span></p>
        <p> Message:<span className="font-semibold ml-2 italic">{request?.message}</span></p>


      </div>

      <div className="mt-6">


        {
            request?.requestStatus==="pending"?
            (
                <div className="flex items-center gap-3 mt-6">
                    <Button size="sm" isDisabled={loading} className="flex-1 bg-green-600 hover:bg-green-700 text-white rounded-2xl font-semibold" onClick={handleAccept}>
                      {loading? "Processing...":"Accept"}
                    </Button>
                    <Button size="sm" isDisabled={loading} className="flex-1 bg-red-100 hover:bg-red-200 text-red-600 rounded-2xl font-semibold" onClick={handleReject}>
                      {loading? "Processing...":"Reject"}
                    </Button>
                </div>

            ):request?.requestStatus === "accepted"?(
                <div className="mt-6">
                    <div className="bg-green-100 text-green-700 rounded-2xl p-3 text-center font-semibold">
                        Request Accepted
                    </div>
                </div>
            ):    (
                <div className="mt-6">
                    <div className="bg-red-100 text-red-600 rounded-2xl p-3 text-center font-semibold">
                        Request Rejected
                    </div>
                </div>

            )
            }



      </div>
    </div>
  );
};

export default RequestCardForModal;
