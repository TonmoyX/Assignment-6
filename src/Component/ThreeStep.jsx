import React from 'react';

const ThreeStep = ({user, packagimg, rocket}) => {
    return (
        <div className=" bg-[#F9FAFC]">
            <div className='max-w-[1200px] mx-auto mt-[120px] pb-[120px] mb-[120px]'>
            <div className='pt-[120px]'>
                <h1 className='text-center text-[4rem] text-[#101727] font-extrabold'>Get Started in 3 Steps</h1>
                <p className='text-center text-[#627382] text-[1rem]'>Start using premium digital tools in minutes, not hours.</p>
            </div>

            <div className='mt-[40px] grid grid-cols-3'>
                <div className='h-[380px] w-[380px] bg-white rounded-2xl px-3 pt-6'>
                    <div className='ml-[300px]'>
                    <p className='w-[40px] text-center p-2 bg-gradient-to-r  from-[#4F39F6] to-[#9514FA] rounded-[50%] text-white font-bold mt-[2px]'>01</p></div>
                    <img src = {user} className='w-[65px] mt-[28px] bg-gradient-to-r from-[#4f39f63a] to-[#9614fa34] rounded-[50%] p-[10px] mx-auto' ></img>
                    <h1 className='text-[#101727] text-center mt-[16px] font-bold text-2xl'>Create Account</h1>
                    <p className='text-[#627382] mt-[16px] text-center'>Sign up for free in seconds. No credit card required to get started.</p>

                </div>
                <div className='h-[380px] w-[380px] bg-white rounded-2xl px-3 pt-6'>
                    <div className='ml-[300px]'>
                    <p className='w-[40px] text-center p-2 bg-gradient-to-r  from-[#4F39F6] to-[#9514FA] rounded-[50%] text-white font-bold mt-[2px]'>02</p></div>
                    <img src = {packagimg} className='w-[65px] mt-[28px] bg-gradient-to-r from-[#4f39f63a] to-[#9614fa34] rounded-[50%] p-[10px] mx-auto' ></img>
                    <h1 className='text-[#101727] text-center mt-[16px] font-bold text-2xl'>Choose Products</h1>
                    <p className='text-[#627382] mt-[16px] text-center'>Browse our catalog and select the tools that fit your needs.</p>

                </div>
                <div className='h-[380px] w-[380px] bg-white rounded-2xl px-3 pt-6'>
                    <div className='ml-[300px]'>
                    <p className='w-[40px] text-center p-2 bg-gradient-to-r  from-[#4F39F6] to-[#9514FA] rounded-[50%] text-white font-bold mt-[2px]'>03</p></div>
                    <img src = {rocket} className='w-[65px] mt-[28px] bg-gradient-to-r from-[#4f39f63a] to-[#9614fa34] rounded-[50%] p-[10px] mx-auto' ></img>
                    <h1 className='text-[#101727] text-center mt-[16px] font-bold text-2xl'>Start Creating</h1>
                    <p className='text-[#627382] mt-[16px] text-center'>Download and start using your premium  tools immediately.</p>

                </div>
            </div>
            </div>
        </div>
    );
};

export default ThreeStep;