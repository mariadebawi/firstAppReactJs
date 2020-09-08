import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://reactproject-b61f5.firebaseio.com/'
})

export default instance;