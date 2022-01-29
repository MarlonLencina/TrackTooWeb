import React, { FormEvent } from "react";
import { Container, Background, Box, Form, Options } from "./styles";
import { Button } from "../../Components/Button";
import { Input } from "../../Components/Input";
import { Logo } from "../../Components/Logo";
import {useForm} from 'react-hook-form'
import { useAuth } from "../../hooks/authContext";
import {Link, useNavigate} from 'react-router-dom'
import { useNotification } from "../../hooks/notificationContext";


export const SignUp = () => {

    const {handleAddToast} = useNotification()

    const {handleSubmit, register} = useForm()

    const {signUp} = useAuth()

    const navigate = useNavigate()

    const handleSignUp = async (data: any) => {

        try {

            const {fullName, email, password} = data
            await signUp({fullName, email, password})

            handleAddToast({
                subText: 'Você fez seu cadastro em nosso sistema.',
                text: 'Sucesso ao fazer Sign Up',
                toastType: 'success'
            })

            navigate('/signin')

        } catch (error) {
            handleAddToast({
                subText: 'Revise suas credenciais para criar sua nova conta.',
                text: 'Erro ao fazer sign Up',
                toastType: 'failed'
            })
        }

    }

    return (
        <Container>
            <Background>
                <h1>Você ainda não <br /> tem uma conta? <br /> Fica Tranquilo é <br /> bem fácil de criar.</h1>
            </Background>
            <Box>
                <Link to={'/'}>
                    <Logo/>
                </Link>
                <Form onSubmit={handleSubmit(handleSignUp)}>
                    <Input {...register('fullName')} type='text' iconName="ant-design:user-outlined" placeholder="Nome e Sobrenome" />
                    <Input {...register('email')} type='text' iconName="ic:outline-email" placeholder="E-mail" />
                    <Input {...register('password')} type='password' iconName="bx:bx-lock-alt" placeholder="Senha" />
                    <Button type="submit" buttonType="filledGray" title="Cadastrar" />
                </Form>
                <Options>
                    <Link to="/signin">já tenho uma conta</Link>
                </Options>
            </Box>
        </Container>
    )
}