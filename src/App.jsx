import './App.css'
import Nav from './Component/Nav'
import Banner from './Component/Banner'
import ClientCount from './Component/ClientCount'
import ThreeStep from './Component/ThreeStep'
import Pricing from './Component/Pricing'
import Foot from './Component/Foot'
import Cards from './Component/Cards'

import banner from './assets/banner.png'
import user from './assets/user.png'
import packagimg from './assets/package.png'
import rocket from './assets/rocket.png'

import design from './assets/products/design-tool.png'
import oper from './assets/products/operation.png'
import port from './assets/products/portfolio.png'
import soci from './assets/products/social-media.png'
import write from './assets/products/writing_2327400.png'

const toolsModel = async () => {
  const res = await fetch("/data.json")
  return res.json()
}
const Models = toolsModel()


function App() {
  return (
    <>
      <Nav></Nav>
      <Banner banner={banner}></Banner>
      <ClientCount></ClientCount>

      <Cards Models={Models}
      design={design}
      oper={oper}
      port={port}
      soci={soci}
      write={write}
      ></Cards>

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
