"use client"
import {React,useState} from 'react'

function page() {
  const [username, setUsername] = useState("")
  return (
    <>
    <h1 className="text-2xl">Enter your name {username}</h1>
    <form action="">
      <input type="text"
      className='border-2 px-4 py-2 text-xl'
      value={username}
      onChange={(e)=>{
        // console.log(e.target.value)
        setUsername(e.target.value)
        console.log(username)
        }} />
    </form>
    </>
  )
}

export default page
