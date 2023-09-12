import styled from "styled-components";

export const Wrapper = styled.div`

display: flex;
justify-content: space-between;
align-items: center;
padding: 2rem 10rem;
color: rgba(255, 255, 255, 0.8);

.name{
    display: flex;
    flex-direction: column;
  

    &__head{
        font-size: 2rem;
        font-weight: 500;
    }

    &__txt{
        padding: .5rem 0;
        font-size: 1rem;
    }

    &__nav{
        display: flex;
        gap: 1rem;
        
        
        li{
            list-style: none;
            font-size: 1rem;
        }

        a{
            text-decoration: none;
        }

    }
}
.social{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    gap: .6rem;

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