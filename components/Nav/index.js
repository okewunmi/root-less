import { Navbar } from "./styles.js";
import Image from "next/image";

function NavBar() {
  return (
    <Navbar>
      <div className="menu">
        <a href="" className="menu__btn">
          <div>
            <hr></hr>
            <hr></hr>
          </div>
          <p className="menu__txt">MENU</p>
        </a>
      </div>
      <div className="menu__hero">
        <Image
          src="/logo.svg"
          alt="logo"
          className="nav__logo"
          width={157}
          height={41.63}
        />
      </div>
      <div className="menu__icons">
        <a target="_blank" href="https://www.linkedin.com/in/abdul--hafeez/">
          <Image
            src="/linkedin.svg"
            alt="lcons"
            className="menu__lcon"
            width={20}
            height={20}
          />
        </a>
        <a arget="_blank" href="https://www.linkedin.com/in/abdul--hafeez/">
          <Image
            src="/behance.svg"
            alt="lcons"
            className="menu__lcon"
            width={38}
            height={38}
          />
        </a>
        <a arget="_blank" href="https://www.linkedin.com/in/abdul--hafeez/">
          <Image
            src="/Mail.svg"
            alt="lcons"
            className="menu__lcon"
            width={28}
            height={28}
          />
        </a>
      </div>
    </Navbar>
  );
}
export default NavBar;
