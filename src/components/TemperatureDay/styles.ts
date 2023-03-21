import styled from "styled-components";

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
