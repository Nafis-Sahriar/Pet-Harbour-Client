"use client";
import { TrashBin } from "@gravity-ui/icons";
import {AlertDialog, Button} from "@heroui/react";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";


export function DeleteAlert({pet}) 
{   

    const id = pet?._id;

    const deletePet = async () => {

        const res = await fetch(`http://localhost:5000/deletePet/${id}`, {
            method: "DELETE",
            headers:{
                "Content-Type": "application/json",
            }
        });

        if(res.ok) {
            toast.success("Pet deleted successfully");
            redirect("/dashboard/my-listings");
            
        } else {
            toast.error("Failed to delete pet. Please try again.");
        }
    }
  return (
    <AlertDialog>
      <Button variant="danger" className="w-full">Delete Pet<TrashBin/> </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete <strong className="text-red-600 italic">{pet?.petName}</strong> permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{pet?.petName}</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button slot="close" variant="danger" onClick={deletePet}>
                Delete Pet
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );

}