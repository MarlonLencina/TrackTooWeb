import React, { useEffect, useMemo, useState } from "react";
import { Logo } from "../../Components/Logo";
import { InfoTrackedEvents, ItemButton, InfoTrack, InfoTracked, WrapperModalInfoTrack, ModalInfoTrack, ModalForm, WrapperModal, ModalAddTrack, Item, SideBar, SideBarWrapper, Container, Header, Wrapper, User, UserAvatar, ContentUserWrapper, ContentUser, ContentTrackWrapper, TracksWrapper } from "./styles";
import { Button } from "../../Components/Button";
import { TrackCard } from "../../Components/TrackCard";
import { Icon } from '@iconify/react';
import { Input } from "../../Components/Input";
import { useAuth } from "../../hooks/authContext";
import { api } from "../../services/api";
import { useForm } from 'react-hook-form'
import { title } from "process";
import { InfoTrackedItem } from "../../Components/InfoTrackedItem";
import { InfoTrackDataEvent } from "../../Components/InfoTrackDataEvent";
import { useTheme } from "styled-components";
import { Spinner } from "../../Components/Spinner";
import { useNavigate } from "react-router-dom";
import { useNotification } from "../../hooks/notificationContext";

interface TrackProps {
    code_track: string;
    title: string;
    created_at: Date;
    id: string;
    user_id: string;
}

interface eventProps {
    codigo: string;
    ultimo: string;
    quantidade: string;
    servico: string;
    eventos: Array<{
        status: string;
        local: string;
        data: string;
        hora: string;
        subStatus: string[]
    }>
}


export const Dashboard = () => {

    const {handleAddToast} = useNotification()
    const {signOut, user} = useAuth()
    const {handleSubmit, register} = useForm()
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isModalInfoTrackOpen, setIsModalInfoTrackOpen] = useState(false)
    const [tracks, setTracks] = useState<TrackProps[]>([])

    const [infoCurrentModal, setInfoCurrentModal] = useState<TrackProps>({} as TrackProps)
    const [infoCurrentEvents, setInfoCurrentEvents] = useState<eventProps>({} as eventProps)

    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()


    const handleSidebar = () => {
        setIsSidebarOpen(state => !state)
    }


    const handleModal = () => {
        setIsModalOpen(state => !state)
    }


    const handleModalInfoTrack = () => {
        setIsModalInfoTrackOpen(state => !state)
    }

    const handleLogout = () => {
        signOut()

        handleAddToast({
            subText: `Acabamos de deslogar voce do sistema`,
            text: 'Sucesso ao sair da conta',
            toastType: 'success'
        })
    }

    const handleCreateTrack = async (data: any) => {

        const {title, code_track} = data

        const res = await api.post('/track', {
            title, code_track
        })

        setTracks(state => [...state, res.data.track])

        handleModal()

        handleAddToast({
            subText: `Você adicionou um novo rastreio de código: ${code_track}`,
            text: 'Sucesso ao adicionar rastreio',
            toastType: 'success'
        })

    }

    const handleInfoCurrentModal = async (modalId: string) => {

        setIsLoading(true)
        handleModalInfoTrack()

        const res = await api.get(`/track/${modalId}`)

        setInfoCurrentModal(res.data.track)

        const resCorreios = await fetch(`https://api.linketrack.com/track/json?user=marlonbmoraez@gmail.com&token=f9e6838556442c0f7b1c6a6d32fdc2801d249b1b855004d61c1e8adf228c1b9b&codigo=${res.data.track.code_track}`)
        
        const dataEvents = await resCorreios.json()
        
        setInfoCurrentEvents(dataEvents)

        setIsLoading(false)
        
    }

    const handleNavigateProfile = () => {
        navigate('/profile')
    }

    useEffect(() => {

        api.get('/track').then((res) => {
            setTracks(res.data.tracks)
        })

    }, [])

    return (
        <>
        
        <ModalAddTrack handleModal={handleModal} isModalOpen={isModalOpen}>
            <WrapperModal>
                <h1>Adicionar nova entrega</h1>
                <ModalForm onSubmit={handleSubmit(handleCreateTrack)} >
                    <Input {...register("title")} type='text' placeholder="Nome do rastreamento" />
                    <Input {...register("code_track")} type='text' placeholder="Código de rastreamento" />
                    <Button type="submit" title="Adicionar" buttonType="filledGray" />
                </ModalForm>
            </WrapperModal>
        </ModalAddTrack>

        <ModalInfoTrack handleModal={handleModalInfoTrack} isModalOpen={isModalInfoTrackOpen} >
            {
                isLoading ?
                <Spinner/> :
                <WrapperModalInfoTrack>
                    <h1>{infoCurrentModal?.title}</h1>
                    <InfoTrack>
                        <InfoTracked>
    
                            <InfoTrackedItem icon="icon-park-outline:delivery" title="Código de rastreio" info={infoCurrentModal.code_track}/>
                            <InfoTrackedItem icon="el:refresh" title="Última Atualização" info={`${new Date(infoCurrentEvents?.ultimo).toLocaleDateString('pt-BR', {
                                day: '2-digit',
                                month: 'long',
                                year: 'numeric',
                                hour: 'numeric'
                            })}`}/>
                            
                            {
                                infoCurrentEvents.servico && <InfoTrackedItem icon="carbon:delivery" title="Tipo de envio" info={infoCurrentEvents?.servico}/>
                            }
                            
    
                        </InfoTracked>
                        <InfoTrackedEvents>
                            {
                                  infoCurrentEvents.eventos ? infoCurrentEvents.eventos.map((event, index) => {
                                    return (
                                        <InfoTrackDataEvent key={index} title={event.status} subtitle={event.subStatus[0]} date={event.data} hour={event.hora} /> 
                                    )
                                }) : ''
                            }
                        </InfoTrackedEvents>
                    </InfoTrack>
                </WrapperModalInfoTrack>
            }
        </ModalInfoTrack>


        <Container>

            <Header>
                <Wrapper>
                     <Logo/>
                     <User>
                        <UserAvatar src={user.avatar_url} alt="" />
                        <button onClick={handleSidebar} ><Icon icon="ci:menu-alt-05" /></button>
                     </User>
                </Wrapper>
            </Header>

            <SideBar isSidebarOpen={isSidebarOpen} >
                    <SideBarWrapper>
                        <Item>
                            <ItemButton>
                                <span>Ajuda</span>
                                <Icon icon="bx:bx-help-circle" />
                            </ItemButton>
                        </Item>
                        <Item>
                            <ItemButton onClick={handleNavigateProfile}>
                                <span>Perfil</span>
                                <Icon icon="ant-design:user-outlined" />
                            </ItemButton>
                        </Item>
                        <Item>
                            <ItemButton onClick={handleLogout}>
                                <span>Sair</span>
                                <Icon icon="ic:sharp-exit-to-app" />
                            </ItemButton>
                        </Item>
                    </SideBarWrapper>
            </SideBar>

            <ContentUser>
                <ContentUserWrapper>
                    <h1>Olá {user.name}, <br />
                    Como vai?</h1>
                    <Button onClick={handleModal} buttonType="filledLight" title="Adicionar Entrega" />
                </ContentUserWrapper>
            </ContentUser>

            {
                isLoading ? <Spinner/> : 
                <ContentTrackWrapper>
                    <h1>Todas suas entregas salvas estão aqui</h1>
                    <TracksWrapper>
                        {tracks.map((track) => {

                            const date = new Date(track.created_at).toLocaleDateString('pt-BR', {
                                day: '2-digit',
                                month: "2-digit",
                                year: 'numeric'
                            })

                            return (
                                <TrackCard key={track.id} onClick={() => {
                                    handleInfoCurrentModal(track.id)
                                }} title={track.title}
                                   created_at={date}
                                    />
                            )
                        })}
                    </TracksWrapper>
                </ContentTrackWrapper>
            }

                

        </Container>
        </>

    )
}