import React, { ButtonHTMLAttributes } from "react";
import { Container, TrackTitle, TrackInfo } from "./styles";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{
    title: string;
    created_at: string;
}

export const TrackCard = ({title, created_at, ...rest}: Props) => {

    return (
        <Container {...rest} >
            <TrackTitle>
            {title}
            </TrackTitle>
            <TrackInfo>
            <strong>Correios</strong>
            <time>{created_at}</time>
            </TrackInfo>
        </Container>
    )
}