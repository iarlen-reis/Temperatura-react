import styled from "styled-components";

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
