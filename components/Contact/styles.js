import styled from "styled-components";
export const Wrapper =styled.div`
display: flex;
flex-direction: column;
align-items: center;
color: white;
padding-bottom:5rem;

.heading{
font-size: 2rem;
padding: 3rem 0;
}
.form{
    display: flex;
    flex-direction: column;
   
.btn{
    margin-top: 2rem;
    padding: .7rem 2.5rem;
    border-radius: 2rem;
    border: none;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: all .3s ease;
   
    &:hover{
        transform: scale(1.1);
        outline-offset: 2px;
    }
   
}
    &__name{
        padding: .5rem;
        height: 4rem;
    }
    &__message{
        padding: .5rem;
        height: 10rem;
    }
    
    label{
        font-size: 1.1rem;
        text-transform: uppercase;
        padding-bottom: .6rem;
       
    }
    input{
        outline: none;
        border: none;
        border-radius: .4rem;
        background: rgba(31, 31, 31, 1);
        margin-bottom:2rem ;
        color: white;
        font-size: .9rem;
        width: 30rem;
    }
    textarea{
        background: rgba(31, 31, 31, 1);
        outline: none;
        border: none;
        padding: .8rem;
        font-size: .9rem;
        border-radius: .4rem;
        width: 30rem;
        height: 10rem;
        color:white;
        word-spacing: 1px;

    }
.check{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    place-items: center;
   
}

}

`