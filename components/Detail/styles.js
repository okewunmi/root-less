import styled from "styled-components";

export const Wrapper = styled.div`
padding-top:10rem;
/* min-height:10vh; */
padding-bottom:4rem;

`
export const Content = styled.div `
display: flex;
background: #000000cf;



.txt__box{
    width:60%;
    color:white;
    padding: 0rem 0 0 9rem;
    display: flex;
    flex-direction: column;
   

    .txt__heading{
        /* width:95%; */
        font-size: 2.2rem;
        font-weight:700;
        word-spacing:1px;
        
    }
    .txt__small{
        margin-top: -.6rem;
        font-size:.9rem;
        width:75%;
        line-height:1.6;
        font-weight: 400;
        color:rgba(204, 204, 204, 1);
    }
    .txt__icons{
        display: flex;
        flex: 1;
        gap: 1rem;
        /* width: 10%; */
        
        .icon{
            display: flex;
            align-items: center;
            justify-content: space-around;
            background: rgba(128, 128, 128, 0.16);
            border-radius: 1.4rem;
            padding: 0 1.1rem;
            font-size: .8rem;
            font-weight: 400;
            display: flex;
            align-items: center;
            justify-content: space-around;
           color: rgba(255, 255, 255, 0.8);
;
            
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

.img{
margin-left: 8rem;
}

}
.icon__box{
    gap: .8rem;
    display: flex;
    flex-direction: column;
}

`