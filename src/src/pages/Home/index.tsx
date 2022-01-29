import React from "react";

import logoSVG from "../../assets/tracktoo.svg"
import carIlustration from "../../assets/mail-sent-bro.png"

import { Background, Container, Header, Content, Call, Image, Social, Buttons } from "./styles";
import { Button } from "../../Components/Button";

import {Link, useNavigate} from 'react-router-dom'

export const Home = () => {

    const navigate = useNavigate()

    return (
        <Background>

        <Container>
            <Header>
                <Link to="/">
                    <img src={logoSVG} alt="Logo tracktoo" />
                </Link>
            </Header>
            <Content>
                <Call>
                    <h1>
                    Centralize suas <br /> entregas em <br />
                    um <b>Lugar</b> só de <br /> maneira simples.
                    </h1>
                    <Social>
                        <span>Para começar é fácil basta: </span>
                        <Buttons>
                            <Button onClick={() => {navigate('signup')}} buttonType="filledLight" title="Cadastrar" />
                            <b>Ou</b>
                            <Button onClick={() => {navigate('signin')}} buttonType="outlinedLight" title="Entrar" />
                        </Buttons>
                    </Social>
                </Call>
                <Image src={carIlustration} />                     
            </Content>
        </Container>

        </Background>

    )
}