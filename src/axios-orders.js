import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-b8833.firebaseio.com/'
});

export default instance;