
import { Wrapper } from "@/styles/project"
import Nav from '../components/Nav/index'
import Footer from '../components/Footer/index'
import Project from '../components/Project/project.js'
import Contant from '../components/Contact/index'
import Image from "next/image"
import photo1 from '../public/ptvs.jpeg';

const projects = () => {
    return (
        <Wrapper>
            <Nav/>
            <div className="project__box"> 
            <h1 className="about__title">Project</h1>
            <div className="about__link">
                <a href="#" className="home">Home</a>
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