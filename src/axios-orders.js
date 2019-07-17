import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-victor.firebaseio.com/'
});

export default instance;