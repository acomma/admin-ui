import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8080';
axios.interceptors.request.use((config) => {
    if (config && config.headers) {
        const token = localStorage.getItem('token')
        config.headers['Token'] = token ? token : "";
    }
    return config
}, (error) => {
    return Promise.reject(error)
});

createApp(App).use(router).mount('#app')
