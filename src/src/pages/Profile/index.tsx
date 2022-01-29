import React, { useState } from "react";
import { Logo } from "../../Components/Logo";
import { AvatarWrapper, Avatar, Container, Header, Wrapper, Content, User, UserProfile, Form} from "./styles";
import { Icon } from '@iconify/react';
import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/authContext";
import { api } from "../../services/api";
import { useForm } from "react-hook-form";
import { useNotification } from "../../hooks/notificationContext";

export const Profile = () => {
    
    const {user} = useAuth()
    const navigate = useNavigate()
    const {handleSubmit, register} = useForm()
    const [userAvatar, setUserAvatar] = useState(user.avatar_url)
    const {handleAddToast} = useNotification()

    const handleChangeAvatar = async (e: React.ChangeEvent<HTMLInputElement>) => {

        const formData = new FormData();
        const imageFile = e.target.files as FileList

        if(imageFile[0]) {

            try {
                
                formData.append("avatar", imageFile[0]);
                const res = await api.put('/users/avatar', formData, {
                headers: {
                    "Content-Type": `multipart/form-data;`,
                    }
            })

                setUserAvatar(res.data.user.avatar_url)

                handleAddToast({
                    subText: 'seu avatar de úsuario alteado',
                    text: 'Alterado com sucesso',
                    toastType: 'success'
                })

            } catch (error) {
                handleAddToast({
                    subText: 'seu avatar de úsuario não alteado',
                    text: 'Algo deu errado, tente novamente',
                    toastType: 'failed'
                })
            }

        }
    }

    const handleGoBack = () => {
        navigate(-1)
    }

    return (

        <Container>

            <Header>
                <Wrapper>
                     <Logo/>
                     <button onClick={handleGoBack} >
                        <Icon icon="ant-design:arrow-left-outlined" />
                     </button>
                </Wrapper>
            </Header>

        <Content>
            <User>
                <AvatarWrapper>
                    <label>
                        <input type="file" onChange={handleChangeAvatar} />
                        <Avatar>
                            <img src={userAvatar} alt="avatar"/>
                            <Icon icon={'dashicons:camera'} />

                        </Avatar>
                    </label>
                </AvatarWrapper>
                <UserProfile>
                    <h2>{`${user.name} ${user.last_name}`}</h2>
                    <span>Úsario desde 16 de maio de 2004</span>
                </UserProfile>
            </User>
            <Form>
                    <Input {...register('name')} defaultValue={user.name} outline={true} type='text' iconName="ant-design:user-outlined" placeholder="Nome e Sobrenome" />
                    <Input {...register('email')} defaultValue={user.email} outline={true} type='text' iconName="ic:outline-email" placeholder="E-mail" />
                    <Input {...register('password')} defaultValue={'password'} outline={true} type='password' iconName="bx:bx-lock-alt" placeholder="Senha" />
                    <Button buttonType="filledGray" title="Atualizar" />
            </Form>
        </Content>

        </Container>

    )
}