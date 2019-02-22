import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-37e8f.firebaseio.com/'
});

export default instance;