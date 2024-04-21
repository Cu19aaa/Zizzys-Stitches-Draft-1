import React from 'react';
import { data } from './mockData';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'

const Slider = () => {
    const slideLeft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;
    };

    const slideright = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500;
    }; 

  return (
    <div className='flex justify-center'>
        
      <div className='max-w-[1540px] '>
        <div className='relative flex items-center'>
        <MdChevronLeft onClick={slideLeft} size={40}/>
          <div id='slider' className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth'>
            {data.map((item) => (
              <img className='w-[350px] h-[550px] inline-block p-2 pb-20 cursor-pointer hover:scale-105 ease-in-out duration-300' src={item.img} alt="/" />
            ))}
          </div>
          <MdChevronRight onClick={slideright} size={40}/>

        </div>
      </div>
    </div>
  );
};

export default Slider;

