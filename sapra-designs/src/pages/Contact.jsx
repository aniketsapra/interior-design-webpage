import React from 'react'
import { about1 } from '../assets'
import Button  from '../components/Button'
import RouterTransition from '../components/RouterTransition'

function Contact() {
  return (
    <RouterTransition>
    <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1'>
      <div >
        <img src={about1}   
        className='object-fill h-full w-full'  
        />
      </div>
      <div>
        <h1 className='flex mt-5 text-2xl font-playfair justify-center font-semibold'>Contact Us</h1>

        <form class="w-full max-w-lg ml-11 my-5">
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-name">
          Full Name
          </label>
          <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-name" type="text" placeholder="Please enter your full name" />
          </div> 
        </div>

  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-email">
        E-mail
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="email" placeholder="Please enter your e-mail" />
    </div>
  </div>

  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-message">Your message</label>
      <textarea class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-message" rows='4' placeholder="Write your thoughts here..."></textarea>
    </div>
  </div>
  <Button 
    label='Send Message'
  />
  </form>
      </div>
    </div>
    </RouterTransition>
  )
}

export default Contact
