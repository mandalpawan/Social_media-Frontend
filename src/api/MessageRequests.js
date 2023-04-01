import axios from 'axios'


// const API = axios.create({ baseURL: 'http://localhost:5000' });

const API = axios.create({ baseURL: 'https://mernserver-fd42.onrender.com' });


export const getMessages = (id) => API.get(`/message/${id}`);

export const addMessage = (data) => API.post('/message/', data);