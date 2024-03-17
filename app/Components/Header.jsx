import React from 'react'
import Link from 'next/link'

const Header = (props) => {
    // console.log(props)
  return (
    <div className='flex row justify-between p-10 bg-red-500 items-center'>
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
