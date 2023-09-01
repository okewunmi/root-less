import styled from "styled-components";

export const Navbar = styled.div`
  color: #ffff;
  padding: 0 2rem;
  height: 97px;
  display: flex;
  align-items: center;
  padding: 11px 39.4100341796875px 11px 39.38999938964844px;
  justify-content: space-between;

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
    }
    hr {
      width: 45px;
      height: 3px;
      top: 17.5px;
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
    }

    &__txt {
      width: 68.02px;
      height: 21px;
      top: 14px;
      left: 60px;
      padding-left: 5px;
    }

    &__icons {
      padding: 0px 3px;
      gap: 6px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &__icon {
      // padding: 9px;
    }
  }
`;
