import styled from "styled-components";

export const Container = styled.div`

min-height: 100vh;
background: ${props => props.theme.colors.red};
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

> a {
    > img {
        width: 170px;
    }
}

> h1 {
    color: ${props => props.theme.colors.white};
    margin-top: 28px;
}

`