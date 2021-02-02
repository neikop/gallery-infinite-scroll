import axios from 'axios';

const API_KEY = '20105758-5508685e470f1fe6a4c06f630';
const imageClient = axios.create({
  baseURL: 'https://pixabay.com',
});

imageClient.interceptors.response.use((response) => response.data);
imageClient.interceptors.request.use((request) => {
  request.params = { ...request.params, key: API_KEY };
  return request;
});

export { imageClient };
