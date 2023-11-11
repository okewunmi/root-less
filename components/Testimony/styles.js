import styled from "styled-components";

export const Wrapper = styled.div`
color:white;
background: linear-gradient(184.7deg, #40008F 0%, #2B0050 100%);
padding: 5rem 0 ;

@media only screen and (max-width: 786px) {
  h1{
    font-size: 1.5rem;

  }
  .txt{
    font-size: .9rem;
    margin-top: -.2rem;
  }
  
        }

@media only screen and (max-width: 1000px) {
  padding: 1rem 0 3rem 0 ;
        }

display:flex;
align-items:center;
flex-direction:column; 

.carousel-root {
  width: 95% !important;
  margin: auto !important;
  margin-top: 3% !important;
}

.carousel .slide {
  /* background: #fff !important; */
  color: black;
  height: 100%;
}

.carousel .slide img {
  width: 135px ;
  height: 135px ;
  object-fit: cover;
  border-radius: 50%;
  border: 8px solid #40008F !important;

  @media only screen and (max-width: 550px) {
    width: 100px ;
  height: 100px ;
        }
}

.myCarousel {
  background: #fafafa;
  margin-top: -6%;
  width: 54% !important;
  margin-left: auto;
  margin-right: auto;
  padding-top: 6%;
  padding-bottom: 8%;
  padding-left: 5%;
  padding-right: 5%;
  border: 1px solid #ddd;
  height: 300px !important;

  @media only screen and (max-width: 930px) {
    height: 340px !important;
        }
  /* border-radius: 1rem !important; */

  @media only screen and (max-width: 930px) {
 width: 80% !important;
        }
  @media only screen and (max-width: 500px) {
 width: 90% !important;
        }
}

.carousel .control-dots {
  padding-left: 5px !important;
  outline: 0;
  bottom: 5% !important;
}

.myCarousel h3 {
  color: #222;
  font-weight: 100;
  letter-spacing: 0.2px;
  margin-bottom: 4px;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 15px;
}

.myCarousel h4 {
  text-transform: uppercase;
  margin-top: 0;
  padding-top: 0;
  font-weight: 400;
  color: #787878;
  font-size: 12px;
}

.myCarousel p {
  font-weight: 100 !important;
  line-height: 22px !important;
  color: #222;
  font-size: 14px;
  font-family: sans-serif;
  max-height: 200px;
}

.myCarousel p:before {
  content: "“";
  color: #aaa;
  font-size: 26px;
  font-family: monospace;
  font-weight: 100;
}

.myCarousel p:after {
  content: "”";
  color: #aaa;
  font-size: 26px;
  font-family: monospace;
  font-weight: 100;
  line-height: 0;
}

.carousel .control-dots .dot {
  box-shadow: none !important;
  background: #454545 !important;
  outline: 0;
}

.carousel.carousel-slider .control-arrow {
  background: rgba(31, 31, 31, 1) !important;
  height: 50px !important;
  position: absolute;
  top: 35% !important;
}

.App {
  text-align: center;
}

@media only screen and (max-width: 934px) {
  .carousel-root {
    outline: 0;
    width: 93% !important;
    margin: auto !important;
  }

  .carousel.carousel-slider .control-arrow {
    display: none !important;
  }
  .myCarousel {
    background: #fafafa;
    margin-top: -9%;
    width: 88%;
    margin-left: auto;
    margin-right: auto;
    padding-top: 8%;
    padding-bottom: 12.5%;
    padding-left: 5%;
    padding-right: 5%;
    border: 1px solid #ddd;
    height: 269px;
  }

  .carousel .slide img {
    width: 24% !important;
    border-radius: 50%;
  }
}


`