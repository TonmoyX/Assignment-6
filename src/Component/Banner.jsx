import React from 'react';

const Banner = ({banner}) => {
    return (
        <div className="max-w-[1200px] mx-auto">
            <div className=' md:flex mt-[85px] items-center'>
                <div>
                <div className='bg-[#E1E7FF] max-w-[294px] rounded-2xl text-center'>
                    <h1 className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-[1rem] font-medium text-transparent bg-clip-text "><span><i className="fa-solid fa-circle"></i></span> New: AI-Powered Tools Available</h1>
                </div>
                <h1 className='text-[2rem] md:text-[5rem] font-extrabold'>Supercharge Your Digital Workflow</h1>
                <p className='mt-[16px] text-[1rem] text-[#627382]'>Access premium AI tools, design assets, templates, and productivity<br></br> software—all in one place. Start creating faster today. Explore Products</p>
                <div className='mt-[32px] space-x-2'>
                    <button className='btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white'>Explore Products</button> 
                    <button className='btn rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-transparent bg-clip-text'><i className="fa-solid fa-play"></i> Watch Demo</button> 
                </div>
                </div>
                
                <div>
                        <img src = {banner} className='mt-[10px] w-[300px] flex mx-auto  md:h-[590px] md:w-[800px]'></img>
                </div>
            </div>
        </div>
    );
};

export default Banner;