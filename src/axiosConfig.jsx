import axios from 'axios';

axios.defaults.baseURL =import.meta.env.VITE_HOST;// Use your backend URL

axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`; // Example for setting auth token

export default axios;