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

export const CouchWrapper = styled.div`
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

export const CouchImageWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding: 1rem;
width: 100%;
height: 100%;

img{
  width: 80%;
}
`