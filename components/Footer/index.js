import { Wrapper } from "./styles"
import { HiMail, HiOutlineMenuAlt4 } from "react-icons/hi";
import { TiSocialLinkedin } from "react-icons/ti";
import { BiLogoBehance } from "react-icons/bi";
import Link from "next/link";
const index = () => {
    return (
        <Wrapper>
            <div className="name">
                <h3 className="name__head">Abdul Hafeez</h3>
                <p className="name__txt">Abdul-hafeeez is a UX and CX designer from Nigeria</p>
                <nav className="name__nav">
                <Link className='link' href="/">Home</Link>
                <Link className='link'  href="/about">About</Link>
                <Link className='link'  href="/projects">Projects</Link>
                <Link className='link'  href="#">Blog</Link>
                <Link className='link'  href="/contact">Contact</Link>
                </nav>
            </div>
            <div className="social">
            <div className="menu__icons">
        <a
          className="icon"
          target="_blank"
          href="https://www.linkedin.com/in/abdul--hafeez/"
        >
          <TiSocialLinkedin />
        </a>
        <a
          className="icon"
          target="_blank"
          href="https://www.behance.net/dainnovator/"
        >
          <BiLogoBehance />
        </a>
        <a className="icon" target="_blank" href="hafeezkah@gmail.com">
          <HiMail />
        </a>
      </div>
      
      <a target="_blank" href="hafeezkah@gmail.com">hafeezkah@gmail.com</a>
      <a href="tel:+2349013054609"> (234) 9013054609</a>

      
            </div>
            
        </Wrapper>
    )
}

export default index