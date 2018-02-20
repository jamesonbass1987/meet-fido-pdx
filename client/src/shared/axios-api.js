import axios from 'axios';

const token = localStorage.getItem('token')

const instance = axios.create({
    baseURL: 'http://localhost:3001/api/v1',
    headers: { 'Authorization': token }
});

export default instance;