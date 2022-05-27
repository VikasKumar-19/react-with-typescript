import React, { useEffect, useMemo } from 'react'
import { useUserInfoContext } from '../context/UserContext'
import { fetchUserDetails } from '../hooks/UserDetailsReducer'

const NewsFeeds = () => {

  const {userInfo, dispatch} = useUserInfoContext()

  useEffect(() => {
    fetchUserDetails(dispatch)
  }, [])
  
  const users = useMemo(() => userInfo.users, [userInfo.users])

  console.log(users);
  
  return (
    <div>
      <h2>News Feeds</h2>
      {users.map((data)=>{
        return <div key={data.id}>{data.first_name} {data.last_name}</div>
      })}
    </div>
  )
}

export default NewsFeeds;