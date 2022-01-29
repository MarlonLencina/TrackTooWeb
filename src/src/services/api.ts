import axios, { AxiosError } from "axios";

export const api = axios.create({
    baseURL: "http://localhost:3333"
})

let isRefreshing = false ;
let failedRequestQueue: { onSuccess: (token: string) => void; onFailed: (error: AxiosError<any, any>) => void; }[] = []

api.interceptors.response.use(response => response, async (error: AxiosError) => {

                     if(error.response?.status === 401){

                    if(error.response.data.message === 'jwt expired'){


                    const refreshToken = localStorage.getItem('@tracktoo:refreshToken')


                    if(!isRefreshing){

                    isRefreshing = true
                    const originalConfig = error.config as any


                    api.post('/refresh-token', {
                        refreshToken
                    }).then(res => {



                        localStorage.setItem('@tracktoo:refreshToken', res.data.refreshToken)
                        localStorage.setItem('@tracktoo:token', res.data.token)
    
                        api.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`;
    
                    
                        failedRequestQueue.forEach((req) => req.onSuccess(res.data.token))
                        failedRequestQueue = []

                        
                    }).catch((err) => {
                        failedRequestQueue.forEach((req) => req.onFailed(err))
                        failedRequestQueue = []
                    }).finally(() => {
                        isRefreshing = false
                    })
                
                    return new Promise((resolve, reject) => {

                        failedRequestQueue.push({
                            onSuccess: (token: string) => {
                                originalConfig.headers["Authorization"] = `Bearer ${token}`
    
                                resolve(api(originalConfig))
                            },
                            onFailed: (error: AxiosError) => {
                                reject(error)
                            }
                        })

                    })



            }

        } else {
            return Promise.reject()
        }
    }
})