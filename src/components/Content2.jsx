import React from 'react'
import Image from 'next/image'
// import place from '../assets/svg1.svg'
import pointer from '../assets/pointer.svg'
import clock from '../assets/clock.svg'

const Content2 = () => {
    return (
        <div className='w-full h-screen text-white py-16 px-4 flex flex-col justify-center items-center'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-6 '>
                <div className='flex justify-center items-center sm:my-5'>
                    <Image src={pointer} alt='img' className='lg:h-[55%] lg:w-[55%] h-[100px] w-[100px]' />
                </div>
                <div className=''>
                    <h1 className='lg:text-4xl text-2xl text-[#00df9a] py-4 px-4 font-bold uppercase'>Our Location</h1>
                    <h1 className=' text-gray-300 text-xl py-4 px-4 uppercase font-semibold'>A-Block, Keshav Nagar</h1>
                    <h1 className=' text-gray-300 text-xl py-4 px-4 uppercase font-semibold'>24-Feet Road Near Leela Hardware</h1>
                    <h1 className=' text-gray-300 text-xl py-4 px-4 uppercase font-semibold'>Uttrakhand Chowk, Delhi-36</h1>
                </div>
                <div className='flex justify-center items-center sm:my-5'>
                    <Image src={clock} alt='img' className='lg:h-[60%] lg:w-[60%] h-[100px] w-[100px]' />
                </div>
                <div className=''>
                    <h1 className='lg:text-4xl text-2xl py-4 px-4 text-[#00df9a] font-bold uppercase'>Timing</h1>
                    <h1 className='py-4 px-4 text-gray-300  text-xl uppercase font-semibold'>9AM to 12PM</h1>
                </div>
            </div>
        </div>
    )
}

export default Content2