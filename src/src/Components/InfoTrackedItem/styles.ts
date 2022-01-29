import styled from "styled-components";

export const Container = styled.li`

> div {

display: flex;
align-items: center;
margin-bottom: 12px;

> svg {
    font-size: 24px;
    color: ${props => props.theme.colors.gray};
    margin-right: 12px;
}

> span {
    color: ${props => props.theme.colors.gray};
    font-size: 18px;
}
}

> span {
color: ${props => props.theme.colors.red};
font-size: 18px;
font-weight: ${props => props.theme.fonts.semiBold};
}

`