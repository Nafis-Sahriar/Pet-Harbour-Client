"use client";
import { authClient } from "@/lib/auth-client";
import { TrashBin } from "@gravity-ui/icons";
import {AlertDialog, Button} from "@heroui/react";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";
// jwt verified.

export function DeleteRequest({request}) 
{   

    const id = request?._id;

    

    const deleteRequest = async () => {
     // console.log(id);
         const {data:tokenData}  = await authClient.token();
          const token = tokenData?.token;
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/deleteRequest/${id}`, {
            method: "DELETE",
            headers:{
                "Content-Type": "application/json",
                authorization: `Bearer ${token}`
            }
        });

        if(res.ok) 
            {
                
            toast.success("Request deleted successfully");
            redirect("/dashboard/my-request");
            
        } 
        else 
        {
            toast.error("Failed to delete request. Please try again.");
        }
    }
  return (
    <AlertDialog>
      <Button 
      variant="danger" className="w-full">Delete Request<TrashBin/> </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete <strong className="text-red-600 italic">{request?.petName} Adoption Request</strong> permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete the request to adopt <strong>{request?.petName}</strong>  and can not be undone, Are you sure that you want to delete your request?
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button slot="close" variant="danger" onClick={deleteRequest}>
                Delete Request
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );

}