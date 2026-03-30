import './App.css'
import Nav from './Component/Nav'
import Banner from './Component/Banner'
import ClientCount from './Component/ClientCount'
import ThreeStep from './Component/ThreeStep'

import banner from './assets/banner.png'
import user from './assets/user.png'
import packagimg from './assets/package.png'
import rocket from './assets/rocket.png'
function App() {
  return (
    <>
      <Nav></Nav>
      <Banner banner={banner}></Banner>
      <ClientCount></ClientCount>

      <ThreeStep 
      user={user}
      packagimg={packagimg}
      rocket={rocket}
      ></ThreeStep>
    </>
  )
}

export default App
