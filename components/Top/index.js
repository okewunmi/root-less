import { TopSec } from "./styles.js";
import Image from "next/image";
import bg from "../../public/hero.png";
import Link from "next/link.js";

const Top = () => {
  return (
    <TopSec>
      <div className="container">
        <div className="container__img">
          <Image src={bg} alt="bg" className="image" width={500} height={500} />
        </div>
        <div className="container__txt">
          <h1 className="txt--1">Hi! I design for</h1>
          <h1 className="txt--2">products & brands.</h1>
        </div>
        <div className="container__btn">
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1pb630eKiTp389TpBeYLnbnNNlKsmG5Cw/view?usp=drivesdk"
            className="btn__download btn"
          >
            Download Resume
          </a>
          <Link className="btn__prj btn" href="/projects">
            View Projects
          </Link>
        </div>
      </div>
    </TopSec>
  );
};

export default Top;
