import { Spinner } from '@heroui/react';
import Image from 'next/image';

const Loading = () => {
    return (
        <div className='min-h-screen flex items-center justify-center bg-[#FFFCF6]'>

            <div className='flex flex-col items-center gap-3'>


                <Spinner size='xl' color='warning' />

                <div className='text-[#80573A] font-semibold flex flex-col items-center justify-center gap-10'>
                   
                    <p>Loading Pets!! Please wait a second?</p>
                    <p>Thank you for your patience.</p>
                    <Image src={'/logo.png'} height={100} width={100} alt='logo' loading="eager"></Image>
                </div>
            </div>
        </div>
    );
};

export default Loading;