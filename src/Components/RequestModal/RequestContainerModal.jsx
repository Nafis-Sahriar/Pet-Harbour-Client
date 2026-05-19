

import { Inbox } from "lucide-react";
import { Button, Modal,} from "@heroui/react";
import RequestCardForModal from "./RequestCardForModal";

export async function RequestContainerModal ({ pet }) {

    const id = pet?._id;

    const result = await fetch(`http://localhost:5000/requestsOfPet/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    const requestData = await result.json();
    // console.log(requestData);

  return (

    <Modal>
      <Button className="bg-[#F4E7D3] hover:bg-[#E8D1B1] text-[#2F2D2A] rounded-2xl font-semibold">
        <Inbox size={18} />
        Requests
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="center">
          <Modal.Dialog className="sm:max-w-2xl rounded-3xl overflow-hidden">
            <Modal.CloseTrigger />
            <Modal.Header className="bg-[#FFFCF6] border-b border-[#E8D1B1]">
              <Modal.Icon className="bg-[#F4E7D3] text-[#80573A]">
                <Inbox className="size-5" />
              </Modal.Icon>

                            <div><Modal.Heading className="text-2xl font-black text-[#2F2D2A]"> Adoption Requests</Modal.Heading>
                            <p className="text-sm text-[#80573A] mt-1">   Manage all requests for this pet  </p>
                            
                              </div>
            </Modal.Header>
            <Modal.Body className="bg-[#FFFCF6] p-6 space-y-4 max-h-125 overflow-y-auto">

                        {
                            requestData.length > 0 ? (
                                requestData.map((request) => (
                                    <RequestCardForModal key={request._id} request={request} />
                                ))
                            ) : (
                                <div className="flex flex-col items-center justify-center gap-3 py-10">
                                    <Inbox size={48} className="text-[#E8D1B1]" />
                                    <p className="text-sm text-[#80573A]">No adoption requests found for this pet.</p>
                                </div>
                            )
                        }
                        
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>

    </Modal>

  );
}