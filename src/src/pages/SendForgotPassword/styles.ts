import styled from "styled-components";


import background from '../../assets/backgroundpassword.png'

export const Container = styled.div`

background: ${props => props.theme.colors.red};
min-height: 100vh;
display: flex;
flex-direction: column;

`

export const BackgroundPassword = styled.div`

background-image: url(${background});
background-size: cover;
background-repeat: no-repeat;
background-position: center;
width: 100%;
height: 300px;


> div {

    max-width: 1280px;
    margin: 0 auto;
    height: 100%;
    display: flex;
    align-items: flex-end;
    padding: 20px;

    > h1 {

        color: ${props => props.theme.colors.white};
        font-size: 28px;


        @media (min-width: 550px) {
            font-size: 36px;

        }

}

}

@media (min-width: 550px) {
    height: 400px;

}


`


export const Box = styled.div`

flex: 1;
max-width: 400px;
margin: 0 auto;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

> span {
    font-size: 16px;
    color: ${props => props.theme.colors.white};
    text-align: center;    margin-bottom: 25px;

}

> img {
    width: 170px;
    margin-bottom: 25px;
}

`


export const Form = styled.form`


> input {

}
> button {
    margin-top: 20px;
    width: 100%;
}
`