import React from 'react'
import Footer from '../src/components/Footer'
import Navbar from '../src/components/Navbar'
import Image from 'next/image'
import chat from '../src/assets/chat.svg'

const Contact = () => {
    return (
        <div className='w-full h-screen text-white'>
            <Navbar />
            <div className='w-full text-white py-16 px-4 flex justify-center items-center'>
                <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-6'>
                    <div className='flex justify-center items-center sm:my-5'>
                        <Image src={chat} alt='img' className='lg:h-[90%] lg:w-[90%] h-[150px] w-[150px]' />
                    </div>
                    <div>
                        <h1 className='lg:text-4xl text-2xl text-[#00df9a] py-4 px-4 font-bold uppercase'>Contact Us</h1>
                        <div className='py-4 px-4'>
                            {/* <p>For Queries</p> */}
                            <p className='lg:text-2xl text-xl'>+91 9999885662</p>
                            <p className='my-5 lg:text-2xl text-xl'>+91 9876543210</p>
                            <p className='lg:text-2xl text-xl'>sunshineplayschool@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Contact