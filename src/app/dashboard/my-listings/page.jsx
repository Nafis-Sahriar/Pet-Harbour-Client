'use client'
import { authClient } from '@/lib/auth-client';
import React from 'react';
// Ei page e user er ekta dashboard overview dekhabe+ ki ki pet list koreche oita dekhabne
// tw ekhane ekta find api thakbe, jeta adoption request collection theke data fetch korbe, 
// + oi data er moddhe userid match kore ene dekhiye dibo. 

const MyListingsPage = () => {

    // first of all, amake user ke pete hobe, server action use korbo.
    const { data: session, isPending } = authClient.useSession();

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

    // console.log(user.id);



    









    return (
        <div>
            
        </div>
    );
};

export default MyListingsPage;