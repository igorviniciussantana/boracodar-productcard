import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  height: 100%;
  max-height: 60vh;
  min-width: 50%;
`;

export const Header = styled.header`
  font-family: sans-serif;
`;

export const CouchWrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: transparent;

  &:hover {
    cursor: grab;
  }

  &:active {
    cursor: grabbing;
  }
`;

export const Button = styled.div`
  position: absolute;
  right: 0;
  top: 20%;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    transform: scale(1.1);
    transition: 0.5s;
  }
`;

export const CouchImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  img {
    width: 80%;
  }
`;

export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  width: 100%;
  height: 100%;

  img {
    filter: blur(2px);
  }
  p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%);
  }
`;
