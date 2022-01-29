import { Icon } from "@iconify/react";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useNotification } from "../../hooks/notificationContext";

import {ToastContainer, Container} from './styles'

interface toastProps {
    id: string;
    text: string;
    toastType: 'success' | 'failed',
    subText: string;
}

interface props {
    list: toastProps[]
    setList: Dispatch<SetStateAction<toastProps[]>>
}

export const Notification = ({list}: props) => {

    const {handleCloseToast} = useNotification()

    useEffect(() => {
        const interval = setInterval(() => {
          if(list.length) {
            handleCloseToast(list[0].id);
          }
        }, 2000);
    
        return () => {
          clearInterval(interval);
        }
      }, [list, handleCloseToast]);

    return (
        <ToastContainer>
        {
            list.map((toast) => {
                    return (
                        <Container toastType={toast.toastType} key={toast.id}>
                            <button onClick={() => handleCloseToast(toast.id)} >
                                <Icon icon='bi:x' />
                            </button>
                            <div>
                                <h3>{toast.text}</h3>
                                <span>
                                    {toast.subText}
                                </span>
                            </div>
                        </Container>
                    )
            })
        }
        </ToastContainer>
    )

}