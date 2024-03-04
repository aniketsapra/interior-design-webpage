import React from 'react'
import { home } from '../assets'
import { Link } from 'react-router-dom'
import RouterTransition from '../components/RouterTransition'
import Button from '../components/Button'

function Home() {
  return (
    <RouterTransition>
    <div className='font-playfair ml-10 p-10 flex flex-1 justify-evenly items-center max-lg:flex-col'>
      <div>
      
      <div className=' text-2xl font-semibold md:text-3xl lg:text-4xl '>Welcome To</div>
      <div className='text-3xl font-bold md:text-4xl lg:text-6xl'>Sapra <span className='text-tclmagenta'>Designs.</span>
      </div>
     
      <p className='mt-4 text-xl font-bold lg:text-3xl md:text-2xl mb-4'>
      Crafting Spaces, Creating Dreams</p>
      
      <div>
      <Link to="/portfolio">
        <Button label='Check Portfolio'>Click</Button>
      </Link>
      </div>

      </div>
      
      <div className='flex justify-end mt-6 mr-7'>
        <img src={home} 
          alt='homescreen'
          className='border-solid border-4 border-tclmagenta'
        />
      </div>
     
    </div>
    </RouterTransition>
  )
}

export default Home

