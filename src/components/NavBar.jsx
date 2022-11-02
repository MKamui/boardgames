import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='flex justify-between bg-black items-center'>
      <div className='m-4'>
        <h1 className='text-white font-bold text-3xl tracking-wider'>Board Game Collection</h1>
      </div>
      <div>
        <Link to='/'><img src='https://cdn-icons-png.flaticon.com/512/1587/1587077.png' alt='Icon' className='w-20 h-20'/></Link>
      </div>
      <div className='m-4 space-x-4'>
        <Link to='/easy'><button>Easy Games</button></Link>
        <Link to='/medium'><button>Medium Games</button></Link>
        <Link to='/hard'><button>Hard Games</button></Link>
      </div>
    </div>
  )
}

export default NavBar