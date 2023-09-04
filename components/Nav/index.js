import { Navbar } from "./styles.js";
import { HiMenuAlt4, HiMail, HiOutlineMenuAlt4 } from "react-icons/hi";
import { TiSocialLinkedin } from "react-icons/ti";
import { BiLogoBehance } from "react-icons/bi";
import Image from "next/image";

function NavBar() {
  return (
    <Navbar>
      <div className="menu">
        <a href="" className="menu__btn">
          <div className="menu__line">
            <HiOutlineMenuAlt4 className="menu__line__btn" />
            {/* <hr className="hr__1" />
            <hr className="hr__2" /> */}
          </div>
          <p className="menu__txt">MENU</p>
        </a>
      </div>
      <div className="menu__hero">
        <Image
          src="/logo.svg"
          alt="logo"
          className="nav__logo"
          width={147}
          height={31.63}
        />
      </div>
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
    </Navbar>
  );
}
export default NavBar;
