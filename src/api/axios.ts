import axios from 'axios'

const $axios = axios.create({
    baseURL: process.env.VITE_API_URL
})

export default $axios