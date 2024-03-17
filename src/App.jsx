import { useEffect, useState } from 'react'
import './App.module.css'

function App() {
  const [seconds, setSeconds] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    let intervalId = null
    if (isRunning) {
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1)
      }, 1000)
    }

    return () => {
      clearInterval(intervalId)
    }
  }, [isRunning])

  const handleButtonClick = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning)
  }

  return (
    <>
      <button onClick={handleButtonClick}>
        {isRunning ? 'Stop' : 'Start'}
      </button>
      <button>{seconds}</button>
    </>
  )
}

export default App
