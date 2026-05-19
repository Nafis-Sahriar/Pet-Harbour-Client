"use client";

import { authClient } from "@/lib/auth-client";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const LogInPage = () => {
  

  const onSubmit = async (e) =>
    {
          e.preventDefault();

          const formData = new FormData(e.target);
          const userData = Object.fromEntries(formData.entries());

          const {data, error} = await authClient.signIn.email({
            email: userData.email,
            password: userData.password
          });

          if (error) {
           
            toast.error("Error signing in: " + error.message);
          } else {
            // console.log("Sign In Success:", data);
            toast.success("Logged in successfully!");
            redirect("/");
          }
  } 

     const handleGoogleSignIn = async()=>{
       
      const data = await authClient.signIn.social({
        provider: "google",
      })

      if(data)
      {
        toast.success("Signed in with Google successfully!");
       
      }
      else
      {
        toast.error("Failed to sign in with Google. Please try again.");
      }
     }




  return (
    <div className="flex flex-col md:flex-row justify-center gap-5 items-center bg-[#614c22] w-[90%] md:w-[50%] mx-auto mt-20 rounded-2xl border border-[#2F2D2A]/20 shadow-xl overflow-hidden mb-20">
      
      
 
  <div className="text-white space-y-5 bg-[#F4E7D3] p-10 w-full md:w-[40%] self-stretch flex flex-col justify-center">
    
    <div className="flex gap-2 items-center">
      <Image
        src="/logo.png"
        alt="Logo"
        width={150}
        height={150}
        className="rounded-full"
      />
    </div>

    <p className="text-[#2F2D2A] italic">
     Please log in to your account to manage your pets and connect with other pet lovers. We are excited to have you back!
    </p>

  </div>

    

  <div className="bg-white rounded-lg py-20 px-10 w-full md:w-[60%]">
        
    <div className="mb-10 space-y-3">
      <h1 className="text-3xl font-bold text-[#2F2D2A] italic">
        Welcome Back
      </h1>

      <p className="text-gray-500">
        Please login to your account
      </p>
    </div>

    <Form className="flex w-full flex-col gap-4 mx-auto" onSubmit={onSubmit}>
          
     
      <TextField
        isRequired
        name="email"
        type="email"
      >
        <Label className="text-[#2F2D2A] font-semibold mb-2">
          Email
        </Label>

        <Input
          placeholder="john@example.com"
          className="text-black"
        />

        <FieldError />
      </TextField>

       
      <TextField
        isRequired
        minLength={8}
        name="password"
        type="password"
      >
        <Label className="text-[#2F2D2A] font-semibold mb-2">
          Password
        </Label>

        <Input
          placeholder="Enter your password"
          className="text-black"
        />

        <Description className="text-gray-500">
          Must be at least 8 characters with 1 uppercase and 1 number
        </Description>

        <FieldError />
      </TextField>

      <div className="flex gap-2 my-5">
        <Button
          type="submit"
          className="bg-[#57452b] hover:bg-[#2F2D2A] text-white font-bold w-full rounded-xl transition-all duration-300"
        >
          Log In
        </Button>
      </div>

      <hr className="border-[#2F2D2A]/20" />

        
      <div>
        <p className="text-center text-[#2F2D2A]">
          Or continue with
        </p>

        <div className="flex gap-4 justify-center mt-4">
          <Button
              onClick={handleGoogleSignIn}
            variant="bordered"
            className="text-[#2F2D2A] border-[#2F2D2A]/40 hover:bg-[#2F2D2A]/10 bg-[#f1e5d4]"
          >
            Google <FcGoogle className="ml-2" />
          </Button>
        </div>

          
        <p className="text-center mt-5 text-[#2F2D2A]">
          Do not have an account?{" "}
          <Link
            href="/register"
            className="text-[#2F2D2A] font-semibold hover:underline italic"
          >
            Register
          </Link>
        </p>
      </div>




    </Form>
  </div>

</div>
  );
};

export default LogInPage;