"use client";
import { authClient } from "@/lib/auth-client";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const RegisterPage = () => { 

 
   const [password, setPassword] = useState("");

   const onSubmit = async (e) => {

      e.preventDefault();

      const formData = new FormData(e.target);
      const userData = Object.fromEntries(formData.entries());
         
      // console.log("Sign Up Data:", userData);

      const {data, error} = await authClient.signUp.email({
        email: userData.email,
        password: userData.password,
        name: userData.name,
        image: userData.imageUrl
      });

      if (error) 
      {
        
        toast.error("Error signing up: " + error.message);
      } 
      else 
      {
        
        toast.success("Account created successfully! Please log in.");
        // console.log(data);
        redirect("/");
      }
    }




  return (
    <div className="flex flex-col mb-10 md:flex-row justify-center gap-5 items-center bg-[#614c22] w-[90%] md:w-[60%] mx-auto mt-10 rounded-2xl border border-[#2F2D2A]/20 shadow-xl overflow-hidden">
      
     {/* Left side of my registration section */}
      <div className="text-white space-y-5 bg-[#F4E7D3] p-10 w-full md:w-[40%] self-stretch flex flex-col justify-center">
        <div className="flex gap-2 items-center">
         <Image src={'/logo.png'} alt="Logo" width={150} height={150} />
        </div>

        <p className="text-[#2F2D2A] italic">
         Join Pet Harbor and help pets find a loving home. Create your account to adopt pets, post adoption listings, and become part of a caring pet community.
        </p>
      </div>

  
      <div className="bg-white rounded-lg py-10 px-10 w-full md:w-[60%]">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-[#2F2D2A] italic">
            Create Account
          </h1>

          <p className="text-gray-500 mt-2">
            Please fill in the details to create your account
          </p>
        </div>

        <Form className="flex w-full flex-col gap-4 mx-auto" onSubmit={onSubmit}>
          
      
          <TextField
            isRequired
            name="name"
            type="text"
            
          >
            <Label className="text-[#2F2D2A] font-semibold mb-2">
              Name
            </Label>

            <Input
              placeholder="John Doe"
              className="text-black"
            />

            <FieldError />
          </TextField>


        

          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }
            return null;
        }}

            
          >
            <Label className="text-[#2F2D2A] font-semibold mb-2">
              Email
            </Label>

            <Input
              placeholder="yourname@example.com"
              className="text-black"
            />

            <FieldError />
          </TextField>

            <TextField
           
            name="imageUrl"
            type="text"
          >
            <Label className="text-[#2F2D2A] font-semibold mb-2">
              Image URL
            </Label>

            <Input
              placeholder="https://example.com/image.jpg"
              className="text-black"
            />

            <FieldError />
          </TextField>

        
         <TextField
        isRequired
        name="password"
        type="password"
        validate={(value) => {

          if (value.length < 6) {
            return "Password must be at least 6 characters";
          }

          if (!/[A-Z]/.test(value)) {
            return "Password must contain at least one uppercase letter";
          }
          if (!/[a-z]/.test(value)) {
            return "Password must contain at least one lowercase letter";
          }

          

          return null;
        }}
      >
        <Label>Password</Label>

        <Input
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <FieldError />
      </TextField>


      <TextField
        isRequired
        name="confirmPassword"
        type="password"
        validate={(value) => {

          if (value !== password) {
            return "Passwords do not match";
          }
          
          return null;
        }}
      >
        <Label>Confirm Password</Label>

        <Input placeholder="Confirm your password" />

        <FieldError />
      </TextField>

         
          <div className="flex gap-2 my-4">
            <Button
              type="submit"
              className="bg-[#57452b] hover:bg-[#2F2D2A] text-white font-bold w-full rounded-xl transition-all duration-300"
            >
              Sign Up
            </Button>
          </div>

          <hr className="border-[#2F2D2A]/20" />

       
          <div>
            <p className="text-center text-[#2F2D2A]">
              Or continue with
            </p>

            <div className="flex gap-4 justify-center mt-4">
              <Button
                variant="bordered"
                className="text-[#2F2D2A] border-[#2F2D2A]/40 hover:bg-[#2F2D2A]/10 bg-[#f1e5d4]"
            
              >
                Google <FcGoogle className="ml-2" />
              </Button>

             
            </div>


            <p className="text-center mt-5 text-[#2F2D2A]">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-[#2F2D2A] font-semibold hover:underline italic"
              >
                Log In
              </Link>
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default RegisterPage;