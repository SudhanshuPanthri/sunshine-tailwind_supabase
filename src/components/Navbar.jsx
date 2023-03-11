import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import Link from 'next/link';

const Navbar = () => {

    const [nav, setNav] = useState(true);
    const handleNav = () => {
        setNav(!nav);
    }

    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-3 text-white z-100'>
            <h1 className='w-full text-2xl font-bold text-[#00df9a]'>Sunshine Playschool</h1>
            <ul className='hidden md:flex'>
                <li className='p-3 hover: cursor-pointer hover:text-[#00df9a] ease-in-out duration-300'><Link href='/'>Home</Link></li>
                <li className='p-3 hover: cursor-pointer hover:text-[#00df9a] ease-in-out duration-300'>
                    <Link href='/Gallery'>Gallery</Link>
                </li>
                <li className='p-3 hover: cursor-pointer hover:text-[#00df9a] ease-in-out duration-300'><Link href='/About'>About</Link></li>
                <li className='p-3 hover: cursor-pointer hover:text-[#00df9a] ease-in-out duration-300'><Link href='/Contact'>Contact</Link></li>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {
                    !nav ? (
                        <AiOutlineClose size={20} className='cursor-pointer' />
                    ) :
                        (
                            <AiOutlineMenu size={20} className='cursor-pointer' />
                        )
                }
            </div>
            <div className={!nav ? 'fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <h1 className='w-full text-2xl font-bold text-[#00df9a] m-6'>Sunshine Playschool</h1>
                <ul className='uppercase p-3'>
                    <li className='p-3 border-b border-b-gray-700'><Link href='/'>Home</Link></li>
                    <li className='p-3 border-b border-b-gray-700'><Link href='/Gallery'>Gallery</Link></li>
                    <li className='p-3 border-b border-b-gray-700'><Link href='/About'>About</Link></li>
                    <li className='p-3 border-b border-b-gray-700'><Link href='/Contact'>Contact</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar