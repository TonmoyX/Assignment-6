import React from 'react';
import {toast} from 'react-toastify';
const Cart = ({design, oper, port, soci, write, carts, setCarts}) => {

    const handleCartRemove = () =>{
        setCarts([])
        toast.error("Cart is empty now!");
    }
    const handleRemoveItem = (item) => {
        const deleteItem = carts.filter(items => items.title !== item.title)
        setCarts(deleteItem)
        toast.error("Item removed from cart!");
    }

    return (
       <div className='max-w-[1200px] mx-auto'>

        {
        carts.length === 0 ?<div> 
            <h1 className='text-[#101727] text-[3rem] text-center font-bold mt-[30px]'>Your Cart is Empty</h1>
            <p className='text-[#101727] text-[1.2rem] text-center font-bold'>Please add some items to your cart.</p> 
        </div>:
        <div>
        <h1 className='text-[#101727] text-[1.2rem] font-bold'>Your Item</h1>
        {
        carts.map(item =>  
            <div key={item.title} className='flex items-center space-x-6 mt-[30px] bg-gray-200 p-4 rounded-2xl'>
            <div>
            <img src = {`${item.title === 'AI Writing Pro' ? write : (item.title === 'Design Templates Pack') ? design : (item.title === 'Premium Stock Assets') ? oper : (item.title === 'Automation Toolkit') ? oper : (item.title === 'Resume Builder Pro') ? port : (item.title === 'Social Media Content Kit') ? soci : ''}`}></img>
            </div>
            <div className='flex justify-between items-center w-[1200px]'>
                <div>
                    <h1 className='text-[#101727] font-semibold'>{item.title}</h1>
                    <h1 className='text-[#627382] font-medium text-[1rem]'>${item.price.amount}</h1>
                </div>
               <button onClick={()=> handleRemoveItem(item)}   className='btn rounded-full text-red-600 font-bold'>Remove</button>
            </div>
            </div>   
        )}
         <div className='flex justify-between mt-[20px]'>
            <h1 className='text-[#101727] font-bold text-[1.2rem]'>Total:</h1>
             <p className='mr-[10px] font-bold'>${carts.reduce((sum, item) => sum + item.price.amount, 0).toFixed(2)}</p>
        </div>
        <button onClick={handleCartRemove} className='btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold mt-[]20px] rounded-full w-full'>Proceed to Checkout</button>
        </div>}
        


        </div>
    );
};

export default Cart;