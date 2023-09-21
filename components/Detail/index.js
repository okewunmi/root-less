import {Wrapper,Content, Service } from "./styles.js";
import { BiLogoBehance } from "react-icons/bi";
import {HiOutlineSpeakerphone} from 'react-icons/hi'
 import Image from "next/image";
 const Detail = ()=>{
    return (
        <Wrapper>
            <Content>
                <div className='txt__box'>
                    <h1 className="txt__heading">Hi, I'm Abdul-Hafeez and my designs are Equity Focused.</h1>
                    <p className="txt__small">
                        My name is Abdul-Hafeez. I am passionate about innovation and concerned about people’s welfare, 
                        and for these reasons, I User-Experience Design. I also love to showcase and communicate my ideas, 
                        which are equity-based solutions that is focused on helping to best 
                        provide the best User interface for users with whatever product i lay my hands on.</p>
                        <div className="icon__box">
                        <div className="txt__icons">
                            <div className="icon">
                                <Image src='/ux.png' width={45} height={45} className="svg" />
                                <p>UX Design</p>
                            </div>
                            <div className="icon">
                            <Image src='/ui.png' width={45} height={45} className="svg"/>
                                <p>UI Design</p>
                            </div>
                            <div className="icon">
                            <Image src='/search.png' width={45} height={45} className="svg" />
                                <p>Research</p>
                            </div>
                          <div className="icon">
                          <Image src='/brand.png' width={45} height={45} className="svg" />
                                <p>Branding</p>
                            </div>   
                        </div>
                        <div className="txt__icons">
                           <div className="icon">
                           <Image src='/product.png' width={45} height={45} className="svg" />
                                <p>Product Strategy</p>
                            </div>
                            <div className="icon">
                            <Image src='/marketing.png' width={45} height={45} className="svg" />
                                <p>Marketing</p>
                            </div>
                            <div className="icon">
                            <Image src='/marketing.png' width={45} height={45} className="svg" />
                                <p>Marketing</p>
                            </div> 
                        </div>
                        </div>
                </div>
                <div className='image__box'>
                    <Image src='/laptophone.png' width={400} height={400}  className="img"/>
                </div>
            </Content>
            <Service>
            <div className="service"> 
            <Image  src="/research2.png" width={60} height={60}/>
            <div className="service__txt">
            <h3>Research</h3>
            <p>Understand the market, define the audience, and ideate potential solutions.</p>
            </div>
            </div>
            <div className="service"> 
            <Image  src="/product2.png" width={60} height={60}/>
            <div className="service__txt">
            <h3>Product Design</h3>
            <p>Define the solution, create a roadmap, establish
                architecture and design the product.</p>
            </div>
            </div><div className="service"> 
            <Image  src="/testing.png" width={60} height={60}/>
            <div className="service__txt">
            <h3>Testing</h3>
            <p>Establish usability, meet accessibility needs and ensure a delightful solution.</p>
            </div>
            </div>
            </Service>
            
            
        </Wrapper>
    )

 }
export default Detail