import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://learntechpuzz.auth.us-east-1.amazoncognito.com'
    //baseURL: 'Cognito-API-URL'
});

export default instance;
