import styled from "styled-components";

export const Wrappers = styled.div`
  display: flex;
  background: #0f0f0f;
  flex-direction: column;
  /* margin-top: 4rem; */
  padding-bottom: 1rem;

  .project {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    margin: 4rem 0;
    @media only screen and (max-width: 768px) {
      margin: 1rem 0;
    }

    &__head {
      color: white;
      font-weight: 700;
      font-size: 2.2rem;

      @media only screen and (max-width: 768px) {
        font-size: 1.7rem;
      }
    }
    &__txt {
      margin-top: -0.6rem;
      color: rgba(180, 180, 180, 1);
      font-weight: 400;
      font-size: 1rem;
      text-align: center;
    }
  }
  .link {
    padding-top: 3rem;
    color: white;
    display: flex;
    align-self: center;
    font-size: large;
    font-weight: 500;

    a {
      color: rgba(246, 185, 24, 1);
    }
  }
  .box {
    background: rgba(39, 40, 46, 1);
    display: flex;
    flex-direction: column;
    padding: 1rem;
    border-radius: 0.5rem;
    width: 30rem;
    height: 40rem;
    justify-content: space-between;

    @media only screen and (max-width: 600px) {
      width: 19rem;
      height: 31rem;
    }

    &__text {
      padding: 0 1rem;
      /* display: flex;
    flex-direction: column; */

      &--big {
        color: white;
        font-weight: 700;
        margin-top: -0.5rem;
      }
      &--small {
        color: rgba(147, 110, 255, 1);
        font-weight: 500;
        font-size: 0.85rem;
      }
      &--small-2 {
        color: rgba(206, 206, 206, 1);
        font-size: 0.75rem;
        font-weight: 400;
        margin-top: -0.4rem;
      }
    }
    &__btn {
      margin-left: 1rem;
      padding: 2rem 0 1rem 0;

      .btn {
        padding: 0.7rem 2.3rem;
        outline: 0.13rem solid white;
        border-radius: 3rem;
        background: none;
        color: white;
        font-weight: 600;
        font-size: 0.75rem;
        transition: all 0.3s;

        &:hover {
          background-color: white;
          color: black;
          outline-offset: 5px;
          font-weight: 600;
          font-size: 0.75rem;
        }
      }
    }
  }
`;
export const Wrapper = styled.div`
  display: flex;
  background: #000000cf;
  flex-direction: column;
  /* margin-top: 4rem; */
  padding-bottom: 1rem;

  .otherBckground {
    background: #0f0f0f;
  }

  .project {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    margin: 4rem 0;
    @media only screen and (max-width: 768px) {
      margin: 1rem 0;
    }

    &__head {
      color: white;
      font-weight: 700;
      font-size: 2.2rem;
      @media only screen and (max-width: 768px) {
        font-size: 1.7rem;
      }
    }
    &__txt {
      margin-top: -0.6rem;
      color: rgba(180, 180, 180, 1);
      font-weight: 400;
      font-size: 1rem;
      text-align: center;
      @media only screen and (max-width: 600px) {
        padding: 0 1rem;
      }
    }
  }
  .link {
    padding-top: 3rem;
    color: white;
    display: flex;
    align-self: center;
    font-size: large;
    font-weight: 500;

    a {
      color: rgba(246, 185, 24, 1);
    }
  }
`;
export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1rem;
  padding: 0 12rem;
  place-items: center;

  @media only screen and (max-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(1, 1fr);
    place-items: center;
    padding: 0;
  }

  .grid__img {
    @media only screen and (max-width: 600px) {
      width: 270px;
      height: 270px;
    }
  }

  .box {
    background: rgba(39, 40, 46, 1);
    display: flex;
    flex-direction: column;
    padding: 1rem;
    border-radius: 0.5rem;
    width: 30rem;
    height: 40rem;
    justify-content: space-between;

    @media only screen and (max-width: 600px) {
      width: 19rem;
      height: 31rem;
    }

    &__text {
      padding: 0 1rem;
      /* display: flex;
      flex-direction: column; */

      &--big {
        color: white;
        font-weight: 700;
        margin-top: -0.5rem;
      }
      &--small {
        color: rgba(147, 110, 255, 1);
        font-weight: 500;
        font-size: 0.85rem;
      }
      &--small-2 {
        color: rgba(206, 206, 206, 1);
        font-size: 0.75rem;
        font-weight: 400;
        margin-top: -0.4rem;
      }
    }
    &__btn {
      margin-left: 1rem;
      padding: 2rem 0 1rem 0;

      .btn {
        padding: 0.7rem 2.3rem;
        outline: 0.13rem solid white;
        border-radius: 3rem;
        background: none;
        color: white;
        font-weight: 600;
        font-size: 0.75rem;
        transition: all 0.3s;

        &:hover {
          background-color: white;
          color: black;
          outline-offset: 5px;
          font-weight: 600;
          font-size: 0.75rem;
        }
      }
    }
  }
`;
