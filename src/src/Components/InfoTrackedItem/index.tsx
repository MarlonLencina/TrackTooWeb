import React from "react";
import { Container } from "./styles";
import { Icon } from '@iconify/react';

interface InfoTrackedItemProps {
    icon: string;
    title: string;
    info: string;
}


export const InfoTrackedItem = ({icon, title, info}: InfoTrackedItemProps) => {

    return (
        <Container>
                            <div>
                                <Icon icon={icon} />
                                <span>{title}o</span>
                            </div>
                            <span>
                                {info}
                            </span>
        </Container>
    )
}