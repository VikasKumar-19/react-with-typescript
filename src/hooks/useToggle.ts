import { useState } from "react"

export const useToggle = (initialValue: boolean):[boolean, React.Dispatch<React.SetStateAction<boolean>>, ()=>void]=>{
  const [isToggle, setisToggle] = useState(initialValue || false);
  const onToggle = ()=>{
    setisToggle(!isToggle)
  }

  return [isToggle, setisToggle, onToggle]
}