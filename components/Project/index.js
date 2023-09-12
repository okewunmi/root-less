import Image from "next/image";
import {Wrapper,Content} from './styles.js'
import photo1 from '../../public/ptvs.jpeg';
import photo2 from '../../public/zoomride.jpeg'
import photo3 from '../../public/florish.jpeg'
import photo4 from '../../public/rental.jpeg'

const index = () => {
    return (
        <Wrapper>
            <div className='project'>
            <h1 className='project__head'>Featured Projects</h1>
            <p className='project__txt'>These are the tip of the iceberg, but I'm proud of all of these projects.</p>
            </div>
            <Content>
                <div className="box">
                    <Image src={photo1} width={450} height={420}/>
                    <div className="box__text">
                        <h3 className="box__text--big">PTVS</h3>
                        <p className="box__text--small">UI/UX design, Research, News Authenticity App</p>
                        <p className="box__text--small-2">Designed to help determine the authenticity of news with the use of images.</p>  
                    </div>
                    <div className="box__btn"> <a target="_blank" href='https://youtu.be/tMHb3vRXBK4' className="btn">View Prototype video</a></div>
                </div>
                <div className="box">
                    <Image src={photo2} width={450} height={440}/>
                    <div className="box__text">
                        <h3 className="box__text--big">Zoom RIda</h3>
                        <p className="box__text--small">UI design, Ride App</p>
                        <p className="box__text--small-2">Design of screens of a ride App with new features that makes it stand out.</p>  
                    </div>
                    <div className="box__btn"> <a target="_blank" href='https://youtu.be/y42GEkcAUp0' className="btn">View Prototype video</a></div>
                </div>
                <div className="box">
                    <Image src={photo3} width={450} height={420}/>
                    <div className="box__text">
                        <h3 className="box__text--big">Florist App</h3>
                        <p className="box__text--small">UI/UX design, Usability Study, UX Research</p>
                        <p className="box__text--small-2">Design of few screens to purchase flowers </p>  
                    </div>
                    <div className="box__btn"> <a target="_blank" href='https://youtu.be/6gLA4yTC5Nw' className="btn">View Prototype video</a></div>
                </div>
                <div className="box">
                    <Image src={photo4} width={450} height={420}/>
                    <div className="box__text">
                        <h3 className="box__text--big">Extante Rental Homes</h3>
                        <p className="box__text--small">Branding, UX Design, Web Design</p>
                        <p className="box__text--small-2">Responsive website, branded apparel and products, and an eCommerce CMS for a
professional band.</p>  
                    </div>
                    <div className="box__btn"> <a target="_blank" href='https://youtu.be/peRe_RJkIiQ' className="btn">View Prototype video</a></div>
                </div>
                
            </Content>
            <div className="link">
                    <p>Check out the rest of <span> <a href=""> my work </a></span> ! </p>
                   
                </div>
        </Wrapper>
    )
}

export default index