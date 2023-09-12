import styled from "styled-components";

export const Navbar = styled.div`
  color: #ffff;
  padding: 0 4rem;
  height: 15vh;
  display: flex;
  align-items: center;
  padding: 1rem 3rem;
  justify-content: space-between;
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

    a {
      text-decoration: none;
      height: 50px;
    }
    &__line {
      display: flex;
      flex-direction: column;
      /* justify-content: space-around; */
      align-items: center;

      &__btn {
        font-size: 2.4rem;
        color: #c18469;
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
      padding-left: 0.8rem;
      font-size: 1.1rem;
    }

    &__icons {
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
