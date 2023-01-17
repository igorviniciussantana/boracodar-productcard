import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 0.5rem;
`;

export const Code = styled.p`
  color: #271a45;
`;

export const Title = styled.h1`
  color: #271a45;
`;

export const Price = styled.p`
  color: #271a45;
  opacity: 0.67;
`;

export const Button = styled.button`
  color: #271a45;
  opacity: 0.67;
  background: transparent;
  text-transform: uppercase;
  border: 1px solid #271a45;
  border-radius: 16rem;
  padding: 0.75rem 0;
  width: 60%;
  font-size: 0.75rem;

 cursor: pointer;
`;
