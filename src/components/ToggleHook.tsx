import React from 'react'
import { useToggle } from '../hooks/useToggle'

const ToggleHook = () => {

  const [isToggle, setisToggle, onToggle] = useToggle(false);
  
  return (
    <div>Toggle Hook
      <div>
        <h2>toggle value: {isToggle? "ON" : "OFF"}</h2>
        <button onClick={onToggle}>Toggle</button>
      </div>
    </div>
  )
}

export default ToggleHook