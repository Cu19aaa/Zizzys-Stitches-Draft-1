import React from 'react'
import pic from '../assets/pic5.png'

const Process = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='text-center sm:text-center pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-black mt-10 mb-10'>How We Work</p>
        </div>

        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 mt-8'>
            <div className='w-full shadow-sm flex flex-col p-4 my-4 rounded-lg duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={pic} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>Book A Consultation</h2>
                <p className='text-center text-2xl font-bold'>Lorem, ipsum.</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error totam necessitatibus quaerat exercitationem natus delectus blanditiis. In est obcaecati ipsam quas ab omnis perspiciatis, vitae nulla illum rerum eius debitis?</p>
                    
                </div>
            </div>

            <div className='w-full shadow-sm flex flex-col p-4 my-4 rounded-lg duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={pic} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>Get measurement</h2>
                <p className='text-center text-2xl font-bold'>Lorem, ipsum.</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error totam necessitatibus quaerat exercitationem natus delectus blanditiis. In est obcaecati ipsam quas ab omnis perspiciatis, vitae nulla illum rerum eius debitis?</p>
                    
                </div>
            </div>

            <div className='w-full shadow-sm flex flex-col p-4 my-4 rounded-lg duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={pic} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>Agree on Priciing</h2>
                <p className='text-center text-2xl font-bold'>Lorem, ipsum.</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error totam necessitatibus quaerat exercitationem natus delectus blanditiis. In est obcaecati ipsam quas ab omnis perspiciatis, vitae nulla illum rerum eius debitis?</p>
                    
                </div>
            </div>

        </div>
    </div>
  )
}

export default Process
