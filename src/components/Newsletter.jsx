import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full mt-24 bg-gray-900 text-gray-300 py-2 px-2'>
        <div className='max-w-[1400px] mx-auto border-b-2 border-gray py-8 px-4'>
            <div className='col-span-2 py-8 md:pt-2 flex flex-col'>
                <p className='font-bold uppercase text-center'> Sign up to get the latest news on designs and discounts</p>
                <form className='flex flex-col sm:flex-row'>
                    <input className='w-full p-2 mr-4 rounded-md mb-4' type="email" placeholder='Enter email' />
                    <button className='p-2 mb-4 rounded-md'>Subscribe</button>
                </form>
            </div>

        </div>
      
    </div>
  )
}

export default Newsletter
