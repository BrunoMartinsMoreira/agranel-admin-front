import axios from 'axios';

const access_token = localStorage.getItem('access_token')

 const api = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    Accept: 'application/json',
    Content: 'application/json',
  },
})


api.interceptors.request.use(
  (config)=> {
    if(access_token){
     if(config.headers ) config.headers.Authorization = `Bearer ${access_token}`
    }

    return config
  }
)

export { api }
