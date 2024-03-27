import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import HeroPage from './component/HeroPage'
import SkillBox from './component/SkillBox'
import Footer from './component/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <HeroPage />
      <SkillBox />
      <Footer />
    </>
  )
}

export default App
