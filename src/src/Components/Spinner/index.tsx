import React from "react";
import {ClipLoader} from 'react-spinners'
import { useTheme } from "styled-components";


import { Container } from "./styles";

export const Spinner = () => {

    const theme = useTheme()

    
    return (
        <Container>
                <ClipLoader color={theme.colors.gray} />
        </Container>
    )
}