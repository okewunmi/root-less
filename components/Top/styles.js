import styled from "styled-components";
// import bg from '../../public/hero.png'

export const TopSec = styled.div`

  margin-top:2rem;
  min-height: 80vh;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  
  @media only screen and (max-width: 500px) {
    margin-top:.0rem;
   
}
  
  .container{
    /* background: black; */
    display: flex;
    height: 15rem;
    width:100%;
    flex-direction: column;
    align-items: center;
    /* justify-content: space-between; */
    gap:2rem;

    &__img{
      background: rgb(0,0,0);
      background: linear-gradient(180deg, rgba(0,0,0,1) 50%, rgba(8,6,6,0.9) 100%);
      position:relative;
      display: flex;
      align-items: center;
      justify-content: center;
      top:9rem;

      .image{
        position: absolute;
        z-index: -1;
        @media only screen and (max-width: 500px) {
          width: 380px !important;
          height: 380px !important;
   
}
@media only screen and (max-width: 480px) {
          width: 320px !important;
          height: 320px !important;
   
}
     
      }
    }
    
    &__txt{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content:space-around;
      margin-top: -2rem;
  
      h1{
      color: white;
      font-weight: 700;
      word-spacing:.1rem;
     
      }
      .txt--1{
        font-size: 3rem; 
        @media only screen and (max-width: 650px) {
          font-size: 2rem; 
          margin-bottom: 1.9rem;
    }
    @media only screen and (max-width: 650px) {
          font-size: 1.8rem; 
          margin-bottom: 2.9rem;
    }
      }
      .txt--2{
        margin-top:-2.7rem;
        font-size: 3.6rem; 
        @media only screen and (max-width: 650px) {
          font-size: 1.9rem; 
    }
    @media only screen and (max-width: 650px) {
          font-size: 1.7rem; 
    }
      }
    }
    &__btn{
      display: flex;
      gap: 1.5rem;
      @media only screen and (max-width: 650px) {
          flex-direction :column;
          gap: 1rem;
    }
   
      a{
        text-decoration:none;
        padding: .7rem 2.5rem;
        border-radius: 4rem;
        outline: none;
        color: white;
        font-size: .7rem;
        font-weight: 600;
        letter-spacing:1px;
        text-align: center;

        @media only screen and (max-width: 650px) {
          padding: .5rem 1.8rem;
          font-size: .6rem;
          font-weight: 600;
    }
      }
      
      .btn__download{
        background:linear-gradient(180deg, #7200FF 0%, #2B0050 100%);
        transition: all .3s;
        border: 1px solid #2B0050;

        &:hover{
          transform: scale(1.1);
        }

      }
      .btn__prj{
        background:transparent;
        box-shadow: 4px 4px 15px -5px #000000;
        border:1px solid white;
        transition: all .3s;

        &:hover{
          background: gray !important;
          border:1px solid white;
          transform: scale(1.1);
          border: none;
      }
    }
  }

`