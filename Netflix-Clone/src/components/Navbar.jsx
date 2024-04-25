import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='absolute w-full p-4 flex items-center justify-between z-50'>
      <Link to='/'>
        <h1 className='uppercase text-red-600 font-nsans-bold cursor-pointer text-5xl'>netflix</h1>
      </Link>

      <div>
        <Link to='/login'>
          <button className='capitalize pr-4'>Login</button>
        </Link>
        
        <Link to='/signup'>
          <button className='bg-red-600 rounded py-2 px-6 capitalize'>Sign up</button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar