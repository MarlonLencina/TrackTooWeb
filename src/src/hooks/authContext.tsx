import React, { createContext, useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { api } from "../services/api"

interface authContextProps {
    signUp: (data: CredantialsProps) => Promise<void>
    signIn: (data: Omit<CredantialsProps, "fullName">) => Promise<void>
    user: UserProps;
    signOut: () => void;
}

interface CredantialsProps {
    fullName: string;
    email: string;
    password: string;
}

interface UserProps {
    id: string;
    email: string;
    name: string;
    last_name: string;
    created_at: string;
    avatar_url: string;
}

interface DataProps {
    user: UserProps;
    token: string | undefined;
    refreshToken: string | undefined;
}

const authContext = createContext({} as authContextProps)

export const AuthContextProvider: React.FC = ({children}) => {

    const navigate = useNavigate()


    const [userData, setUserData] = useState<DataProps>(() => {

        const userString = localStorage.getItem('@tracktoo:user')
        const token = localStorage.getItem('@tracktoo:token')
        const refreshToken = localStorage.getItem('@tracktoo:refreshToken') as string;

        if(userString && token){
            const user = JSON.parse(userString)

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`

            return {user, token, refreshToken}
        }

        return {} as DataProps

    })



    const signUp = async ({fullName, email, password}: CredantialsProps ) => {

        const [name, last_name] = fullName.split(' ')
        
        await api.post('/users', {
            name, last_name, email, password
        })


    }

    const signIn = async ({email, password}: Omit<CredantialsProps, "fullName">) => {

        const res = await api.post('/signin', {
            email, password
        })

        const {user, token, refreshToken} = res.data

        if(!user.avatar){
            user.avatar_url = `https://ui-avatars.com/api/?name=${user.name}+${user.last_name}`
        }

        setUserData({user, token, refreshToken})

        api.defaults.headers.common['Authorization'] = `Bearer ${token}`

        localStorage.setItem('@tracktoo:user', JSON.stringify(user))
        localStorage.setItem('@tracktoo:token', token)
        localStorage.setItem('@tracktoo:refreshToken', refreshToken)

    }

    const signOut = async () => {

        setUserData({} as DataProps)

        localStorage.removeItem('@tracktoo:user')
        localStorage.removeItem('@tracktoo:token')
        localStorage.removeItem('@tracktoo:refreshToken')

        navigate('/')

    }

 
    return (
        <authContext.Provider value={{
            signUp,
            signIn,
            user: userData?.user,
            signOut,
        }}>
            {children}
        </authContext.Provider>
    )

}

export const useAuth = () => {
    const context = useContext(authContext)
    return context
}