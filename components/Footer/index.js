import { Wrapper } from "./styles"
import { HiMail, HiOutlineMenuAlt4 } from "react-icons/hi";
import { TiSocialLinkedin } from "react-icons/ti";
import { BiLogoBehance } from "react-icons/bi";
const index = () => {
    return (
        <Wrapper>
            <div className="name">
                <h3 className="name__head">Abdul Hafeez</h3>
                <p className="name__txt">Abdul-hafeeez is a UX and CX designer from Nigeria</p>
                <nav className="name__nav">
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Projects</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Contact</a></li>
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