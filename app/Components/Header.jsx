"use client"
import {React,useEffect} from 'react'
import Link from 'next/link'

const Header = (props, color) => {
    // console.log(props)

  // Case 1: Run on every render 
  useEffect(() => {
    alert("Hey I will run on every render")
  })

  // Case 2: Run only on first render 
  useEffect(() => {
    alert("Hey welcome to my page. This is the first render")
  }, [])

  // Case 3: Run only when certain values change
  useEffect(() => {
    alert("Hey I am running because color was changed")
  }, [color])

  // Example of Cleanup function
  useEffect(() => {
    alert("Hey welcome to my page. This is the first render of app.jsx")

    return () => {
      alert("component was unmounted")
    }
  }, [])

  return (
    <div className='flex row justify-between py-4 px-20 bg-red-500 items-center'>
        <h2 className='text-2xl bg-red-500 text-white font-extrabold'>{props.user}</h2>
        <div className='flex gap-8 bg-red-500'>
              <Link className='bg-red-500 text-white font-bold' href="/">HOME</Link>
              <Link className='bg-red-500 text-white font-bold' href="/About">ABOUT</Link>
              <Link className='bg-red-500 text-white font-bold' href="/Contact">CONTACT</Link>
              <Link className='bg-red-500 text-white font-bold' href="/">{props.editor}</Link>
        </div>
    </div>
  )
}

export default Header
