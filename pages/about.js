import Navbar from "../components/Nav";
import Footer from '../components/Footer/index'
import Testimony from '../components/Testimony/index'
import { Wrapper, Content } from "@/styles/about";
import Image from "next/image";
import backgrdImg from '../public/aboutMe.png'
import skillImage from '../public/block-about.png'
import adobe from '../public/logos_adobe-xd.png'
import Invision from '../public/logos_invision-icon.png'
import figma from '../public/figma.png'
import Link from "next/link";
import bg from '../public/about.png'

const about = () => {
    return (
        <Wrapper>
            <Navbar/>
            <content>
            <Image src={backgrdImg} alt="background" className="about__imgae"  />
            <div className="about__heading"> 
            <Image
            alt="Mountains"
            className="backgroundImg"
            src={bg}
            placeholder="blur"
            quality={100}
            fill
             sizes="100vw"
            style={{
                objectFit: 'cover',
                
                zIndex:"-1",
                top:"26rem"
            }}
            ></Image>
            <h1 className="about__title">I'm Abdul-Hafeez! ✨</h1>
            <p className="about__txt">He is a digital designer located in Nigeria</p>
            <div className="about__link">
            <Link className="home"  href="/">Home</Link>
                <p className="txt">About</p>
            </div>
            <div className="about__cont"> 
           
            <h3 className="about__cont--head">An Adventurous Kind of Life</h3>
            <p className="about__cont--txt">
            
            My name is Abdul-Hafeez. I am a college graduate and my most vital subjects in school were Forensic Accounting and Taxation. I enjoy learning and am very adventurous. I like to think outside the box and love employers who give me the chance to show what I can do. I also love to design for users I.e. My designs are User-centered. I have a passion for technology and enjoy helping others. I am interested in the UI/UX design positions and have previous experience as a UI/UX facilitator. I believe I am more than capable of this industry because of my desire to learn more. The Google UX design Certificate which I have acquired has made me a better candidate and will help me develop the professional skills I currently lack.
            </p>
            <h1 className="about__cont--big">Abdul-Hafeez</h1>
            </div>
            </div>
            </content>
            <div className="about__skills">
                <div className="about__skills__image">
                    <Image src={skillImage} className="img"/>
                </div>
               
                <div className="about__skills__txt">
                    <h2 className="head">Stat Points</h2>
                    <div className="skill">
                        <div className="skill--txt" >
                            <p>UX Research and Testing</p> 
                            <p>89%</p> 
                        </div>
                        <div className="rule __1"></div>
                    </div>
                    <div className="skill">
                        <div className="skill--txt" >
                            <p>UX Research and Testing</p> 
                            <p>90%</p> 
                        </div>
                        <div className="rule  __2"></div>
                    </div>
                    <div className="skill">
                        <div className="skill--txt" >
                            <p>UX Research and Testing</p> 
                            <p>95%</p> 
                        </div>
                        <div className="rule __3"></div>
                    </div>
                </div>
                
            </div>
            <div className="skill__icons">
                    <div className="icon">
                        <Image src={adobe} className='icons'/>
                        <p>Adobe Xd</p>
                    </div>
                    <div className="icon">
                        <Image src={figma} className='icons'/>
                        <p>Figma</p>
                    </div>
                    <div className="icon">
                        <Image src={Invision} className='icons'/>
                        <p>Invision</p>
                    </div>
                </div>
            <Testimony/>
            <Footer/>
        </Wrapper>
    )
}

export default about