import { useState } from 'react'

let secondsElapsed = 0
let interval: number

export const App = () => {
  const [timeString, setTimeString] = useState('00:00')

  const padStart = (value: number) => {
    return String(value).padStart(2, '0')
  }

  const setTime = () => {
    const minutes = Math.floor(secondsElapsed / 60)
    const seconds = secondsElapsed % 60

    setTimeString(`${padStart(minutes)}:${padStart(seconds)}`)
  }

  const timer = () => {
    secondsElapsed++
    setTime()
  }

  const startClock = () => {
    if (interval) {
      stopClock()
    }

    interval = setInterval(timer, 1000)
  }

  const stopClock = () => {
    clearInterval(interval)
  }

  const resetClock = () => {
    stopClock()
    secondsElapsed = 0
    setTime()
  }

  return (
    <>
      <h3>Stop Watch</h3>

      <h1>{timeString}</h1>

      <button onClick={startClock}>Start</button>
      <button onClick={stopClock}>Stop</button>
      <button onClick={resetClock}>Reset</button>
    </>
  )
}
