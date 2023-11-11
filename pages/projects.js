
import { Wrapper } from "@/styles/project"
import Nav from '../components/Nav/index'
import Footer from '../components/Footer/index'
import Project from '../components/Project/project.js'
import Contant from '../components/Contact/index'
import Image from "next/image"
import photo1 from '../public/ptvs.jpeg';
import Link from "next/link"
import bg from '../public/project.png'

const projects = () => {
    return (
        <Wrapper>
            <Nav/>
            <div className="project__box"> 
            <Image
            alt="Mountains"
            src={bg}
            placeholder="blur"
            quality={100}
            fill
             sizes="100vw"
            style={{
                objectFit: 'cover',
                
                zIndex:"-1",
                top:"6rem"
            }}
            ></Image>
            <h1 className="about__title">Project</h1>
            <div className="about__link">
                <Link className="home"  href="/">Home</Link>
                <p className="txt">Projects</p>
                </div>
            </div>
            <Project/>
            <Contant/>
            <Footer/>
        </Wrapper>
    )
}

export default projects