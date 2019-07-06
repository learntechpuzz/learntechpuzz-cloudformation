import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://umq5mtwy7d.execute-api.us-east-1.amazonaws.com/dev'
});

export default instance;