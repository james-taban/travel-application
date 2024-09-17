import { useState } from "react"

export default function ProgressBar({ timer }) {
  const [remainingTime, setRemainingTime] = useState(timer)

  useEffect(() => {
    const counter = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 10)
    }, 10)

    return () => {
      clearInterval(counter)
    }
  }, [])

  return <progress value={remainingTime} max={timer} />
}
