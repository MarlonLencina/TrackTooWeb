import React from "react";
import { Container, Box, Exit } from "./styles";
import { Icon } from '@iconify/react';

interface Props {
    isModalOpen: boolean;
    handleModal: () => void
}

export const ModalAdd: React.FC<Props> = ({children, isModalOpen, handleModal}) => {

    const closeModal = () => {
        handleModal()
    }

    return (
        <Container isModalOpen={isModalOpen} >
            <Box>
                <Exit onClick={closeModal}>
                    <Icon icon="bi:x" />
                </Exit>
                {children}
            </Box>
        </Container>
    ) 
        
}