import styled from "styled-components";

export const Wrapper = styled.div`
padding-top:10rem;
/* min-height:10vh; */
padding-bottom:4rem;

@media only screen and (max-width: 1000px) {
    padding-top:2rem;
    padding-bottom:0rem;
    }

`
export const Content = styled.div `
display: flex;
background: #000000cf;

@media only screen and (max-width: 1000px) {
       flex-direction: column;
       align-items: center;
    }


.txt__box{
    width:60%;
    color:white;
    padding: 0rem 0 0 9rem;
    display: flex;
    flex-direction: column;
    @media only screen and (max-width: 1200px) {
        padding:  0 1.2rem;
    }
    @media only screen and (max-width: 992px) {
        width:100%;
    }
   

    .txt__heading{
        /* width:95%; */
        font-size: 2.2rem;
        font-weight:700;
        word-spacing:1px;
        @media only screen and (max-width: 992px) {
            font-size: 1.4rem;
            word-spacing:0px;
    }
        
    }
    .txt__small{
        margin-top: -.6rem;
        font-size:.9rem;
        width:75%;
        line-height:1.6;
        font-weight: 400;
        color:rgba(204, 204, 204, 1);
        @media only screen and (max-width: 992px) {
            width:100%;
            font-size:.9rem;
    }
    @media only screen and (max-width: 786px) {
            font-size:14px;
            margin-top:.1rem;
    }
    }
    .txt__icons{
        display: flex;
        flex: 1;
        gap: 1rem;
        /* width: 10%; */
        
        .icon{
            display: flex;
            justify-content: space-around;
            background: rgba(128, 128, 128, 0.16);
            border-radius: 1.4rem;
            padding: 0 1.1rem;
            font-size: .8rem;
            font-weight: 400;
            display: flex;
            align-items: center;
            color: rgba(255, 255, 255, 0.8);
            .svg{
                padding-right: .5rem;
                
               
                /* fill: #E0E0E0; */
            }
        }
    }
}

.image__box{
    width:40%;
    height:auto;
    border-radius:480px 0px 0px 480px;
    justify-self:flex-end;
    background: linear-gradient(180deg, #E0E0E0 0%, #000000 100%);
    display: flex;
    align-items: center;
    @media only screen and (max-width: 1000px) {
        width:100%;
        border-radius:0px 0px 0px 0px;
        background: #000000;
       display: none;
    }

.img{
margin-left: 8rem;
@media only screen and (max-width: 1200px) {
    margin-left: 3rem;
    border-radius:140px 0px 0px 140px;
                }
    @media only screen and (max-width: 1000px) {
        margin-left: none;
        border-radius:0px 0px 0px 0px;
        width: 100%;
       
    }

}

}
.icon__box{
    gap: .8rem;
    display: flex;
    flex-direction: column;
    @media only screen and (max-width: 986px) {
     display: none;
    }
}

`
export const Service = styled.div`
display: flex;
margin: 7rem 0 0 0;
gap:1.5rem;
flex-wrap: wrap;
/* align-items:center; */
justify-content: center;

@media only screen and (max-width: 786px) {
    margin: 4rem 0 0 0;
    
                }

.service{
    background: linear-gradient(184.7deg, #40008F 0%, #2B0050 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 19rem;
    height: 13rem;
    border-radius: .5rem;
    color: white;
    padding: 1rem;
   

    @media only screen and (max-width: 786px) {
    width:17rem ;
    
                }
    

    &__txt{
        display: flex;
        flex-direction: column;
        align-items: center;

        h3{
            font-size: 1.35rem;
            @media only screen and (max-width: 786px) {
                font-size: 1.2rem;
                }
        }
    
        p{
            font-size: .75rem;
            font-weight: 500;
            line-height: 1.3;
            text-align: center;
            margin-top: -.5rem;
            /* letter-spacing: 1px; */
            @media only screen and (max-width: 786px) {
                /* font-size: .8rem; */

                }
            
        }
        
    }


}

`