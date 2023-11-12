import styled from "styled-components";



export const Navbar = styled.div`

.fixed{
  position: fixed; 
}
.modal{
  z-index:100;
  height: 80vh;
  width: 100%;
  color: white;
  /* position: fixed; */
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  animation: all .2s;
 
  

  padding: 5rem 0;

  .link{
    transition: all .2s;
    :hover{
      transform: scale(1.3) rotate(10deg);
      color: #c18469;
    }
  }
  h1{
    transition: all .5s;
    font-size: 2rem;
    letter-spacing: .4rem;
    font-weight: 700;
    @media only screen and (max-width: 768px) {
      font-size: 1.7rem;
        }
  }

}

.nav{
  color: #ffff;
  padding: 0 4rem;
  height: 15vh;
  display: flex;
  align-items: center;
  padding: 1rem 3rem;
  width: 100%;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    padding: 0 1rem;
        }

 .nav__logo{
  @media only screen and (max-width: 768px) {
    width: 137px;
    height: 25px;
        }
 }
}
  /* color: #ffff;
  padding: 0 4rem;
  height: 15vh;
  display: flex;
  align-items: center;
  padding: 1rem 3rem;
  justify-content: space-between; */
  /* background: #000000cf; */

  .menu {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 128.02000427246094px;
    height: 50px;

    :hover {
      cursor: pointer;
    }
    

    /* a {
      text-decoration: none;
      height: 50px;
    } */
    &__line {
      display: flex;
      flex-direction: column;
      /* justify-content: space-around; */
      align-items: center;

      .btn{
        background: none;
        outline: none;
        border: none;
      }

      &__btn {
        font-size: 2.4rem;
        color: #c18469;
        background: none;
        
        /* color: linear-gradient(
          90deg,
          rgba(255, 255, 255, 0.75) 0%,
          #c18469 100%
        ); */
      }
    }
    &__line hr {
      height: 2px;
      width: 40px;
      border: 0;
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0.75) 0%,
        #c18469 100%
      );
    }

    &__btn {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      &:hover{
        
      }
    }

    &__txt {
      padding-left: 0.5rem;
      font-size: 1.1rem;
      
      @media only screen and (max-width: 768px) {
      display:none !important;
    }
    }

    &__icons {
      @media only screen and (max-width: 768px) {
      display:none !important;
    }
      padding: 0px 3px;
      gap: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .icon {
        font-size: 1.5rem;
        transition: all 0.3s;

        &:hover {
          color: #c18469;
        }
      }
    }
  }
  
`;
