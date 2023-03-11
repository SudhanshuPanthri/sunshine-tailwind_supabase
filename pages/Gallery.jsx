import React, { useState, useEffect } from 'react'
import Navbar from '../src/components/Navbar'
import Footer from '../src/components/Footer'
import Image from 'next/image'
import supabase from '../src/utils/supabase'

const Gallery = () => {
    const [images, setImages] = useState([]);

    const myLoader = ({ src, width, quality }) => {
        return `https://tkrrqsfkjwnnmjaculcn.supabase.co/storage/v1/object/public/playschool-gallery/${src}?w=${width}&q=${quality || 75}`
    }

    const getImages = async () => {
        const { data, error } = await supabase.storage.from('playschool-gallery').list();
        if (data) {
            setImages(data);
        }
        else {
            throw new Error(error)
        }
    }

    useEffect(() => {
        getImages();
    }, [])
    return (
        <div className='w-full h-screen'>
            <Navbar />
            <div className='max-w-[1240px] h-auto mx-auto flex overflow-y-auto justify-center items-center scrollbar-hide'>
                <div className='flex'>
                    {images.map((item) => (
                        <Image loader={myLoader} src={item.name} alt='image' key={item.id} height={150} width={150} className='mx-4 my-4 object-cover lg:h-[450px] lg:w-[550px] md:h-[250px] md:w-[250px]' />
                    ))}
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Gallery