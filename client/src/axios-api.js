import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://localhost:3001/api/v1'
});

export default instance;