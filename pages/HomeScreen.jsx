import React from 'react'
import Content1 from '../src/components/Content1'
import Content2 from '../src/components/Content2'
import Content3 from '../src/components/Content3'
import Footer from '../src/components/Footer'
import Hero from '../src/components/Hero'
import Navbar from '../src/components/Navbar'

const HomeScreen = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Content1 />
            <Content2 />
            <Content3 />
            {/* query-section  */}
            {/* footer  */}
            <Footer />
        </div>
    )
}

export default HomeScreen