import React, { useContext } from 'react'
import { LearnContext } from './LearnCreateContextHook'

const LearnUseContextHook = () => {
  const {name, rollNo} = useContext(LearnContext);
  
  return (
    <div>
      <h3>Learn Use Context hook</h3>
      <p>User Details :</p>
      <p>user name: {name} User Roll No: {rollNo} </p>
    </div>
  )
}

export default LearnUseContextHook