import React, { useState, useEffect } from 'react'
import supabase from '../utils/supabase'
import Image from 'next/image';
import arrow from '../assets/arrow.svg'

const Hero = () => {
    const [rdata, setRData] = useState('');
    useEffect(() => {
        async function getData() {
            const { data, error } = await supabase.from('siteInformation').select();
            setRData(data[0]);
        }
        getData();
    }, [])
    return (
        <div className='text-white'>
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold p-2 text-2xl'>Let&apos;s help your child be their best version</p>
                <h1 className='md:text-5xl sm:text-4xl text-3xl font-bold md:py-6'>Embark on a new journey of empowerment</h1>
                <p className='md:text-4xl sm:text-3xl 3xl text-gray-400 font-bold md:my-4 sm:my-3 my-3'>{rdata.hero}</p>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 hover:bg-[#fff] hover:text-[#00df9a] ease-in-out duration-500'>Contact Us</button>
            </div>
            <div className='flex justify-center items-center w-[100%] lg:bottom-[15%] md:bottom-[15%] absolute bottom-[20%]'>
                <Image src={arrow} alt='/' height={120} width={120} />
            </div>
        </div>
    )
}

export default Hero