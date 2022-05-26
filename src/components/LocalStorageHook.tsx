import React, { useEffect } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

const LocalstorageHook = () => {
  const [state, setState, remove] = useLocalStorage<string>("userName", "user");

  return (
    <div>
      <h1>CustomHook</h1>
      <div>
        localstorage value : {state || "not assigned"}
      </div>
      <div>
        <button onClick={()=>{setState("vikas")}}>Update Value</button>
      </div>
      <div>
        <button onClick={()=>{remove()}}>Remove value</button>
      </div>
    </div>
  
  )
}

export default LocalstorageHook;