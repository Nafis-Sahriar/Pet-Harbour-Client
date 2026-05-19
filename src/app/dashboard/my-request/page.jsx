import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import {  CheckCircle2,  Clock3,PawPrint,  XCircle} from 'lucide-react';
import React from 'react';
import { Button, Table } from '@heroui/react';
import { DeleteRequest } from '@/Components/RequestDeleteAlert/DeleteRequest';
import Link from 'next/link';

const MyRequestPage = async () => {

    const session = await auth.api.getSession({
        headers: await headers()
    });

    const user = session?.user;



    const res = await fetch(
        `http://localhost:5000/myRequests/${user?.id}`,
        {
            cache: "no-store"
        }
    );
    const requests = await res.json();

    const totalRequests = requests?.length;
    const pendingRequests = requests?.filter(request =>request.requestStatus==="pending").length;
    const approvedRequests = requests?.filter(request=>request.requestStatus==="accepted").length;
    const rejectedRequests = requests?.filter(request => request.requestStatus ==="rejected" ).length;

    return (

        <div className='space-y-10'>

            <div>
                <h1 className='text-4xl font-black text-[#2F2D2A]'>Request Overview</h1>
                <p className='text-[#80573A] mt-3 text-lg'>Track and manage all your pet adoption requests.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6'>
                <div className='bg-[#FFFCF6] border border-[#E8D1B1] rounded-3xl p-6 shadow-sm'>
                    <div className='flex items-center justify-between'>
                        <div>
                            <p className='text-[#80573A] font-medium'> Total Requests</p>
                            <h1 className='text-5xl font-black text-[#2F2D2A] mt-3'>{totalRequests} </h1>
                        </div>
                        <div className='w-16 h-16 rounded-2xl bg-[#F4E7D3] flex items-center justify-center'>
                            <PawPrint className='text-[#CFA77A]' size={30}/>
                        </div>
                    </div>

                </div>

                <div className='bg-[#FFFCF6] border border-yellow-200 rounded-3xl p-6 shadow-sm'>
                    <div className='flex items-center justify-between'>
                        <div>
                            <p className='text-yellow-600 font-medium'>Pending</p>
                            <h1 className='text-5xl font-black text-[#2F2D2A] mt-3'> {pendingRequests}</h1>
                        </div>

                        <div className='w-16 h-16 rounded-2xl bg-yellow-100 flex items-center justify-center'>
                            <Clock3  className='text-yellow-500' size={30} />
                        </div>

                    </div>

                </div>

         

                <div className='bg-[#FFFCF6] border border-green-200 rounded-3xl p-6 shadow-sm'>

                    <div className='flex items-center justify-between'>
                        <div>
                            <p className='text-green-600 font-medium'>Approved</p>
                            <h1 className='text-5xl font-black text-[#2F2D2A] mt-3'>{approvedRequests} </h1>
                        </div>
                        <div className='w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center'>
                            <CheckCircle2 className='text-green-600' size={30} />
                        </div>
                    </div>
                </div>

                <div className='bg-[#FFFCF6] border border-red-200 rounded-3xl p-6 shadow-sm'>
                    <div className='flex items-center justify-between'>
                        <div>
                            <p className='text-red-500 font-medium'> Rejected  </p>
                            <h1 className='text-5xl font-black text-[#2F2D2A] mt-3'>{rejectedRequests} </h1>
                        </div>

                        <div className='w-16 h-16 rounded-2xl bg-red-100 flex items-center justify-center'>
                            <XCircle className='text-red-500' size={30} />
                        </div>

                    </div>

                </div>

            </div>


            <div className='bg-[#FFFCF6] border border-[#E8D1B1] rounded-3xl p-10'>

                {
                    requests.length === 0 ? 
                    (
                        <div className='flex flex-col items-center gap-4 py-20'>
                            
                            <PawPrint className='text-[#CFA77A]' size={50} />

                            <h2 className='text-2xl font-bold text-[#2F2D2A]'>No Requests Found</h2>

                            <p className='text-[#80573A]'>You have not made any adoption requests yet.</p>
                            <p className='text-[#80573A] text-sm'>Lets have some pets?</p>

                            <Link href="/all-pets">

                                <Button className='bg-[#CFA77A] hover:bg-[#b98c5c] text-white rounded-2xl px-8 py-5 font-bold flex items-center gap-3 shadow-sm'>
                                   
                                    Explore Pets

                                </Button>
                            </Link>

                        </div>
                    ): 
                    <div>
                     <h2 className='text-2xl font-bold text-[#2F2D2A] mb-10 italic'>
                    Request List and Status
                </h2>

                <div>
                    <Table className='bg-[#E8D1B1]'>
                        <Table.ScrollContainer>
                            <Table.Content aria-label="Team members" >
                            <Table.Header className="bg-[#E8D1B1] text-[#2F2D2A]">
                                <Table.Column isRowHeader className="bg-[#E8D1B1] text-[#2F2D2A] font-bold">
                                    PetName
                                </Table.Column>
                                <Table.Column className="bg-[#E8D1B1] font-bold text-[#2F2D2A]">
                                    Request Date
                                </Table.Column>
                                <Table.Column className="bg-[#E8D1B1] font-bold text-[#2F2D2A]">
                                    Status
                                </Table.Column>
                                <Table.Column className="bg-[#E8D1B1] font-bold text-[#2F2D2A]">
                                    Pickup Date
                                </Table.Column>
                                <Table.Column className="bg-[#E8D1B1] font-bold text-[#2F2D2A] flex justify-center">
                                    Actions
                                </Table.Column>
                            </Table.Header>
                            <Table.Body>


                  {
                     requests.map((request) => (

                            <Table.Row key={request._id} className='hover:bg-[#f6f4f0]'>

                                <Table.Cell className='font-bold italic text-[#2F2D2A]'>
                                    {request.petName}
                                </Table.Cell>

                                <Table.Cell>
                                    {request.createdAt.split("T")[0]}
                                </Table.Cell>

                                <Table.Cell>
                                    {request.requestStatus}
                                </Table.Cell>

                                <Table.Cell>
                                    {request.pickupDate}
                                </Table.Cell>

                                <Table.Cell className='flex flex-col md:flex-row md:justify-center gap-4'>

                                 <Link href={`/all-pets/${request.petId}`}>
                                    <Button
                                        size="sm"
                                        variant="bordered"
                                        className="border-[#E8D1B1] text-[#2F2D2A] font-semibold bg-[#F4E7D3] hover:bg-[#E8D1B1] rounded-2xl w-full md:w-auto"
                                    >
                                        View
                                    </Button>
                                    </Link>

                                    <div>
                                        <DeleteRequest request={request} />
                                    </div>

                                    

                                </Table.Cell>

                            </Table.Row>

                                    ))
                                }

                                </Table.Body>
                            </Table.Content>
                        </Table.ScrollContainer>
                        </Table>
                </div>
         </div>
                }

               

               

            



            </div>

        </div>

    );
};

export default MyRequestPage;