import OwnerReqCard from '@/Components/OwnerReqCard/OwnerReqCard';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const AllRequestPage =async () => {

    
        const session = await auth.api.getSession({
            headers: await headers()
        });
    
        const user = session?.user;
    
        const id = user?.id;
    
        const {token} = await auth.api.getToken({
            headers: await headers()
        });


        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/requestsOfOwner/${id}`,
            {
                headers:{
                    Authorization: `Bearer ${token}`
                }
            }
        );
        const requests = await res.json();


        // sort the requests by request.status so that pending requests come first. 

        requests?.sort((a,b) => {
            if(a.requestStatus === "pending" && b.requestStatus !== "pending"){
                return -1;
            }
            else if(a.requestStatus !== "pending" && b.requestStatus === "pending"){
                return 1;
            }
            else{
                return 0;
            }
        });

        // console.log(requests.length);


    return (
        <div>
            <h1 className='text-4xl font-bold text-center mt-10 italic'>All Requests</h1>



            <div className='mt-10 space-y-6 max-w-5xl mx-auto'>

                {
                    requests?.length > 0 ? (
                        requests?.map(request => <OwnerReqCard key={request._id} request={request} />)
                    ) : (
                        <p className='text-center text-gray-500'>No requests found.</p>
                    )
                }





            </div>



        </div>
    );
};

export default AllRequestPage;