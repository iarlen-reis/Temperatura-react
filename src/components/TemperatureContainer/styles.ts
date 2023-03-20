import styled from "styled-components";

interface IMainContainer {
  error: boolean;
}

export const MainContainer =
  styled.main <
  IMainContainer >
  `
  max-width: 48rem;
  max-height: 48rem;
  height: 100%;

  position: relative;

  display: flex;
  flex-direction: column;

  padding: 1rem;

  background-image: url("src/assets/TemperatureNow.png");
  background-position: center;
  background-size: cover;

  border-radius: 0.5rem;
  
    border: ${(props) => (props.error ? "1px solid red" : "none")} ;
`;

export const ImageMain = styled.img`
  position: absolute;
  max-width: 12rem;
  max-width: 12rem;

  top: -4rem;
  left: -4rem;

  @media (max-width: 548px) {
    max-width: 10rem;
    max-width: 10rem;

    top: -1rem;
    left: 0rem;
  }

  @media (max-width: 368px) {
    top: 0rem;

    max-width: 6rem;
    max-width: 6rem;
  }
`;

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;

  justify-content: end;

  padding: 2rem;

  p {
    display: flex;
    align-items: center;
    column-gap: 0.8rem;

    font-size: 1.2rem;
    text-transform: capitalize;

    color: ${({ theme }) => theme.colors.secundary};
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  align-items: center;

  justify-content: space-between;
`;

export const TemperatureContainer = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    display: flex;
    align-items: flex-start;
    column-gap: 1rem;
    color: ${({ theme }) => theme.colors.white};

    font-size: 8rem;

    span {
      font-size: 2rem;
      padding-top: 1.5rem;
    }
  }
`;

export const TemperatureDayContainer = styled.div`
  width: 100%;
  display: flex;

  align-items: center;
  justify-content: center;
  column-gap: 0.5rem;

  padding-right: 1.5rem;

  span {
    font-size: 1.8rem;
    font-weight: bold;
  }

  span:nth-child(1) {
    color: ${({ theme }) => theme.colors.white};
  }

  span:nth-child(2) {
    color: ${({ theme }) => theme.colors.secundary};
  }
`;

export const InfoDayContainer = styled.div`
  width: 100%;

  ul {
    display: flex;
    justify-content: space-between;
    list-style: none;

    column-gap: 1rem;
  }

  li {
    width: 100%;
    display: flex;

    align-items: center;
    justify-content: space-evenly;
    list-style: none;

    padding: 1rem;

    border-radius: 5px;
    background: rgba(109, 103, 208, 0.7);

    img {
      width: 3rem;
      height: 3rem;
    }

    div {
      display: flex;
      flex-direction: column;
    }

    p {
      color: ${({ theme }) => theme.colors.secundary};
      font-weight: bold;
    }

    p:nth-child(1) {
      font-size: 1.2rem;
    }

    p:nth-child(2) {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 345px) {
    li {
      padding: 0.5rem;

      img {
        width: 2rem;
        height: 2rem;
      }

      p:nth-child(1) {
        font-size: 1rem;
      }

      p:nth-child(2) {
        font-size: 1.2rem;
      }
    }
  }
`;

export const NotFoundContainer = styled.h2`
  font-size: 3rem;
  font-weight: bold;

  text-transform: uppercase;

  color: ${({ theme }) => theme.colors.tertiary};
`;
