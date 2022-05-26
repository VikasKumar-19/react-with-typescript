import React, { Children, createContext, FC, useState } from 'react'

interface IUserDetailContext{
  name: string,
  rollNo: number
}

const initialContextValue:IUserDetailContext = {
  name: '',
  rollNo: 0
}

export const LearnContext = createContext<IUserDetailContext>(initialContextValue);

const initialUser = {
  name: "Vikas",
  rollNo: 47
}

interface IProps {
  children: React.ReactNode
}

const LearnCreateContextHook:FC<IProps> = ({children}) => {

  const [userInfo, setuserInfo] = useState(initialUser)

  return (
    <LearnContext.Provider value={userInfo}>
      {children}
    </LearnContext.Provider>
  )
}

export default LearnCreateContextHook