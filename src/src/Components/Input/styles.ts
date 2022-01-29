import styled, { css } from "styled-components";

interface InputProps {
    outline?: boolean;
}

export const Container = styled.div<InputProps>`

background: ${props => props.theme.colors.white};
padding: 16px 20px;
border-radius: 10px;
display: flex;
align-items: center;

> input {
    background: ${props => props.theme.colors.white};
    border: none;
    color: ${props => props.theme.colors.snow};
    outline: 0;

}

> svg {
    margin-right: 12px;
    font-size: 24px;
    color: ${props => props.theme.colors.snow};
}

& + div {
    margin-top: 10px;
}

${props => props.outline && css`

border: 2px solid ${props => props.theme.colors.snow};

`}

`