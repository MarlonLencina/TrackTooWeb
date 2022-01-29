import styled, {css} from "styled-components";

interface PropsButton {
    buttonType: 'filledGray' | 'filledLight' | 'outlinedLight'
}

const buttonType = {
    filledGray: css`
        background-color: ${props => props.theme.colors.gray};
        color: ${props => props.theme.colors.snow};
    `,
    filledLight: css`
        background-color: ${props => props.theme.colors.snow};
        color: ${props => props.theme.colors.gray};
    `,
    outlinedLight: css`
        background-color: transparent;
        color: ${props => props.theme.colors.snow};
        border: 2px solid ${props => props.theme.colors.snow};
    `

}

export const Container = styled.button<PropsButton>`

    padding: 12px 20px;
    border-radius: 10px;
    font-size: 22px;
    transition: .2s;
    border: none;
    ${props => props.buttonType && buttonType[props.buttonType]}



    &:hover {
        filter: brightness(0.9);
        transform: translateY(2px)
    }

`