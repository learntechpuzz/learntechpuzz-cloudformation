import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://orpp30lqpf.execute-api.us-east-1.amazonaws.com/dev'
    //baseURL: 'API-Gateway-URL'
});

export default instance;
