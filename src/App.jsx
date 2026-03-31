import './App.css'
import Nav from './Component/Nav'
import Banner from './Component/Banner'
import ClientCount from './Component/ClientCount'
import ThreeStep from './Component/ThreeStep'
import Pricing from './Component/Pricing'
import Foot from './Component/Foot'
import Cards from './Component/Cards'
import Cart from './Component/Cart'
import CardHero from './Component/CardHero'

import banner from './assets/banner.png'
import user from './assets/user.png'
import packagimg from './assets/package.png'
import rocket from './assets/rocket.png'

import design from './assets/products/design-tool.png'
import oper from './assets/products/operation.png'
import port from './assets/products/portfolio.png'
import soci from './assets/products/social-media.png'
import write from './assets/products/writing_2327400.png'
import { useState } from 'react'

const toolsModel = async () => {
  const res = await fetch("/data.json")
  return res.json()
}
const Models = toolsModel()


function App() {
 
  const [activeTab, setActiveTab] = useState("Products")
  const [carts, setCarts] = useState([])
 
  

  return (
    <>
      <Nav carts={carts}></Nav>
      <Banner banner={banner}></Banner>
      <ClientCount></ClientCount>
      <CardHero></CardHero>
     <div className='max-w-[1200px] flex justify-center mx-auto mt-[40px]'>
     <div className="tabs border-2 border-gray-400 justify-center w-[148px] rounded-full">
       
       <input type="radio" 
       name="my_tabs_1" 
       onClick={()=> setActiveTab("Products")} 
       className={`tab p-2 ${activeTab === 'Products' ? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white' : ''} tabs rounded-full`} 
       defaultChecked 
       aria-label="Products" />

       <input type="radio" 
       name="my_tabs_1" 
       onClick={()=> setActiveTab("Cart")} 
       className={`tab p-2 ${activeTab === 'Cart' ? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white' : ''} tabs rounded-full`} 
       aria-label={`Cart (${carts.length}) `} />

     </div>
     </div>

    {activeTab === "Products" && <Cards 
      Models={Models}
      design={design}
      oper={oper}
      port={port}
      soci={soci}
      write={write}
      carts={carts}
      setCarts={setCarts}
      ></Cards>}

      {activeTab === "Cart" && <Cart carts={carts}
      design={design}
      oper={oper}
      port={port}
      soci={soci}
      write={write} setCarts={setCarts}></Cart>}

      <ThreeStep 
      user={user}
      packagimg={packagimg}
      rocket={rocket}
      ></ThreeStep>

      <Pricing></Pricing>
      <Foot></Foot>

    </>
  )
}

export default App
