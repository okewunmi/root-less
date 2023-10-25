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
                <Contact  />  
            <Footer/>
        </Wrapper>
    );
}

export default index;
