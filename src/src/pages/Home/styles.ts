import styled from "styled-components";

export const Background = styled.div`
height: 100vh;
min-height: 100vh;
// height: 100%;


background-color: ${props => props.theme.colors.red};

`

export const Container = styled.div`

max-width: 1280px;
margin: 0 auto;
display: flex;
flex-direction: column;
height: 100%;

`

export const Header = styled.div`

padding: 12px;

a {
    img {
        width: 170px;
    }
}

`


export const Content = styled.div`
    flex: 1;
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 12px;

    @media (max-width: 700px){
        flex-direction: column-reverse;
        margin-top: 20px;
        justify-content: space-around;
    }


`


export const Call = styled.div`

display: flex;
flex-direction: column;


h1 {

    font-weight: ${props => props.theme.fonts.medium};
    font-size: 54px;
    color: ${props => props.theme.colors.white};
    margin-bottom: 40px;


    b {
        font-weight: ${props => props.theme.fonts.bold};
        color: ${props => props.theme.colors.snow};


    }
}

    @media (max-width: 1120px){
        h1 {
            font-size: 48px;
        }
    }

    @media (max-width: 800px){

        width: 100%;


        h1 {
            font-size: 36px;
            margin-bottom: 20px;

        }
    }

    @media (max-width: 600px){

        width: 100%;

        h1 {
            font-size: 36px;
            margin-bottom: 20px;
        }
    }


`


export const Image = styled.img`

@media (max-width: 1120px){
       width: 60%;
    }


    @media (max-width: 700px){
       width: 70%;
    }

    @media (max-width: 400px){
       width: 100%;
    }

`


export const Social = styled.div`

> span {
    margin-bottom: 20px;
}

display: flex;
flex-direction: column;
font-size: 18px;
color: ${props => props.theme.colors.white};
font-weight: ${props => props.theme.fonts.semiBold};

@media (max-width: 700px){
       align-items: center;

            > span {
                margin-bottom: 10px;
            }
    }

`

export const Buttons = styled.div`

width: 100%;
display: flex;
align-items: center;


> b {
    margin: 0 20px;
    font-size: 24px;
    color: ${props => props.theme.colors.white};
    font-weight: ${props => props.theme.fonts.bold};
}

> button {
    width: 100%;
}

@media (min-width: 700px){
       flex-direction: row;

       > b {
        margin: 0 12px;
        font-size: 18px;

       }
    }

    @media (max-width: 500px){
       flex-direction: column;

       > b {
        margin: 12px 0;
        font-size: 18px;

       }
    }

`



