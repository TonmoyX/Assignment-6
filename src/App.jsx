import './App.css'
import Nav from './Component/Nav'
import Banner from './Component/Banner'
import banner from './assets/banner.png'
import ClientCount from './Component/ClientCount'


function App() {
  return (
    <>
      <Nav></Nav>
      <Banner banner={banner}></Banner>
      <ClientCount></ClientCount>
    </>
  )
}

export default App
