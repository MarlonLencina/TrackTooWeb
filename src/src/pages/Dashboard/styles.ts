import { endianness } from "os";
import styled from "styled-components";
import { ModalAdd } from "../../Components/ModalAdd";

interface SiderbarProps {
    isSidebarOpen: boolean;
}

export const Container = styled.div`

min-height: 100vh;
background: ${props => props.theme.colors.white};
position: relative;

`

export const Header = styled.div`

background: ${props => props.theme.colors.red};
padding: 10px;
width: 100%;
position: relative;
z-index: 2;
`

export const Wrapper = styled.div`

background: ${props => props.theme.colors.red};
max-width: 1280px;
margin: 0 auto;
display: flex;
align-items: center;
justify-content: space-between;

`


export const User = styled.div`

display: flex;
align-items: center;

>   button {

    background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;

> svg {

    font-size: 36px;
    color: ${props => props.theme.colors.white};

}}

`

export const UserAvatar = styled.img`

width: 50px;
height: 50px;
border-radius: 50%;
margin-right: 24px;
object-fit: cover;

`

export const ContentUser = styled.div`

background: ${props => props.theme.colors.red};
width: 100%;

`


export const ContentUserWrapper = styled.div`

padding: 20px 10px;
max-width: 1280px;
margin: 0 auto;
display: flex;
flex-direction: column;



> h1 {
    font-size: 36px;
    color: ${props => props.theme.colors.white};
    margin: 20px 0;
}

@media (min-width: 550px){

display: flex;
flex-direction: row;
justify-content: space-between;

> button {
    align-self: center;
}
}
@media (min-width: 1000px){

display: flex;
flex-direction: row;
justify-content: space-between;

> button {
    align-self: flex-end;
}

}

`



export const ContentTrackWrapper = styled.div`

max-width: 1280px;
margin: 0 auto;
padding: 0 10px;

> h1 {

color: ${props => props.theme.colors.gray};
font-weight: ${props => props.theme.fonts.medium};
font-size: 24px;
margin: 20px 0;

}

`
export const TracksWrapper = styled.div`

display: grid;
grid-template-columns: 1fr;
padding-bottom: 20px;
gap: 10px;


@media (min-width: 450px){
    grid-template-columns: 1fr 1fr;
}

@media (min-width: 800px){
    grid-template-columns: 1fr 1fr 1fr;
}

`

export const SideBar = styled.div<SiderbarProps>`

background: ${props => props.theme.colors.snow};
position: absolute;
top: ${props => props.isSidebarOpen ? '70px' : '-100px'};
left: 0;
right: 0;
transition: .4s;
z-index: 1;
`

export const SideBarWrapper = styled.ul`

max-width: 1280px;
margin: 0 auto;
padding: 24px 10px;
display: flex;
flex-direction: column;
align-items: flex-end;



@media (min-width: 550px){
    flex-direction: row;
    justify-content: flex-end;

}

`

export const Item = styled.li`

list-style: none;
display: flex;
align-items: center;

@media (max-width: 550px){
        & + li {
        margin-top: 12px;
        }
    }

    @media (min-width: 550px){
        & + li {
        margin-left: 36px;
        }
    }

`

export const ItemButton = styled.button`

cursor: pointer;
display: flex;
align-items: center;
background: transparent;
border: none;

    > svg {

        font-size: 24px;
        color: ${props => props.theme.colors.gray};
        margin-left: 8px;
    }

    > span {
        color: ${props => props.theme.colors.gray};
        font-weight: ${props => props.theme.fonts.medium};
        font-size: 18px;
    }

`

export const ModalAddTrack = styled(ModalAdd)`

`

export const WrapperModal = styled.div`

width: 250px;
height: 500px;
background: ${props => props.theme.colors.white};
padding: 36px 20px;
display: flex;
flex-direction: column;

@media (min-width: 350px){
    width: 330px;
}

@media (min-width: 500px){
    width: 450px;
}

> h1 {
    color: ${props => props.theme.colors.gray};
    font-weight: ${props => props.theme.fonts.medium};
    font-size: 24px;
    margin: 20px 0;
}

`
export const ModalForm = styled.form`

width: 100%;
flex: 1;
display: flex;
flex-direction: column;
justify-content: center;

> button {
    width: 100%;
    margin-top: 80px;
}

`

export const ModalInfoTrack = styled(ModalAdd)`

width: 900px;

`

export const WrapperModalInfoTrack = styled.div`

overflow: hidden;
width: 250px;
height: 500px;
background: ${props => props.theme.colors.white};
padding: 36px 20px;
display: flex;
flex-direction: column;


@media (min-width: 350px){
    width: 330px;
}

@media (min-width: 500px){
    width: 650px;

}

> h1 {
    color: ${props => props.theme.colors.red};
    font-weight: ${props => props.theme.fonts.semiBold};
    font-size: 36px;
    margin: 20px 0;
}


`

export const InfoTrack = styled.div`

overflow: hidden;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100%;

@media (min-width: 550px){
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

}

`

export const InfoTrackData = styled.ul`


display: flex;
flex-direction: column;
justify-content: space-between;


`

export const InfoTracked = styled.ul`

height: 350px;
list-style: none;
display: flex;
flex-direction: column;
justify-content: space-around;
align-self: flex-start;

`

export const InfoTrackedItem = styled.li`

> div {

    display: flex;
    align-items: center;
    margin-bottom: 12px;

    > svg {
        font-size: 24px;
        color: ${props => props.theme.colors.gray};
        margin-right: 12px;
    }

    > span {
        color: ${props => props.theme.colors.gray};
        font-size: 18px;
    }
}

> span {
    color: ${props => props.theme.colors.red};
    font-size: 18px;
    font-weight: ${props => props.theme.fonts.semiBold};
}

`

export const InfoTrackedEvents = styled.div`

max-height: 100%;
display: flex;
flex-direction: column;
overflow: auto;

`