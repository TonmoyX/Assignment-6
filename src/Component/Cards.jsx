import React from 'react';
import { use, } from 'react';
import Card from './Card';
const Cards = ({ Models, design, oper, port, soci, write, carts, setCarts }) => {
    const models = use(Models)

    return (
        <div className='max-w-[1200px] mx-auto mt-[20px]'>
            <div className='grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-4 '>
                {
                    models.map((model) => {
                       
                    return <Card key={model.title} model={model} design={design} oper={oper} port={port}  soci={soci} write={write} carts={carts} setCarts={setCarts}></Card>
                     
                    })
                }
            </div>
        </div>
    );
};

export default Cards;