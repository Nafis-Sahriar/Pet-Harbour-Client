import { Button } from '@heroui/react';
import React from 'react';

const RequestCardForModal = () => {
    return (
        <div>
            

            <div>
                <h1 className="text-lg font-bold">Nafis Sahriar</h1>
                <p className="text-sm text-gray-600">Email: nafis.sahriar@example.com</p>
                <p className="text-sm text-gray-600">Phone: 01618965833</p>
                <p className="text-sm text-gray-600">Message: I am interested in adopting this pet. Please let me know the next steps.</p>
                <div className="flex gap-2 mt-4">
                    <Button className="px-4 py-2 bg-green-500 text-white rounded">Accept</Button>
                    <Button className="px-4 py-2 bg-red-500 text-white rounded">Reject</Button>
                </div>
            </div>
        </div>
    );
};

export default RequestCardForModal;