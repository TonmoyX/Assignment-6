import React from 'react';

const Foot = () => {
    return (
        <div className='bg-[#101727]'>
            <div className='max-w-[1200px] mx-auto'>
            <div className='grid grid-cols-3 justify-around pt-[120px] border-b-2 border-gray-600 pb-[120px]'>
                <div>
                    <h1 className='text-white font-extrabold text-4xl'>DigiTools</h1>
                    <p className='text-white mt-[16px]'>Premium digital tools for creators,<br></br> professionals, and businesses. Work smarter<br></br> with our suite of powerful tools.</p>
                </div>
                <div className='grid grid-cols-3'>
                    <div className='space-y-2'>
                        <h1 className='text-white text-xl'>Product</h1>
                        <h5 className='text-white'>Features</h5>
                        <h5 className='text-white'>Pricing</h5>
                        <h5 className='text-white'>Templates</h5>
                        <h5 className='text-white'>Integrations</h5>
                    </div>
                    <div className='space-y-2'>
                        <h1 className='text-white text-xl'>Company</h1>
                        <h5 className='text-white'>About</h5>
                        <h5 className='text-white'>Blog</h5>
                        <h5 className='text-white'>Careers</h5>
                        <h5 className='text-white'>Press</h5>
                    </div>
                    <div className='space-y-2'>
                        <h1 className='text-white text-xl'>Resources</h1>
                        <h5 className='text-white'>Documentation</h5>
                        <h5 className='text-white'>Help Center</h5>
                        <h5 className='text-white'>Community</h5>
                        <h5 className='text-white'>Contact</h5>
                    </div>
                </div>

                <div>
                    <h1 className='text-white text-xl text-center'>Social links</h1>
                    <div className='flex gap-5 mt-[10px] ml-[150px] text-white text-2xl'>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-x-twitter"></i>
                    </div>
                </div>
            </div>
            <div className='flex justify-between mt-[30px] pb-[30px]'>
                <h1 className='text-white'>© 2026 Digitools. All rights reserved.</h1>
                <div className='flex justify-between space-x-4'>
                    <p className='text-white '>Privacy Policy</p>
                    <p className='text-white '>Terms of Service </p>
                    <p className='text-white '>Cookies</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Foot;