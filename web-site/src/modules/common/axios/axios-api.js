import axios from 'axios';

const instance = axios.create({
      baseURL: 'https://ejryh1fq8h.execute-api.us-east-1.amazonaws.com/dev'
    //baseURL: 'APIGateway-URL'
});

export default instance;
