import axios, { InternalAxiosRequestConfig, AxiosResponse } from 'axios';

const API = axios.create({ 'baseURL': process.env.NEXT_PUBLIC_API_URL });
API.interceptors.request.use(function (config: InternalAxiosRequestConfig) {
  if (!config.headers) {
    config.headers = new axios.AxiosHeaders();
  }
  if (!config.headers['Content-Type']) {
    config.headers['Content-Type'] = 'application/json';
  }
  
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

API.interceptors.response.use(
  (response: AxiosResponse) => {
    if (!response.data.result) {
      return Promise.reject(response.data); 
    }
    
    const authToken = response.headers['x-auth-token'];
    if (authToken) {
      localStorage.setItem('token', authToken);
    }
    return response; 
  },
  error => Promise.reject(error.response.data)
);
export default API;
