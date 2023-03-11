import React from 'react'
import Image from 'next/image'

const Content1 = () => {
    return (
        <div className='w-full bg-[#fff] py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <Image src={require('../assets/image4.jpeg')} alt='/' className='w-[500px] h-[400px] mx-auto my-4 object-cover' />
                <div className='flex flex-col justify-center p-4'>
                    {/* <p className='text-[#00df9a] font-bold uppercase'>Data analytics dashboard</p> */}
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 uppercase text-[#00df9a]'>Family Like Treatment</h1>
                    <p className='text-xl'>We make sure your child is happy in our presence</p>
                </div>
            </div>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <Image src={require('../assets/image3.jpeg')} alt='/' className='w-[500px] h-[400px] mx-auto my-4 object-cover' />
                <div className='flex flex-col justify-center p-4'>
                    {/* <p className='text-[#00df9a] font-bold uppercase'>Data analytics dashboard</p> */}
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 uppercase text-[#00df9a]'>Appreciation is must isn&apos;t it ?</h1>
                    <p className='text-xl'>We celebrate every small achievement whenever your kid learns something new!</p>
                </div>
            </div>
        </div>
    )
}

export default Content1