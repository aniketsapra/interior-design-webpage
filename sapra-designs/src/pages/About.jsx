import React from 'react'
import { about2 } from '../assets'
import RouterTransition from '../components/RouterTransition'

function About() {
  return (
    <RouterTransition>
    <section>
    <div className='font-playfair ml-10 p-10 flex flex-1 justify-evenly items-center max-lg:flex-col'>
      <div className='flex'>
      <img 
        src={about2}
        className='border-solid border-8 border-tclmagenta'
        width={1600}
        height={1900}
      />      
      </div>

      <div className='flex flex-col px-10 justify-start'>
        <h2 className='text-4xl flex flex-row justify-center font-bold italic'>
          About
        </h2>
        <p className='text-xl'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
    </section>
    </RouterTransition>
  )
}

export default About
