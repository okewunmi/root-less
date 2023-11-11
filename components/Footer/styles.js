import styled from "styled-components";

export const Wrapper = styled.div`

display: flex;
justify-content: space-between;
align-items: center;
padding: 2rem 10rem;
color: rgba(255, 255, 255, 0.8);
@media only screen and (max-width: 1100px) {
    padding: 2rem 5rem;
}
@media only screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    padding: 2rem 0;
}

.name{
    display: flex;
    flex-direction: column;
   
    @media only screen and (max-width: 768px) {
    align-items: center;
    padding: 2rem ;
    border-bottom: 1px solid grey ;
  
}
  

    &__head{
        font-size: 2rem;
        font-weight: 500;

        @media only screen and (max-width: 768px) {
            
            font-size: 1.5rem;
        }
    }

    &__txt{
        padding: .5rem 0;
        font-size: 1rem;
        @media only screen and (max-width: 768px) {
            text-align: center;
            margin-top: -1rem;
            font-size: .9rem;
        }
    }

    &__nav{
        display: flex;
        gap: 1rem;
        
        @media only screen and (max-width: 768px) {
            gap: .5rem;
                
        }
        .link{
            font-weight: bolder;

            @media only screen and (max-width: 768px) {
                font-weight: bold;
                font-size: .8rem;
                
        }
            &:hover{
                color: #c18469;
            }

        }   
    }
}
.social{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    gap: .6rem;

    @media only screen and (max-width: 768px) {
    margin-top: 2rem;
    flex-direction: column-reverse;
}

    .menu__icons{
        padding: 0px 20px;
      gap: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-bottom: 1rem;

      .icon {
        
        font-size: 1.5rem;
        transition: all 0.3s;

        &:hover {
          color: #c18469;
        }
    }
}
}
` ;