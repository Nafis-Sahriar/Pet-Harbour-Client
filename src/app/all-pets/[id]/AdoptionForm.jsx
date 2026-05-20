"use client";

import React from "react";
import {Button,FieldError,Input,Label,TextArea,TextField,} from "@heroui/react";
import {Heart,PawPrint,} from "lucide-react";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
import { redirect, useRouter } from "next/navigation";

// jwt verified.
const AdoptionForm = ({ pet }) => {
  const router = useRouter();

  const { data: session } = authClient.useSession();
  const currentUser = session?.user;


  const handleAdoptionRequest = async (e) => {

    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const adoptionData = Object.fromEntries(formData.entries());

    const finalAdoptionData = {

      ...adoptionData,

      petId: pet?._id,
      petName: pet?.petName,
      petImage: pet?.imageUrl,

      ownerId: pet?.ownerId,
      ownerName: pet?.ownerName,
      ownerEmail: pet?.ownerEmail,

      requesterId: currentUser?.id,
      requesterName: currentUser?.name,
      requesterEmail: currentUser?.email,

      requestStatus: "pending",

      createdAt: new Date(),
    };

    const {data:tokenData}  = await authClient.token();
    const token = tokenData?.token;

    const res = await fetch("http://localhost:5000/adoptionRequest", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(finalAdoptionData),
    });

    const data = await res.json();

    if(res?.ok){  
      toast.success("Adoption Request Submitted");
      console.log(data);
      router.refresh();
    } 
    else 
    {
      toast.error(data.message || "Failed to submit adoption request");
    }
    // console.log(finalAdoptionData);
  };

  return (

    <div className="mt-12 bg-[#FFFCF6] border border-[#E8D1B1] rounded-3xl p-8 shadow-sm">

      

      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F4E7D3] border border-[#E8D1B1] mb-6">

        <div className="w-2 h-2 rounded-full bg-[#CFA77A]"></div>

        <p className="text-sm font-medium text-[#80573A]">
          Adoption Request
        </p>

      </div>

      <h2 className="text-3xl lg:text-4xl font-black text-[#2F2D2A] italic flex items-center gap-3">

        Adopt {pet?.petName}

        <Heart className="text-[#CFA77A]" />

      </h2>


      <p className="mt-5 text-lg text-[#6A5D52] leading-relaxed">
        Fill out the adoption request form below. The owner will review your request and contact you soon.
      </p>

     

      <form  className="mt-10 space-y-8"  onSubmit={handleAdoptionRequest} >

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <TextField name="petName">

            <Label className="text-[#2F2D2A]"> Pet Name </Label>
            <Input value={pet?.petName} className="rounded-2xl" readOnly />
            <FieldError />

          </TextField>

  
          <TextField name="requesterName">

            <Label className="text-[#2F2D2A]">  Your Name  </Label>
            <Input value={currentUser?.name || ""}  readOnly  className="rounded-2xl" />
            <FieldError />

          </TextField>

       

          <TextField name="requesterEmail">

            <Label className="text-[#2F2D2A]"> Your Email</Label>
            <Input value={currentUser?.email || ""} readOnly  className="rounded-2xl"/>
            <FieldError /> 
            
          </TextField>

         

          <TextField  name="pickupDate"   type="date"  isRequired   >
          
            <Label className="text-[#2F2D2A]">   Preferred Pickup Date</Label>
            <Input type="date" className="rounded-2xl"   />
            <FieldError />
            
         </TextField>
        
             
          <TextField  name="phone"  isRequired>
          
           <Label className="text-[#2F2D2A]">
              Phone Number
            </Label>
            <Input placeholder="+8801XXXXXXXXX"  className="rounded-2xl w-full" />
          <FieldError />

          </TextField>
          
              
          <TextField
            name="location"
            isRequired
          >

            <Label className="text-[#2F2D2A]">
              Your Location
            </Label>

            <Input
              placeholder="Dhaka, Bangladesh"
              
              className="rounded-2xl"
            />

            <FieldError />

          </TextField>

          <div className="md:col-span-2">

            <TextField
              name="message"
              isRequired
            >

              <Label className="text-[#2F2D2A]">
                Why do you want to adopt?
              </Label>

              <TextArea
                placeholder={`Tell the owner why you would be a great match for ${pet?.petName}...`}
                className="rounded-3xl"
              />

              <FieldError />

            </TextField>

          </div>

        </div>

        {/* BUTTON */}

        <Button
          type="submit"
          className="rounded-2xl bg-[#CFA77A] hover:bg-[#b98c5c] text-white px-10 py-7 font-bold text-lg"
        >

          Submit Adoption Request

          <PawPrint size={18} />

        </Button>

      </form>

    </div>

  );
};

export default AdoptionForm;
            
           

          
         

         

       

       

       

        
