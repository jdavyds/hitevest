import axios from 'axios'

const axiosHelper = axios.create({
    baseURL: 'https://www.api.hitevest.com/api'
})
// axiosHelper.defaults.headers['Autorization'] = ''
export default axiosHelper;