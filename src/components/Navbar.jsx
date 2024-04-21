import React, { useState } from 'react';
import Logo from '../assets/zizzys stitches.png';
import { HiMenuAlt3 } from 'react-icons/hi';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
        if (!nav) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'visible'; // or 'auto' depending on your preference
        }
    }

    return (
        <div className='absolute w-full flex justify-between p-4 items-center'>
            <div>
                <img src={Logo} alt="logo image" style={{ width: '85px' }} />
            </div>
            <HiMenuAlt3 className='z-20 text-black cursor-pointer' size={25} onClick={handleNav} />
            <div className={
                nav
                    ? 'ease-in duration-300 fixed text-gray-200 left-0 top-0 w-full h-screen bg-black/70 px-4 py-7 flex-col z-10 flex items-center justify-center' // Updated classes for centering
                    : 'absolute top-0 h-screen left-[-100%] ease-in duration-500 z-10 items-center justify-center'
            }>
                <ul className='flex flex-col items-center justify-center'> {/* Updated classes for centering */}
                    <li className='font-bold text-3xl p-8 '>Home</li>
                    <li className='font-bold text-3xl p-8 '>About</li>
                    <li className='font-bold text-3xl p-8 '>Designs</li>
                    <li className='font-bold text-3xl p-8 '>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;
