import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import {  CheckCircle2,  Clock3,PawPrint,  XCircle} from 'lucide-react';
import React from 'react';
import { RequestTable } from '@/Components/RequestTable';
import { Table } from '@heroui/react';

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

    const totalRequests = requests.length;
    const pendingRequests = requests.filter(request =>request.requestStatus==="pending").length;
    const approvedRequests = requests.filter(request=>request.requestStatus==="accepted").length;
    const rejectedRequests = requests.filter(request => request.requestStatus ==="rejected" ).length;

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

                <h2 className='text-2xl font-bold text-[#2F2D2A]'>
                    Request List and Status
                </h2>

                <div>
                    <Table>
      <Table.ScrollContainer>
        <Table.Content aria-label="Team members" className="min-w-[600px]">
          <Table.Header>
            <Table.Column isRowHeader>Name</Table.Column>
            <Table.Column>Role</Table.Column>
            <Table.Column>Status</Table.Column>
            <Table.Column>Email</Table.Column>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Kate Moore</Table.Cell>
              <Table.Cell>CEO</Table.Cell>
              <Table.Cell>Active</Table.Cell>
              <Table.Cell>kate@acme.com</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>John Smith</Table.Cell>
              <Table.Cell>CTO</Table.Cell>
              <Table.Cell>Active</Table.Cell>
              <Table.Cell>john@acme.com</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Sara Johnson</Table.Cell>
              <Table.Cell>CMO</Table.Cell>
              <Table.Cell>On Leave</Table.Cell>
              <Table.Cell>sara@acme.com</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Michael Brown</Table.Cell>
              <Table.Cell>CFO</Table.Cell>
              <Table.Cell>Active</Table.Cell>
              <Table.Cell>michael@acme.com</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>
    </Table>
                </div>

            



            </div>

        </div>

    );
};

export default MyRequestPage;