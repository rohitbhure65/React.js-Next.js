import React from 'react'

const Header = (props) => {
    console.log(props)
  return (
    <div className='flex row justify-between p-10 bg-green-500 items-center'>
        <h2 className='text-xl'>{props.user}</h2>
        <div className='flex gap-8'>
            <h4>HOME</h4>
            <h4>ABOUT</h4>
            <h4>CONTACT</h4>
            <h4>{props.editor}</h4>
        </div>
    </div>
  )
}

export default Header
