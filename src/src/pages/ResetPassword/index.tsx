import React from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import { Button } from '../../Components/Button'
import { Input } from '../../Components/Input'
import { Logo } from '../../Components/Logo'
import { useNotification } from '../../hooks/notificationContext'
import { api } from '../../services/api'

import { Container, BackgroundPassword, Box, Form } from './styles'

export const ResetPassword = () => {

    const {handleAddToast} = useNotification()

    const {register, handleSubmit} = useForm()

    const {token} = useParams()

    const handleResetPassword = async (data: any) => {

        try {
        
        const {password, passwordConfirmation} = data

        if(password !== passwordConfirmation){
            return
        }



        await api.post(`/password/reset/${token}`, {
            newPassword: password
        })


        } catch (error) {
            handleAddToast({
                subText: 'Revise suas crendenciais e tente novamente.',
                text: 'Algo deu errado',
                toastType: "failed"
            })
        }

    }

    return (
        <Container>
                <BackgroundPassword>
                    <div>
                    <h1>Pronto agora basta <br /> inserir sua nova senha <br /> de autenticação.</h1>

                    </div>
                </BackgroundPassword>

                <Box>
                <Logo/>
                <span>Basta inserir seu e-mail abaixo, e lhe enviaremos um link de recuperação.</span>
                <Form onSubmit={handleSubmit(handleResetPassword)}>
                    <Input  {...register('email')} type='text' iconName="ic:outline-email" placeholder="E-mail" />
                    <Button type="submit" buttonType="filledGray" title="Alterar senha" />
                </Form>
            </Box>
        </Container>
    )
}