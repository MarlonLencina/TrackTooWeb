import React, { InputHTMLAttributes, forwardRef, useState, FormEvent } from "react";

import { Icon } from '@iconify/react';

import {Container} from "./styles"
import { useForm } from "react-hook-form";


interface Props extends InputHTMLAttributes<HTMLInputElement> {
    iconName?: string;
    outline?: boolean;
}

const InputBase: React.ForwardRefRenderFunction<HTMLInputElement, Props> = ({outline, iconName, ...rest}, ref) => {

    // const [isFocused, setIsFocused] = useState(false)

   /*  const handleFocus = () => {
        setIsFocused(oldState => !oldState)
    } */

    return (
        <Container outline={outline} >
            {
                iconName && <Icon icon={iconName} />
            }
            <input ref={ref} {...rest} />
        </Container>
    )
}

export const Input = forwardRef(InputBase)