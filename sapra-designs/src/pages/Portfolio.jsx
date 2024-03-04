import React, { useState } from 'react';
import { propics } from '../assets';
import CloseIcon from '@mui/icons-material/Close';
import RouterTransition from '../components/RouterTransition'

function Portfolio() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const handleClick = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  }

  return (
    <RouterTransition>
    <div>
      <div className={modalOpen ? 'model open' : 'model'}>
      <img src={selectedImage} />
      <CloseIcon onClick={() =>setModalOpen(false)} />
      </div>

      <div className='font-playfair text-tclmagenta flex justify-start text-3xl mt-4 font-bold ml-10 italic'>Discover our exceptional achievements in interior design.</div>
      <div className='mt-auto p-8 grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-8 gap-14 '>
        {propics.map((proItem, key) => {
          return (
            <div key={key} onClick={() => handleClick(proItem.image)} className='hoverzoom border-solid border-4 border-tclmagenta rounded-lg cursor-pointer'>
              <img src={proItem.image}
               style={{width : '100%'}} 
                className='hovereffect w-[500px] h-[300px]'
               />
            </div>
          );
        })}
      </div>

      
    </div>
    </RouterTransition>
  );
}

export default Portfolio;
