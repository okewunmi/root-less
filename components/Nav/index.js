import React, { useState } from 'react';
import { Navbar } from './styles.js';
import Link from 'next/link'
import { HiMail, HiOutlineMenuAlt4 } from 'react-icons/hi';
import{MdClose} from 'react-icons/md'
import { TiSocialLinkedin } from 'react-icons/ti';
import { BiLogoBehance } from 'react-icons/bi';
import Image from 'next/image';




function NavBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <Navbar>
      <div className='nav'>
       
      <div className="menu">
        {/* ---modal--- */}
        <div  className="menu__btn">
          <div className="menu__line ">
          <Link className='link' href="/Menu"> <HiOutlineMenuAlt4  className="menu__line__btn" /> </Link>
          
            {/* {isModalOpen ? (
              <button className="open-button btn" onClick={toggleModal}>
              <MdClose className="menu__line__btn" />
            </button>
              
            ) : (
              <button className="close-button btn" onClick={toggleModal}>
              <HiOutlineMenuAlt4  className="menu__line__btn" /> 
            </button>
            )} */}
          </div>
          <p className="menu__txt">MENU</p>
       </div>
      </div>
      {/* Modal */}
      
      
      <Link className='menu__hero' href="/">
      <Image
          src="/logo.svg"
          alt="logo"
          className="nav__logo"
          width={147}
          height={31.63}
        />
      </Link>
        
   
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
      </div>
      {/* {isModalOpen && (
        <div className="modal" >
          <Link className='link' href="/"><h1>HOME</h1></Link>
          <Link className='link'  href="/about"><h1>ABOUT ME</h1></Link>
          <Link className='link'  href="/projects"><h1>PROJECTS</h1></Link>
          <Link className='link'  href="/contact"><h1>CONTACT</h1></Link>
         </div>
      )} */}
      
    </Navbar>
    
   
  );
}

export default NavBar;

