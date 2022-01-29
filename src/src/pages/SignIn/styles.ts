import styled from "styled-components";
import deliveryPhoto from "../../assets/deliverybackground.png"


export const Container = styled.div`

background: ${props => props.theme.colors.red};
display: flex;
min-height: 100vh;

`


export const Background = styled.div`

  background-image: url(${deliveryPhoto});
  background-repeat: no-repeat;
  background-size: cover;

  > h1 {
      color: ${props => props.theme.colors.white};
      padding: 20px;
    }

display: none;


  @media (min-width: 700px){
      
  width: 50%;
  height: 100vh;
  display: flex;
  align-items: flex-end;
  
}

  @media (min-width: 1000px){
    width: 65%;

  }

`



export const Box = styled.div`

flex: 1;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

> a  {
  > img {
  margin-bottom: 80px;
  width: 170px;
}}

`

export const Logo = styled.img`
width: 175px;
`

export const Form = styled.form`

display: flex;
flex-direction: column;

> button {
    margin-top: 40px;
    width: 100%;
}

`

export const Options = styled.div`

margin-top: 40px;
display: flex;
flex-direction: column;
align-items: center;

> a {
    text-decoration: none;
    color: ${props => props.theme.colors.white};
}

> span {
    margin: 8px 0;
    color: ${props => props.theme.colors.white};
    font-size: 18px;
    font-weight: ${props => props.theme.fonts.semiBold};
    display: flex;
    align-items: center;

    &::after {
        margin-left: 8px;
        content: '';
        height: 4px;
        width: 40px;
        background: ${props => props.theme.colors.gray};
    }

    &::before {
        margin-right: 8px;
        content: '';
        height: 4px;
        width: 40px;
        background: ${props => props.theme.colors.gray};
    }
}

`