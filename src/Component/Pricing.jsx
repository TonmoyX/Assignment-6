import React from 'react';

const Pricing = () => {
    return (
        <div className='max-w-[1200px] mx-auto mb-[100px]'>
           <div>
            <h1 className='text-center text-[#101727] text-[3rem] font-extrabold'>Simple, Transparent Pricing</h1>
            <p className='text-center text-[#627382]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
           </div>
           <div className='mt-[40px] grid grid-cols-3 gap-6'>
            <div className='bg-[#F9FAFC] p-8 rounded-2xl'>
            <h1 className='text-[#101727] text-[1.2rem] font-bold'>Starter</h1>
            <p className='text-[#627382] mt-[8px]'>Perfect for getting started</p>

            <h1 className='text-[#101727] text-[2.2rem] font-bold mt-[24px]'>$0<span className='text-[#627382] text-[1rem]'>/Month</span></h1>
            <div className='space-y-2.5'>
                <p><i className="fa-solid fa-check"></i> Access to 10 free tools</p>
                <p><i className="fa-solid fa-check"></i> Basic templates</p>
                <p><i className="fa-solid fa-check"></i> Community support</p>
                <p><i className="fa-solid fa-check"></i> 1 project per month</p>
            </div>

            <button className='btn w-full mt-[80px] bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full'>Get Started Free</button>
            </div>
             
            <div className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] p-8 rounded-2xl'>
                <h2 className='bg-[#FEF3C6] text-[#BB4D00] p-2 w-[130px] text-center mt-[-50px] ml-[100px] rounded-full animate-bounce'>Most popular</h2>
            <h1 className='text-white text-[1.2rem] font-bold mt-[10px]'>Pro</h1>
            <p className='text-white mt-[8px]'>Best for professionals</p>

            <h1 className='text-white text-[2.2rem] font-bold mt-[24px]'>$29<span className='text-white text-[1rem]'>/Month</span></h1>
            <div className='space-y-2.5'>
                <p className='text-white'><i className="fa-solid fa-check"></i> Access to all premium tools</p>
                <p className='text-white'><i className="fa-solid fa-check"></i> Unlimited templates</p>
                <p className='text-white'><i className="fa-solid fa-check"></i> Priority support</p>
                <p className='text-white'><i className="fa-solid fa-check"></i> Unlimited projects</p>
                <p className='text-white'><i className="fa-solid fa-check"></i>Cloud sync</p>
                <p className='text-white'><i className="fa-solid fa-check"></i> Advanced analytics</p>
            </div>
                <div className='bg-white mt-[10px] rounded-full'>
            <button className='btn w-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-transparent bg-clip-text rounded-full'>Get Start Pro Trial</button></div>
            </div>
            <div className='bg-[#F9FAFC] p-8 rounded-2xl'>
            <h1 className='text-[#101727] text-[1.2rem] font-bold'>Enterprise</h1>
            <p className='text-[#627382] mt-[8px]'>For teams and businesses</p>

            <h1 className='text-[#101727] text-[2.2rem] font-bold mt-[24px]'>$99<span className='text-[#627382] text-[1rem]'>/Month</span></h1>
            <div className='space-y-2.5'>
                <p><i className="fa-solid fa-check"></i> Everything in Pro</p>
                <p><i className="fa-solid fa-check"></i> Team collaboration</p>
                <p><i className="fa-solid fa-check"></i> Custom integrations</p>
                <p><i className="fa-solid fa-check"></i> Dedicated support</p>
                <p><i className="fa-solid fa-check"></i> SLA guarantee</p>
                <p><i className="fa-solid fa-check"></i> Custom branding</p>
            </div>

            <button className='btn mt-[10px] w-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full'>Get Contact Sales</button>
            </div>

           </div>
        </div>
    );
};

export default Pricing;