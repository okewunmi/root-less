import React from 'react';
import Navbar from "../components/Nav";
import Footer from '../components/Footer/index'
import Contact from '../components/Contact/index'
import Image from "next/image";
// import bg from '../../public/hero.png'
import { Wrapper } from '@/styles/contact';

import bg from '../public/hero.png'

const index = () => {
    return (
        <Wrapper>
            <Navbar/>
            <Image
            alt="Mountains"
            src={bg}
            placeholder="blur"
            quality={100}
            fill
             sizes="100vw"
            style={{
                objectFit: 'contain',
                zIndex:"-1",
                top:"6rem"
            }}
            ></Image>
                <Contact  />  
            <Footer/>
        </Wrapper>
    );
}

export default index;
