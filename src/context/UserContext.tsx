import React, { createContext, Dispatch, FC, useContext, useMemo, useReducer } from 'react'
import { IActionType, initialUserState, IUserState, userStateReducer } from '../hooks/UserDetailsReducer'

interface IUserContext {
  userInfo: IUserState;
  dispatch: Dispatch<IActionType>;
}

const initialContextValue:IUserContext = {
  userInfo: {
    users: [],
  },
  dispatch: ()=>null
}

const UserInfoContext = createContext(initialContextValue);

export const useUserInfoContext = ():IUserContext => useContext(UserInfoContext);

interface IProps {
  children: React.ReactNode;
}

const UserContext:FC<IProps> = ({children}) => {

  const [userInfo, dispatch] = useReducer(userStateReducer, initialUserState);

  const store = useMemo(() => ({userInfo, dispatch}), [userInfo])
  
  return (
    <UserInfoContext.Provider value={store}>
      {children}
    </UserInfoContext.Provider>
  )
}

export default UserContext