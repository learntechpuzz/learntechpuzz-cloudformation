import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://gwxrdt2nx4.execute-api.us-east-1.amazonaws.com/dev'
    //baseURL: 'APIGateway-URL'
});

export default instance;
