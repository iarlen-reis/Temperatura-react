import styled from "styled-components";

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
