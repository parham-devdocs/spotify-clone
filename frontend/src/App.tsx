import { useState } from 'react'
import {Button} from "./components/ui/button"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p className=' text-red-400 mt-28'>
        hello
      </p>
      <Button >Hello</Button>
      
    </>
  )
}

export default App
