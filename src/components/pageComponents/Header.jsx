import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello, <br /> <span className='text-3xl font-semibold'>Ruhith 👋 </span></h1>
        <button className='text-lg text-white font-medium bg-red-500 px-5 py-2 rounded-md'>Log Out</button>
    </div>
  )
}

export default Header