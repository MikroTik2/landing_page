import axios from 'axios';

const HTTP = axios.create({
     responseType: 'json',
     timeout: 20000,
     withCredentials: false,
});

export default HTTP;
