import React, { useEffect, useState } from "react"

export const useLocalStorage = <T>(key: string, initialValue?: T):[T | undefined, React.Dispatch<React.SetStateAction<T|undefined>>, ()=>void]=>{    //T is generic type

  const [state, setState] = useState<T | undefined>(()=>{
    try{
      const value = localStorage.getItem(key);
      return JSON.parse(value || '')
    }
    catch{
      return initialValue;
    }
  })

  useEffect(() => {
      try{
        localStorage.setItem(key, JSON.stringify(state));
      }
      catch{
        
      }
  }, [state])

  const remove = ()=>{
    try{
      localStorage.removeItem(key);
      setState(undefined);
    }
    catch{

    }
  }

  return [state, setState, remove]
  
}