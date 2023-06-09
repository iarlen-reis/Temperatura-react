import styled from "styled-components";

export const HomeStyled = styled.div`
  width: 100%;
  height: 100vh;

  background: ${({ theme }) => theme.colors.primary};
  background-image: url("https://files.fm/thumb_show.php?i=fhscaduvv");
  background-position: center;
  background-size: cover;
`;

export const HomeContainerStyled = styled.div`
  display: flex;
  flex-direction: column;

  row-gap: 3rem;
  max-width: 480px;
  width: 100%;
  height: 48rem;

  margin: 0 auto;
  padding: 1rem;

  @media (max-width: 548px) {
    row-gap: 1rem;
  }
`;

interface IFormProps {
  error: boolean;
}

export const FormStyled =
  styled.form <
  IFormProps >
  `
  display: flex;
  column-gap: 1rem;

  margin-top: 10rem;

  input {
    width: 75%;
    padding: 1rem 1.5rem;

    outline: none;

    border: ${(props) => (props.error ? "1px solid red" : "none")};
    border-radius: 0.4rem;
    
    box-shadow: ${(props) =>
      props.error ? "rgba(255, 0, 0, 0.35) 0px 5px 15px" : "none"};
  }

  button {
    width: 25%;

    text-transform: uppercase;

    font-size: 1.3rem;
    font-weight: 600;

    border: ${(props) => (props.error ? "1px solid red" : "none")};
    border-radius: 0.4rem;

    box-shadow: ${(props) =>
      props.error ? "rgba(255, 0, 0, 0.35) 0px 5px 15px" : "none"};

    cursor: pointer;
    transition: 0.7s;

    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.tertiary};

    &:hover {
      background: ${({ theme }) => theme.colors.secundary};
    }

    &:disabled {
      background: gray;
    }
  }

  @media (max-width: 400px) {
    input::placeholder {
      font-size: 1rem;
    }
  }

  @media (max-width: 548px) {
    margin-top: 4rem;
  }

  @media (max-width: 388px) {
    button {
      width: 30%;

      font-size: 1.2rem;
    }
  }

  @media (max-width: 330px) {
    button {
      font-size: 1.1rem;
    }

    input::placeholder {
      font-size: 0.8rem;
    }
  }
`;
