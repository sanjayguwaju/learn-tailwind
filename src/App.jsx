import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Herosection from './components/heroSection/hero-section'
import Ctasection from './components/heroSection/cta-section'
import Featuresection from './components/heroSection/feature-section'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Herosection />
    <Featuresection/>
    <Ctasection/>
    </>
  )
}

export default App
