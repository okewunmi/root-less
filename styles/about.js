import styled from "styled-components";

export const Wrapper = styled.div`

.about__imgae{
width: 100%;
height: 20rem;
}
/* object-fit: contain; */
.about__heading{
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.95) 41%, rgba(0, 0, 0, 0.8) 100%);

    padding: 1rem 0;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    /* height: 935.97px; */
    /* gap: .1rem; */
 
}
.about__title{
   font-weight: 700;
   font-size: 3.4rem;
}
.about__txt{
    color: #B4B4B4;
    font-weight: 400;
    font-size: 1.2rem;
    margin-top: -.5rem;
}
.about__link{
    display: flex;
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
.about__cont{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 3rem;

    &--head{
        font-weight: 450;
        font-size: 2rem;
    }
    &--txt{
        padding: 0 8rem;
        font-size: 1rem;
        font-weight: 350;
        line-height: 1.9;
        letter-spacing: 1px;
        margin-top: -.4rem;
        text-align: justify;
    }
    &--big{
        padding-top: 3rem;
        font-size: 4rem;
    }
}
.about__skills{
    color: white;
    display: flex;
    /* flex-direction: column; */
    /* align-items: center; */

   
    &__image{
width: 50%;
.img{
    width: 80%;
    height: 24rem;
}
    }
    &__txt{
        display: flex;
        flex-direction: column;
        width: 50%;
        /* padding: 0 5rem 0 5rem; */
        /* justify-content: flex-start; */
        .head{
                font-weight: 700;
                font-size: 40px;
                }
        .skill{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            width: 70%;
            margin-bottom:1rem ;
            

            &--txt{
                display: flex;
                justify-content: space-between;
                /* align-items: center; */
                font-size: 16px;
                font-weight: 400;
                width: 100%;
               color:  #FFFFFF99;

                
            }
            .rule{
                border-bottom: 2px solid #F6B918;
                margin-top: -.4rem;
              
            }
            .__1{
                width: 69%;
            }
            .__2{
                width: 70%;
            }
            .__3{
                width: 75%;
            }
            
        }


    }
}
.skill__icons{
    display: flex;
   justify-content: center;
   width: 100%;
    align-items: center;
    gap: 5rem;
    padding: 4rem 0;
   
   
    

    .icon{
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 0 2rem;

        p{
            color: #FFFFFF;
            font-weight: 700;
            font-size: 24px;
        }


        .icons{
            width: 2.5rem;
            height: 2.5rem;
        }
    }
}


` 
export const Content = styled.div`



`