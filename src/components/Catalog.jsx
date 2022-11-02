import React from 'react'
import games from './games'

const Catalog = () => {
  return (
    <div>
      <h1 className='text-center mt-4 font-bold text-3xl'>All the Games</h1>
      <div className='m-6 text-center grid grid-cols-6 gap-4'>
        {games.map((item) => (
          <div>
          <img src={item.URL} 
          alt={item.Name} className='w-[250px] h-[400px] rounded-lg mb-4 hover:scale-105 inline-block cursor-pointer'/>
          <h2 className='text-lg font-bold'>{item.Name}</h2>
          <h3>{item.Designer}</h3>
          <h3>{item.Difficulty}</h3>
        </div>
        ))}
      </div>
    </div>
  )
}

export default Catalog