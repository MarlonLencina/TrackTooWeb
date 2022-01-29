import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../../Components/Logo";

import {Container} from "./styles"

export const PageNotFound = () => {

    return (
        <Container>
            <Link to={'/'}>
            <Logo/>
            </Link>
            <h1> =( Não encontramos essa página, <br /> volte a nossa página inicial <br /> clicando na logo da trackTOO.</h1>
        </Container>
    )
}