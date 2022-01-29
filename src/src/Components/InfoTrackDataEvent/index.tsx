import React from "react";

import { Container, Title, SubTitle, InfoDate, DateTrack, HourTrack } from "./styles";

interface InfoTrackDataEventProps {
    title: string; subtitle: string; date: string; hour: string;
}

export const InfoTrackDataEvent = ({title, subtitle, date, hour}: InfoTrackDataEventProps) => {


    return (
        <Container>
            <Title>{title}</Title>
            <SubTitle>{subtitle}</SubTitle>
            <InfoDate>
                <DateTrack>
                    {date}
                </DateTrack>
                <HourTrack>
                    {hour}
                </HourTrack>
            </InfoDate>
        </Container>
    )
}