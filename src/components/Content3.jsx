import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import question from '../assets/svg2.svg'
import supabase from '../utils/supabase'
import { ToastContainer, toast } from 'react-toastify';

const Content3 = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone_number, setPhoneNumber] = useState('');
    const [query, setQuery] = useState('');

    const queryObj = {
        name,
        email,
        phone_number,
        query
    }
    const submitResponse = async () => {
        try {
            if (name == '' || !email.includes('@') || isNaN(phone_number) && phone_number.length == 10 || query == '') {
                toast.error('Fields cannot be empty or different', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            }
            else {
                const { data, error } = await supabase.from('user-query').insert(queryObj);
                toast.success('Query Submitted', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                setEmail('');
                setName('');
                setPhoneNumber('');
                setQuery('');
            }
        }
        catch (error) {
            toast.error(error, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    }
    return (
        <div className='bg-[#fff] w-full h-screen flex justify-center items-center'>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            {/* Same as */}
            <ToastContainer />
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-15'>
                <div className=''>
                    <Image src={question} alt='img' className='lg:h-[90%] lg:w-[90%] h-[200px] w-[400px]' />
                </div>
                <div className='lg:py-8 lg:px-4 py-8 px-4'>
                    <h1 className='lg:text-3xl font-bold my-10 text-xl'>Any Queries ?</h1>
                    <div>
                        <input type="text" name="name" id="name" value={name} className='w-full py-2 my-4 border-b-2 border-[#00df9a] outline-none text-[#000300] lg:text-xl capitalize' placeholder='Enter Your Name' onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className='w-full'>
                        <input type="text" name="email" id="email" value={email} className='w-full py-2 my-4 border-b-2 outline-none text-[#000300] lg:text-xl border-[#00df9a] ' placeholder='Enter Your Email' onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='w-full'>
                        <input type="text" name="phone_number" id="phone_number" value={phone_number} className='w-full py-2 my-4 border-b-2 outline-none text-[#000300] lg:text-xl capitalize border-[#00df9a] ' placeholder='Enter Your Phone Number' onChange={(e) => setPhoneNumber(e.target.value)} />
                    </div>
                    <div className='w-full'>
                        <input type="text" name="query" id="query" value={query} className='w-full py-2 my-4 border-b-2 outline-none text-[#000300] lg:text-xl capitalize border-[#00df9a] ' placeholder='Write About Your Query (Max 90 Words)' onChange={(e) => setQuery(e.target.value)} />
                    </div>
                    <div className='w-full flex justify-center items-center'>
                        <button onClick={() => submitResponse()} className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 hover:bg-[#000300] hover:text-[#00df9a] ease-in-out duration-500'>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content3