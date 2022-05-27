import React from 'react'
import { useUserInfoContext } from '../context/UserContext'
import { updateUser } from '../hooks/UserDetailsReducer'

const UserProfile = () => {

  const {userInfo: {isUserLogin}, dispatch} = useUserInfoContext()

  return (
    <div>
      {isUserLogin ? "User has logged IN" : "User is not logged in"}
      {isUserLogin && <p>HELLO VIKAS</p>}
      <button onClick={()=>{updateUser(dispatch, !isUserLogin)}}>{isUserLogin ? "LOG Out": "LOG IN"}</button>
    </div>
  )
}

export default UserProfile