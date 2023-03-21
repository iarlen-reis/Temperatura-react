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

  background-image: url("https://files.fm/thumb_show.php?i=9ab5reh6c");
  background-position: center;
  background-size: cover;

  border: ${(props) => (props.error ? "1px solid red" : "none")};

  box-shadow: ${(props) =>
    props.error ? "rgba(255, 0, 0, 0.35) 0px 5px 15px" : "none"};

  border-radius: 0.5rem;
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

export const NotFoundContainer = styled.h2`
  font-size: 3rem;
  font-weight: bold;

  text-transform: uppercase;

  color: ${({ theme }) => theme.colors.tertiary};
`;
