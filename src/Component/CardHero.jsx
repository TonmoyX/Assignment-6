import React from 'react';

const CardHero = () => {
    return (
        <div className='max-w-[1200px] mx-auto mt-[120px]'>
            <div>
                <h1 className='text-center text-[#101727] font-extrabold text-[3rem]'>Premium Digital Tools</h1>
                <p className='text-[#627382] text-[1rem] mt-[16px] mb-[16px] text-center'>Choose from our curated collection of premium digital products designed<br></br> to boost your productivity and creativity.</p>
               {/* name of each tab group should be unique */}
            </div>
        </div>
    );
};

export default CardHero;