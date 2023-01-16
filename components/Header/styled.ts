import styled from "styled-components";

export const HeaderWrapper = styled.header`
display: flex;
height: 10vh;
align-items: center;
justify-content: center;
padding: 0.5rem;

.title{

    @media screen and (max-width: 800px){
        display: none
    }
color: #271A45;
text-align: center;
}
`
export const LogoWrapper = styled.div`
  @media screen and (min-width: 800px){
        display: none
    }
height: 100%;
width: 2rem;
position: relative;
`
