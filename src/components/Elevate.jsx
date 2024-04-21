import React, { useState, useEffect } from 'react';
import pic from '../assets/pic6.png';
import pic1 from '../assets/pic5.png';
import pic2 from '../assets/pic4.png';

const Elevate = () => {
  const [image, setImage] = useState(pic);
  const [screenSize, setScreenSize] = useState('');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let newImage = pic;

      if (width <= 640) { // Mobile screen
        newImage = pic1;
        setScreenSize('mobile');
      } else if (width <= 1024) { // Medium screen
        newImage = pic2;
        setScreenSize('medium');
      } else { // Larger screen
        setScreenSize('large');
      }

      setImage(newImage);
    };

    handleResize(); // Initial call to set image and check screen size

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // No dependencies, only run once

  return (
    <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
      {/* Left side */}
      <div className={`flex flex-col h-full justify-center ${screenSize === 'mobile' ? 'order-2' : ''}`}>
        <h3 className='text-3xl md:text-6xl font-bold'>Lorem ipsum dolor, sit amet consectetur adipisicing.</h3>
        <div className='max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-2 border-gray-600 py-8 px-4'>
          <div className='m-auto'>
            <p className='italic'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita quaerat reprehenderit sunt placeat nostrum esse, excepturi, sit ipsa quisquam corrupti sapiente quae est rerum ducimus, ipsum neque.</p>
          </div>   
        </div>
      </div>

      {/* Right side */}
      <div className={`py-10 mb-10 flex justify-center items-center ${screenSize === 'mobile' ? 'order-1' : ''}`}>
        <img className='row-span-4 object-cover w-full h-full p-2' src={image} alt="/" style={{width:'450px'}} />
      </div>
    </div>
  );
};

export default Elevate;
