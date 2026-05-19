"use client";

import React from "react";

import { Button, Chip } from "@heroui/react";

const RequestCardForModal = ({request}) => {

    if(!request){
        return <div>Something went wrong....</div>
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

      <div className="flex items-center gap-3 mt-6">


        <Button size="sm" className="flex-1 bg-green-600 hover:bg-green-700 text-white rounded-2xl font-semibold">
          Accept
        </Button>

        <Button size="sm" className="flex-1 bg-red-100 hover:bg-red-200 text-red-600 rounded-2xl font-semibold">
          Reject
        </Button>



      </div>
    </div>
  );
};

export default RequestCardForModal;
