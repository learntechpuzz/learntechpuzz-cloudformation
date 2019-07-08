import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://learntechpuzz.auth.us-east-1.amazoncognito.com'
    //baseURL: 'CognitoAuthAPI-URL'
});

export default instance;
