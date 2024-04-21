import React, { useState, useEffect } from 'react';
import pic1 from '../assets/pic1.png';
import pic2 from '../assets/llll.png';
import pic3 from '../assets/pic3.png';
import pic4 from '../assets/pic4.png';
import pic5 from '../assets/pic5.png';
import pic6 from '../assets/pic6.png';
import Logo from '../assets/zizzys stitches.png';

const Hero = () => {
    const [backgroundImages, setBackgroundImages] = useState([pic6, pic2, pic3, pic4, pic5]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Function to switch to the next image in the carousel
    const nextImage = () => {
        setCurrentImageIndex((currentImageIndex + 1) % backgroundImages.length);
    };

    // Use useEffect to set up an interval that switches images
    useEffect(() => {
        const interval = setInterval(nextImage, 5000); // Change image every 5 seconds
        return () => clearInterval(interval); // Cleanup the interval on component unmount
    }, [currentImageIndex]); // Add currentImageIndex as dependency

    return (
        <div className='w-full h-screen relative'>
            {/* Background image */}
            {backgroundImages.map((image, index) => (
                <img
                    key={index}
                    className={`absolute top-0 left-0 w-full h-screen object-cover transition-opacity duration-500 ${
                        index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                    src={image}
                    alt={`Background ${index}`}
                />
            ))}

            {/* Logo */}
            <img src={Logo} alt="Logo" className="absolute top-4 left-4 z-10" style={{ width: '85px' }} />

            {/* Content */}
            <div className='bg-black/20 absolute top-0 left-0 w-full h-screen'>
                <div className='absolute top-0 w-full h-full flex flex-col justify-center text-gray-400'>
                    <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
                        <p>All inclusive</p>
                        <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>Lorem ipsum dolor sit amet.</h1>
                        <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, mollitia?</p>
                        <button className=' mt-5 px-3 py-3 w-[150px] rounded-lg text-white  hover:text-black hover:bg-white hover:scale-110 '>Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
