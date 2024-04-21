import React from 'react'
import { useSpring, animated } from 'react-spring';
import pic3 from '../assets/pic3.png';


const About = () => {
    const props = useSpring({
        opacity:1,
        from: { opacity: 0 },
        config: { tension: 280, friction:60},
    });

  return (
    <animated.div name='about' className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4' style={props}>
      {/* Left Side */}
      <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
        <img className='row-span-6 object-cover w-full h-full p-2' src={pic3} alt="/" />
        <img className='row-span-3 object-cover w-full h-full p-2' src={pic3} alt="/" />
        <img className='row-span-3 object-cover w-full h-full p-2' src={pic3} alt="/" />
      </div>
      {/* Right Side */}
      <div className='flex flex-col h-full justify-center'>
        <h3 className='text-5xl md:text-6xl font-bold'>About The Business</h3>
        <p className='text-2xl py-6'>Welcome To Zizzys Stitches</p>
        <p className='pb-6 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium tempore, iure reiciendis ducimus, molestiae excepturi ad quisquam sunt modi, asperiores rerum est. Accusamus ut totam optio. Exercitationem tenetur id tempora!
          </p>
      </div>
    </animated.div>
  )
}

export default About
