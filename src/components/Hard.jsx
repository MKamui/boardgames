import React from 'react'
import NavBar from './NavBar'
import games from './games'

const Hard = () => {
  return (
    <div>
      <NavBar/>
      <div>
        <h1 className='text-center mt-4 font-bold text-3xl'>Hard Games</h1>
        <div className='m-6 grid grid-cols-6 gap-4 text-center'>
        {games.map((item) => (item.Difficulty === 'Hard' && (
        <div>
          <img src={item.URL} alt={item.Name} className='w-[250px] h-[400px] rounded-lg mb-4 hover:scale-105 inline-block'/>
          <h2 className='text-lg font-bold'>{item.Name}</h2>
          <h3>{item.Designer}</h3>
          <h3>{item.Difficulty}</h3>
        </div>)
        ))}
        </div>
      </div>
    </div>
  )
}

export default Hard