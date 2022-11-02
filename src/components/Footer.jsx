import React from 'react'
import {AiFillInstagram, AiFillFacebook} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='flex justify-between m-6 border-t-2 border-black'>
      <div className='flex space-x-2 mt-2'>
        <h1 className='font-bold'>Follow Us</h1>
        <AiFillFacebook size={25} className='cursor-pointer hover:scale-105'/>
        <AiFillInstagram size={25} className='cursor-pointer hover:scale-105'/>
      </div>
      <div className='mt-2 text-center font-bold'>
        <h1>Board Game Collection</h1>
        <h1>2022</h1>
      </div>
      <div className='mt-2'>
        <button>Contac Us</button>
      </div>
    </div>
  )
}

export default Footer