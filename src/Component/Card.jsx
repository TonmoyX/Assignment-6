import React from 'react';
import { useState } from 'react';
import {  toast } from 'react-toastify';

const Card = ({ model, design, oper, port, soci, write, carts, setCarts }) => {
    const [isBuy, setIsBuy] = useState(false)
    const handleBuy = () => {
        setIsBuy(true)

            const isFound = carts.find(item => item.title === model.title)
            if(isFound){
                toast.error("Item already in cart!");
                return;
            }

        setCarts([...carts, model])
       toast.success("Item added to cart!");
    }
    return (
      <div className="card w-96 bg-base-100 shadow-sm">
                                    <div className="card-body">
                                        <span className="badge badge-xs bg-purple-400 ml-[270px]">{model.badge}</span>
                                        <div key={model.title}>
                                            <img src = {`${model.title === 'AI Writing Pro' ? write : (model.title === 'Design Templates Pack') ? design : (model.title === 'Premium Stock Assets') ? oper : (model.title === 'Automation Toolkit') ? oper : (model.title === 'Resume Builder Pro') ? port : (model.title === 'Social Media Content Kit') ? soci : ''}`}></img>
                                        </div>
                                        <div className="justify-between">
                                            <h2 className="text-2xl font-bold">{model.title}</h2>
                                            <p className='mt-[16px] mb-[16px]'>{model.description}</p>
                                           <p className="text-xl mt-[10px] text-2xl font-bold text-[#101727]">${model.price.amount}/<span className='font-normal'>{model.price.billing}</span></p>
                                        </div>
                                        <ul className="mt-6 flex flex-col gap-2 text-xs">
                                            <li>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                                <span>{model.features[0]}</span>
                                            </li>
                                            <li>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                                <span>{model.features[1]}</span>
                                            </li>
                                            <li>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                                <span>{model.features[2]}</span>
                                            </li>
                                        
                                        </ul>
                                        <div className="mt-6">
                                            <button onClick={handleBuy} className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white w-full rounded-full">{isBuy ? "Added to cart" : "Buy Now" }</button>
                                        </div>
                                    </div>
                                </div>
    );
};

export default Card;