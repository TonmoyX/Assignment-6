import React from 'react';

const WorkFlow = () => {
    return (
        <div className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA]'>
            <div className='md:max-w-[1200px] md:mx-auto py-[120px]'>
                <h1 className='text-white text-center text-[1.5rem] md:text-[2.4rem] font-extrabold'>Ready to Transform Your Workflow?</h1>
                <p className='text-white mt-[16px] text-[1rem] text-center'>Join thousands of professionals who are already using Digitools to work smarter.<br></br>Start your free trial today.</p>
                <div className='flex gap-4 justify-center mt-[30px] '>
                    <button className='btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold py-2 px-4 rounded-full '>Explore Products</button>
                    <button className='btn bg-transparent text-white font-bold py-2 px-4 rounded-full border border-gray  '>View Pricing</button>
                </div>
                <p className='text-white mt-[16px] text-[1rem] text-center'>14-day free trial • No credit card required • Cancel anytime</p>
            </div>
            
        </div>
    );
};

export default WorkFlow;