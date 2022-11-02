import React from 'react'
import { useState } from 'react'
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs'

const images = [
  {
    url: 'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=40'
  },
  {
    url: 'https://images.unsplash.com/photo-1585504198199-20277593b94f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=40'
  },
  {
    url: 'https://images.unsplash.com/photo-1563941402830-3bae42b67b38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=40'
  },
]

const Carousel = () => {
  const [slide, setSlide] = useState(0)
  const prev = () => {
    setSlide(slide === images.length - 1 ? 0 : slide + 1)
  }
  const next = () => {
    setSlide(slide === 0 ? images.length - 1 : slide - 1)
  }

  return (
    <div className='m-6 mt-4'>
      <h1 className='text-center mb-6 font-bold text-3xl'>Moments</h1>
      <div className='flex justify-center relative'>
      <BsArrowLeftCircleFill size={60} onClick={prev} className='absolute top-[40%] text-red-400 cursor-pointer left-14'/>
      <BsArrowRightCircleFill size={60} onClick={next} className='absolute top-[40%] text-red-400 cursor-pointer right-14'/>
      {images.map((item, index) => (
        <div className={index === slide ? 'opacity-100' : 'opacity-0'}>
        {index === slide && (<img className='w-[1200px] h-[500px] rounded-lg object-cover hover:scale-105' src={item.url} alt='boardgame'/>)}
      </div>
      ))}
      </div>
    </div>
  )
}

export default Carousel