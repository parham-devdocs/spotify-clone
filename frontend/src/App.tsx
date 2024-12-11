import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p className=' text-red-400 mt-28'>
        hello
      </p>
      <div className=' w-28 h-10 bg-red-100 mx-auto'></div>
    </>
  )
}

export default App
