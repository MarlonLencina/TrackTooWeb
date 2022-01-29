import { endianness } from "os";
import styled from "styled-components";


export const Container = styled.div`

min-height: 100vh;
background: ${props => props.theme.colors.white};
display: flex;
flex-direction: column;

`

export const Header = styled.div`

background: ${props => props.theme.colors.red};
padding: 10px;
width: 100%;
position: relative;
z-index: 2;
`

export const Wrapper = styled.div`

background: ${props => props.theme.colors.red};
max-width: 1280px;
margin: 0 auto;
display: flex;
align-items: center;
justify-content: space-between;

> button {
    background: transparent;
    border: none;
    > svg {
    color: ${props => props.theme.colors.white};
    font-size: 24px;
}

}
`


export const Content = styled.div`

max-width: 1280px;
margin: 0 auto;
padding: 20px 10px;
display: flex;
flex-direction: column;
flex: 1;
align-items: center;
justify-content: center;

`


export const User = styled.div`

display: flex;
flex-direction: column;
align-items: center;



`

export const UserProfile = styled.div``

export const Form = styled.div`

margin-top: 40px;

> button {
    margin-top: 40px;
    width: 100%;
    border: 2px solid ${props => props.theme.colors.gray};
}

`

export const AvatarWrapper = styled.div`

> label {
    > input {

    display: none;
    }  
}


`
export const  Avatar = styled.figure`


width: 150px;
height: 150px;
position: relative;
cursor: pointer;


> img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 24px;
}

> svg {
    position: absolute;
    bottom: 0;
    right: 0;
    color: ${props => props.theme.colors.gray};
    padding: 10px;
    background: ${props => props.theme.colors.white};
    font-size: 48px;
    border-radius: 50%;
}

`
