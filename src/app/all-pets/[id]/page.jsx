import React from 'react';
import PetInfo from './PetInfo';
import AdoptionForm from './AdoptionForm';
import CanNotAdopt from './CanNotAdopt';
import RequestAccepted from './RequestAccepted';
import RequestRejected from './RequestRejected';
import RequestSubmitted from './RequestSubmitted';

import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import AdoptedPage from './Adopted';
import AdoptedForOwner from './AdoptedForOwner';

const PetDetailsPage = async ({ params }) => {

    const { id } = await params;

    const session = await auth.api.getSession({
        headers: await headers()
    });

    const user = session?.user;

    const res = await fetch(`http://localhost:5000/allPets/${id}`);
    const pet = await res.json();


    const requestResponse = await fetch(`http://localhost:5000/adoptionRequest/check?petId=${id}&requesterId=${user?.id}`);
    const adoptionRequest = await requestResponse.json();

    const isOwner=user?.id===pet?.ownerId;

    return (

        <div className='w-[90%] mx-auto px-4 py-8'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>

    

                <PetInfo pet={pet} />

                {/* nested condition apply korte hobe. First of all, dekha lagbe pet wer adoption status, jodi adopted hoy, tahole
                 then tar vitore dekhte hobe owner ke, jodi thik hoy, tahole owner er adoption component dekhabo.  */}

                {
                    pet?.adoptionStatus === "adopted" ? (

                        isOwner ? <AdoptedForOwner pet={pet} /> : <AdoptedPage pet={pet} />

                    ) : // ebar ekahne ashbe jodi satus adopted na hoy.
                    
                    isOwner ? (
                        <CanNotAdopt pet={pet} />
                    ) : 
                    adoptionRequest?.requestStatus === "pending" ? (
                        <RequestSubmitted pet={pet} />

                    ) :adoptionRequest?.requestStatus === "accepted" ? (

                        <RequestAccepted pet={pet} />
                    ) : 
                    adoptionRequest?.requestStatus === "rejected" ? (
                        <RequestRejected pet={pet} />

                    ) 
                    :(
                        // last e ektaw true na hole, form dekhabo.
                        <AdoptionForm pet={pet} />
                    )
                }

            </div>

        </div>

    );
};

export default PetDetailsPage;