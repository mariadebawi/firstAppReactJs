import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://appmakan.app/api/v1',
    headers: {
        "Content-Type": "application/json"
    }
})

export default instance;