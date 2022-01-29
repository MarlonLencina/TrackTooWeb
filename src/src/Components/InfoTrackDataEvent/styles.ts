import styled from "styled-components";

export const Container = styled.div`


background: #fff;
padding: 12px 20px;

& + div {
    margin-top: 8px;
}

`

export const Title = styled.h1`

font-size: 18px;
color: ${props => props.theme.colors.gray};
font-weight: ${props => props.theme.fonts.medium};

`


export const SubTitle = styled.h2`

font-size: 14px;
color: ${props => props.theme.colors.red};
font-weight: ${props => props.theme.fonts.regular};


`


export const InfoDate = styled.div`

display: flex;
align-items: center;
justify-content: space-between;
margin-top: 12px;



`


export const DateTrack = styled.span`

font-size: 14px;
color: ${props => props.theme.colors.gray};
font-weight: ${props => props.theme.fonts.medium};

`


export const HourTrack = styled.span`

font-size: 14px;
color: ${props => props.theme.colors.gray};
font-weight: ${props => props.theme.fonts.medium};
`

