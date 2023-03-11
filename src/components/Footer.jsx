import React from 'react'
import { FaFacebookSquare, FaInstagramSquare, FaWhatsappSquare } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='bg-[#000300] text-gray-300 max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-2 gap-8'>
            <div>
                <h1 className='px-4 w-full text-2xl font-bold text-[#00df9a]'>Sunshine Playschool</h1>
                <p className='py-4 px-4'>Sunshine Play School A-BLOCK, KESHAV NAGAR, 24-FEET ROAD NEAR LEELA HARDWARE, UTTRAKHAND CHOWK, DELHI-36, NEW DELHI, INDIA</p>
                <div className='px-4 flex justify-between w-[35%] my-6'>
                    <FaFacebookSquare size={30} className='hover:cursor-pointer' />
                    <FaInstagramSquare size={30} className='hover:cursor-pointer' />
                    <FaWhatsappSquare size={30} className='hover:cursor-pointer' />
                </div>
            </div>
            <div className='lg:col-span sm:col-span-2 flex justify-between items-center'>
                <div className='px-4'>
                    <h1>+91 9999885662</h1>
                    <h1>+91 1234567890</h1>
                    <h1>sunshineplayschool@gmail.com</h1>
                </div>
            </div>
        </div>
    )
}

export default Footer