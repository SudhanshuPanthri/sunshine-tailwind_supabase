import React from 'react'
import Footer from '../src/components/Footer'
import Navbar from '../src/components/Navbar'
import Image from 'next/image'
import info from '../src/assets/info.svg'

const About = () => {
    return (
        <div className='w-full h-screen text-white'>
            <Navbar />
            <div className='w-full text-white py-16 px-4 flex justify-center items-center'>
                <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-6'>
                    <div className='flex justify-center items-center sm:my-5'>
                        <Image src={info} alt='img' className='lg:h-[70%] lg:w-[70%] h-[150px] w-[150px]' />
                    </div>
                    <div>
                        <h1 className='lg:text-4xl text-2xl text-[#00df9a] py-4 px-4 font-bold uppercase'>About Us</h1>
                        <div className='py-4 px-4'>
                            <p>Sunshine Play School was born in 2023 with a vision to provide an environment that is full of acceptance, freedom for exploration and love for learning.</p>
                            <p className='my-5'>An institution where co -curricular activities are given as much importance as academics, the school ensures that not only the different learning styles of each child are incorporated but the hidden talents in each child are also discovered and encouraged.</p>
                        </div>
                        <div className='py-4 px-4'>
                            <Image src={require('../src/assets/chairperson.jpeg')} alt='chairperson' height={110} width={110} />
                            <p className='my-2'>Mr. Kashi Ram Panthri</p>
                            <p>( Chair Person )</p>
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

export default About