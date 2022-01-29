import React, { useState } from "react";
import { Container, Background, Box, Form, Options } from "./styles";
import { Button } from "../../Components/Button";
import { Input } from "../../Components/Input";
import { Logo } from "../../Components/Logo";
import { useForm } from "react-hook-form";
import { useAuth } from "../../hooks/authContext";

import {Link, useNavigate} from 'react-router-dom'
import { Notification } from "../../Components/Notification";
import {v4 as uuidv4} from 'uuid'
import { useNotification } from "../../hooks/notificationContext";

interface PropsSignIn {
    email: string;
    password: string;
}

interface toastProps {
    id: string;
    text: string;
    subText: string;
    toastType: 'success' | 'failed'
}

export const SignIn = () => {

    const {handleAddToast} = useNotification()
    
    const {register, handleSubmit} = useForm()
    const {signIn, user} = useAuth()
    const navigate = useNavigate()
    const handleSignIn = async (data: any) => {


        try {
            const {email, password} = data
            await signIn({email, password})

            handleAddToast({
                subText: 'Você já está logado em nosso sistema.',
                text: 'Sucesso ao fazer Sign In',
                toastType: 'success'
            })

            navigate('/dashboard')
            
        } catch (error) {
            handleAddToast({
                subText: 'Revise suas credencias e tente novamente.',
                text: 'Erro ao fazer sign In',
                toastType: 'failed'
            })
        }
    }



    return (
        <Container>
            <Background>
                <h1>Você está quase, <br /> já que você já <br /> possui uma conta <br /> basta entrar.</h1>
            </Background>
            <Box>
                <Link to={'/'}>
                    <Logo/>
                </Link>
                <Form onSubmit={handleSubmit(handleSignIn)}>
                    <Input {...register('email')}  type='text' iconName="ic:outline-email" placeholder="E-mail" />
                    <Input {...register('password')} type='password' iconName="bx:bx-lock-alt" placeholder="Senha" />
                    <Button type="submit" buttonType="filledGray" title="Entrar" />
                </Form>
                <Options>
                    <Link to="/forgotPassword">Esqueci minha senha</Link>
                    <span>OU</span>
                    <Link to="/signup">Não tenho uma conta</Link>
                </Options>
            </Box>
        </Container>
    )
}
