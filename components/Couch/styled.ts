import styled from 'styled-components'

export const Container = styled.div`
position: relative;
height: 50vw;
margin-top: 5rem;
width: 100vh;
`

export const Header = styled.header`
font-family: sans-serif;
`

export const BodyModel = styled.div`
  height: 100%;
  width: 100%;
  background-color: transparent;

  &:hover{
    cursor: grab;

  }

  &:active{
    cursor: grabbing;

  }
`

export const Button = styled.div`
position: absolute;
right:0;
top: 0;
`