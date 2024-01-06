
import React, { Component } from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {Wrapper} from './styles.js'
import person1 from '../../images/person2.jpeg';
import person2 from '../../images/person1.jpeg';
import Image from "next/image.js";
import person3 from '../public/testitomy.png'

const index = () => {

    return (
        <Wrapper>
            <h1>High Fives 🙌</h1>
            <p className="txt">Dont&#39; just take my word for it.</p>
            <Carousel showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={6100}>
            <div>
          <Image src={person3} alt="person"/>
          <div className="myCarousel">
            <h3>Tumininu Umeike</h3>
            <h4>UX designer</h4>
            <p>
            Mr Abdul-hafeez Kehinde trained me in the basics of UI/UX. I learned enormously from him and I have been able to start a journey in the field thanks to him. He has a lot to offer and he is definitely great at what he does. I hope to still learn from him as he makes his way to the top

            </p>
            
          </div>
        </div>

        <div>
        <Image src={person3} alt="person"/>
          <div className="myCarousel">
            <h3>Eductech</h3>
            <h4>Designer</h4>
            <p>
            &ldquo;I deduced he is a well focused and result-driven oriented instructor whose eyes are on the goals. He is highly cerebral and possess appreciable prowess in teaching both the theoretical and pratical aspect of UI/UX.&ldquo;
            </p>
          </div>
        </div>

        <div>
        <Image src={person3} alt="person"/>
          <div className="myCarousel">
            <h3>Laolu Omokanwaiye</h3>
            <h4>Designer</h4>
            <p>
            Mr Abdul-hafeez is a delight to work with and I am confident that he will perform well.
            </p>
          </div>
        </div>
        {/* <div>
        <Image src={person2} alt="person"/>
          <div className="myCarousel">
            <h3>Theo Sorel</h3>
            <h4>Designer</h4>
            <p>
              I enjoy catching up with Fetch on my laptop, or on my phone when
              I'm on the go!
            </p>
          </div> */}
        {/* </div> */}
        {/* <div>
        <Image src={person2} alt="person"/>
          <div className="myCarousel">
            <h3>Theo Sorel</h3>
            <h4>Designer</h4>
            <p>
              I enjoy catching up with Fetch on my laptop, or on my phone when
              I'm on the go!
            </p>
          </div>
        </div> */}
            </Carousel>
        </Wrapper>
    )
}

export default index