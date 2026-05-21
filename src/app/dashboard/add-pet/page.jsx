"use client";
import { authClient } from "@/lib/auth-client";
import { Button, FieldError, Input, Label, ListBox, TextArea, TextField, Select } from "@heroui/react";
import { PawPrint } from "lucide-react";
import { redirect } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

// jwt verified.

const AddPetPage = () => {

    const {data:session, isPending} = authClient.useSession();

    if (isPending) 
    {
        return <div>Loading...</div>;
    }
    
    const userData = session?.user;
    
    const user = {
        id: userData?.id,
        name: userData?.name,
        email: userData?.email
    };

    // console.log(user)

    



    const onSubmit = async (e) => {

        e.preventDefault();
        if (!user.id) {
            toast.error("User not authenticated. Please log in to add a pet.");
            return;
        }

   

        const formData = new FormData(e.currentTarget);
        const petData = Object.fromEntries(formData.entries());

    
        const finalPetData = {
            ...petData,
            age: Number(petData.age),
            adoptionFee: Number(petData.adoptionFee),
            ownerId: user.id,
            ownerName: user.name,
            ownerEmail: user.email,
            adoptionStatus: "available",
            createdAt: new Date(),
        };

        // console.log(finalPetData);

     const {data:tokenData} = await authClient.token();
     const token = tokenData?.token;
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/addPet`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`
        },
        body: JSON.stringify(finalPetData),
        });

        const data = await res.json();

        if (res.ok) {
            toast.success("Pet added successfully!");
            redirect("/dashboard/my-listings");
        } else {
            toast.error(`Failed to add pet: ${data.message || "Unknown error"}`);
        }

     

    // console.log(data);
    };

        
  return (

    <div className="w-full">

      <div className="bg-[url('/addpetbg.png')] bg-no-repeat bg-cover bg-left bg-[#FFFCF6] border border-[#E8D1B1] rounded-3xl p-20 shadow-sm">

            <div className="flex lg:justify-end">

   
                <div className="max-w-2xl">

            
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F4E7D3] border border-[#E8D1B1] mb-6">
                    <div className="w-2 h-2 rounded-full bg-[#CFA77A]"></div>
                    <p className="text-sm font-medium text-[#80573A]">  List Your Pets!</p>
                </div>

               
                <h1 className="text-xl lg:text-3xl flex items-center gap-2 font-black text-[#2F2D2A]  italic">
                    Add a New Pet <PawPrint className="text-[#552f10]"></PawPrint>
                </h1>
                <p className="mt-5 text-lg text-[#6A5D52]">
                    Fill in your pets information and create a new adoption listing.Provide accurate details, health information, and a clear description
                    to help adopters find the perfect companion.
                </p>
                </div>

            </div>

         </div>

      <div>
        {/* ekhane form dibo */}
        <form className="p-10 space-y-8" onSubmit={onSubmit}>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">


            <TextField name="petName" isRequired>
            <Label className="text-[#2F2D2A]">Pet Name</Label>

            <Input
                placeholder="Buddy"
                className="rounded-2xl"
            />

            <FieldError />
            </TextField>

        
        <div>
            <Select name="species" isRequired  placeholder="Select Species"  className="w-full">
                <Label>Species</Label>
                <Select.Trigger className="rounded-2xl">
                <Select.Value />
                <Select.Indicator />
                </Select.Trigger>
                    <Select.Popover>
                    <ListBox>

                        <ListBox.Item id="Dog" textValue="Dog">
                        Dog
                        <ListBox.ItemIndicator />
                        </ListBox.Item>

                        <ListBox.Item id="Cat" textValue="Cat">
                        Cat
                        <ListBox.ItemIndicator />
                        </ListBox.Item>

                        <ListBox.Item id="Bird" textValue="Bird">
                        Bird
                        <ListBox.ItemIndicator />
                        </ListBox.Item>

                        <ListBox.Item id="Rabbit" textValue="Rabbit">
                        Rabbit
                        <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="Fish" textValue="Fish">
                        Fish
                        <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="Hamster" textValue="Hamster">
                        Hamster
                        <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="Guinea Pig" textValue="Guinea Pig">
                        Guinea Pig
                        <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="Turtle" textValue="Turtle">
                        Turtle
                        <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="Lizard" textValue="Lizard">
                        Lizard
                        <ListBox.ItemIndicator />
                        </ListBox.Item>


                    </ListBox>

                </Select.Popover>

      </Select>

    </div>


    <TextField name="breed" isRequired>
      <Label>Breed</Label>

      <Input
        placeholder="Golden Retriever"
        className="rounded-2xl"
      />

      <FieldError />
    </TextField>

   
    <TextField name="age" type="number" isRequired>
      <Label>Age</Label>
      <Input  type="number" placeholder="2" className="rounded-2xl"/>
      <FieldError />
    </TextField>


    <div>
      <Select  name="gender" isRequired placeholder="Select Gender" className="w-full" >
        <Label>Gender</Label>

        <Select.Trigger className="rounded-2xl">
          <Select.Value />
          <Select.Indicator />
        </Select.Trigger>

        <Select.Popover>

          <ListBox>

            <ListBox.Item id="Male" textValue="Male">
              Male
              <ListBox.ItemIndicator />
            </ListBox.Item>

            <ListBox.Item id="Female" textValue="Female">
              Female
              <ListBox.ItemIndicator />
            </ListBox.Item>

          </ListBox>
        </Select.Popover>
      </Select>

    </div>


    <div className="md:col-span-2">

      <TextField name="imageUrl" isRequired>
        <Label>Image URL</Label>
        <Input type="url" placeholder="https://example.com/pet.jpg" className="rounded-2xl"/>
        <FieldError />
      </TextField>

    </div>


    <TextField name="healthStatus" isRequired>
      <Label>Health Status</Label>
     <Input placeholder="Healthy" className="rounded-2xl" />
      <FieldError />
    </TextField>

  
    <div>

      <Select name="vaccinationStatus"  isRequired  placeholder="Vaccination Status"  className="w-full" >
        <Label>Vaccination Status</Label>

        <Select.Trigger className="rounded-2xl">
          <Select.Value />
          <Select.Indicator />
        </Select.Trigger>

        <Select.Popover>
          <ListBox>
            <ListBox.Item  id="Vaccinated"  textValue="Vaccinated">    
                Vaccinated
              <ListBox.ItemIndicator />
            </ListBox.Item>

            <ListBox.Item  id="Not Vaccinated"   textValue="Not Vaccinated" >
              Not Vaccinated
              <ListBox.ItemIndicator />
            </ListBox.Item>
          </ListBox>
        </Select.Popover>
      </Select>
    </div>

   
    <TextField name="location" isRequired>

        <Label>Location</Label>

        <Input  placeholder="Dhaka"  className="rounded-2xl"  />
      <FieldError />
    </TextField>

  
    <TextField name="adoptionFee" type="number" isRequired>

        <Label>Adoption Fee</Label>

        <Input type="number"  placeholder="5000" className="rounded-2xl"/>
      <FieldError />
    </TextField>


    <TextField name="ownerEmail" isRequired>

            <Label>Owner Email</Label>

            <Input value={`${user.email}`} className="rounded-2xl" readOnly />
        <FieldError />
     </TextField>

   
            <div className="md:col-span-2">

            <TextField name="description" isRequired>

                <Label>Description</Label>

                <TextArea placeholder="Describe the pet..." className="rounded-3xl"  />
                <FieldError />
            </TextField>

            </div>

        </div>


        <Button type="submit" className="rounded-2xl bg-[#CFA77A] text-white px-10 py-6 font-semibold">
            Add Pet
        </Button>

        </form>
      </div>

    </div>

  );
};

export default AddPetPage;