import React from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '../../Components/Button'
import { Input } from '../../Components/Input'
import { Logo } from '../../Components/Logo'
import { useNotification } from '../../hooks/notificationContext'
import { api } from '../../services/api'

import { Container, BackgroundPassword, Box, Form } from './styles'

export const SendForgotPassword = () => {

    const {register, handleSubmit} = useForm()
    const {handleAddToast} = useNotification()

    const handleForgotPassword = async (data: any) => {

        try {
            
        const {email} = data

        await api.post('password/forgot', {
            email
        })

        handleAddToast({
            subText: `Acabamos de enviar um e-mail para conta com o link de atualização.`,
            text: 'Sucesso ao enviar E-mail',
            toastType: 'success'
        })

        } catch (error) {
            handleAddToast({
                subText: `Não conseguimos lhe enviar o e-mail, revise suas credenciais.`,
                text: 'Algo deu errado',
                toastType: 'failed'
            })
        }

    }

    return (
        <Container>
                <BackgroundPassword>
                    <div>
                    <h1>Esqueceu sua Senha? <br /> Siga os Passos abaixo <br /> para recupera-lá.</h1>

                    </div>
                </BackgroundPassword>

                <Box>
                <Logo/>
                <span>Basta inserir seu e-mail abaixo, e lhe enviaremos um link de recuperação.</span>
                <Form onSubmit={handleSubmit(handleForgotPassword)}>
                    <Input {...register("email")} type='text' iconName="ic:outline-email" placeholder="E-mail" />
                    <Button type="submit" buttonType="filledGray" title="Enviar Link" />
                </Form>
            </Box>
        </Container>
    )
}