import React from 'react';
import { use } from 'react';
import Card from './Card';
const Cards = ({ Models, design, oper, port, soci, write }) => {
    const models = use(Models)


    return (
        <div className='max-w-[1200px] mx-auto mt-[120px]'>
            <div>
                <h1 className='text-center text-[#101727] font-extrabold text-[3rem]'>Premium Digital Tools</h1>
                <p className='text-[#627382] text-[1rem] mt-[16px] mb-[16px] text-center'>Choose from our curated collection of premium digital products designed<br></br> to boost your productivity and creativity.</p>
                <div className='felx items-center mx-auto border-1 border-gray-400 w-[189px] rounded-full'>
                    <button className="btn rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white">Products</button>
                    <button className="btn border-none bg-white rounded-full ">Cart <span>0</span></button>
                </div>
            </div>



            <div className='grid grid-cols-3 gap-4 mt-[40px]'>
                {
                    models.map((model) => {
                       
                    return <Card key={model.title} model={model} design={design} oper={oper} port={port}  soci={soci} write={write}></Card>
                     
                    })
                }
            </div>
        </div>
    );
};

export default Cards;