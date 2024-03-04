import React from 'react'
import { logo } from '../assets'
// import { Link } from 'react-router-dom'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import FacebookIcon from '@mui/icons-material/Facebook'


function Footer() {
  return (
    <footer className='font-playfair bg-black'>
      <div className='bg-footer-texture bg-opacity-75 flex flex-col md:flex-row text-gray-400 justify-between p-8'>
        <div>
          <div>
            <img 
              src={logo}
              width={75}
              height={75}
              alt='logo'
              className='rounded-full'
            />
          </div>
          <div className='text-white mt-5'>
            <div>abhisheksapradesigns.</div> 
            <div>New Delhi, India</div>
          </div>
        </div>
        <div>
        <ul className='text-xl'>
          <li className='tf'>Home</li>
          <li className='tf'>Portfolio</li>
          <li className='tf'>Contact</li>
          <li className='tf'>About</li>
        </ul>
        </div>    
        <div className='socialMedia'>

          <a href='https://www.instagram.com/abhisheksapradesigns/' target='_blank'> 
          <InstagramIcon className='hover:text-white' />
          </a>

          <FacebookIcon 
            className='hover:text-white'
          />
          <LinkedInIcon 
            className='hover:text-white'
          />

        </div>  
      </div>
    </footer>
  )
}

export default Footer
