import { TopSec } from "./styles.js";
import Image from "next/image";
import bg from '../../public/hero.png'

const Top = () => {
  return (
    <TopSec >
      <div className='container'>
      <div className='container__img'>
        <Image src={bg} alt='bg' className='image' width={600} height={600} />
      </div>
        <div className="container__txt">
          <h1 className='txt--1'>Hi! I design for</h1>
          <h1 className='txt--2'>products & brands.</h1>
        </div>
      <div className="container__btn">
        <a target="_blank" href='https://drive.google.com/file/d/1N-QI9Nxr_wFmGEUdAbPiANgITULsFSkI/view?usp=sharing' className="btn__download btn">Download Resume</a>
        <a href='' className="btn__prj btn">View Projects</a>
      </div>
      </div>
    </TopSec>
  );
};

export default Top;
