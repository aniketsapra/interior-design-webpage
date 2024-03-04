import React from 'react'

function Button({label}) {
  return (
    <button className='flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-tcmagenta border-tcmagenta text-white rounded-full font-playfair
    hover:bg-tclmagenta duration-300' type="button">
    {label}
    </button>
  )
}

export default Button
