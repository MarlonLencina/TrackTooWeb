import React, { ButtonHTMLAttributes, Children } from "react";

import { Container } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    buttonType: 'filledGray' | 'filledLight' | 'outlinedLight'
}

export const Button = ({title, buttonType, ...rest}: ButtonProps) => {

    return (

        <Container buttonType={buttonType} {...rest}>
            {title}
        </Container>
    )
}