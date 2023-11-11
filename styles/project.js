import styled from "styled-components";

export const Wrapper = styled.div`

color: white;
.project__box{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 20rem;

    h1{
        font-size: 61px;

        @media only screen and (max-width: 768px) {
            font-size: 41px; 
        }
    }
}
.about__link{
   
    display: flex;
    width: 100%;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    font-size: 1.2rem;

    .home{
       color: #B1B1B1
    }
    .txt{
        font-weight:500 ;
    }
}

`