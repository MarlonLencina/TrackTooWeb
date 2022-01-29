import styled from "styled-components";

export const Container = styled.button`

background: transparent;
padding: 20px;
display: flex;
flex-direction: column;
border: 2px solid ${props => props.theme.colors.gray};
border-radius: 10px;
text-align: unset;

`

export const TrackTitle = styled.h2`

color: ${props => props.theme.colors.red};
font-weight: ${props => props.theme.fonts.semiBold};

`

export const TrackInfo = styled.div`

display: flex;
flex-direction: column;

> strong {
    color: ${props => props.theme.colors.gray};

}

> time {
    color: ${props => props.theme.colors.gray};
}

`
