import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";

import { Notification } from "../Components/Notification";

import {v4 as uuidv4} from 'uuid'


interface toastProps {
    id: string;
    text: string;
    toastType: 'success' | 'failed',
    subText: string;
}

interface NotificationContextProps {
    handleAddToast: (properties: Omit<toastProps, 'id'>) => void
    handleCloseToast: (toastId: string) => void
}

const NotificationContext = createContext({} as NotificationContextProps)

export const NotificationContextProvider: React.FC = ({children}) => {


    const [list, setList] = useState<toastProps[]>([])

    const handleAddToast = ({subText, text, toastType}: Omit<toastProps, 'id'>) => {
        

        const toast: toastProps = {
            id: uuidv4(),
            text,
            subText,
            toastType
        }

        setList([...list, toast])

    }

    const handleCloseToast = (toastId: string) => {

        setList((oldState) => {

            const filteredList = oldState.filter(toast => toastId !== toast.id
            )

            return filteredList

        })

    }
    
    return (
        <NotificationContext.Provider value={{
            handleAddToast,
            handleCloseToast
        }}>
            <Notification list={list} setList={setList} />
            {children}
        </NotificationContext.Provider>
    )
}

export const useNotification = () => {
    const context = useContext(NotificationContext)
    return context
}