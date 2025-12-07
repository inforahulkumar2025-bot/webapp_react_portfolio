import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {CarComponent} from './component/CarComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      My app-Rahul
      <CarComponent></CarComponent>
    </>
  )
}

export default App
