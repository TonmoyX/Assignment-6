import React from 'react';

const ClientCount = () => {
    return (
        <div className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] mt-[85px]'>
             <div className='grid grid-cols-3 ml-[200px] py-[40px]'>
                <div>
                    <h1 className='text-[3.8rem] font-extrabold text-white'>200+</h1>
                    <p className='text-[1.4rem] font-medium mt-[12px] text-white'>Premium Tools</p>
                </div>
                <div>
                    <h1 className='text-[3.8rem] font-extrabold text-white'>4.9</h1>
                    <p className='text-[1.4rem] font-medium mt-[12px] text-white'>Rating</p>
                </div>
                <div>
                    <h1 className='text-[3.8rem] font-extrabold text-white'>50K+</h1>
                    <p className='text-[1.4rem] font-medium mt-[12px] text-white'>Active Users</p>
                </div>
             </div>
        </div>
    );
};

export default ClientCount;