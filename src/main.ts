import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './store'

axios.defaults.baseURL = '/api';
axios.interceptors.request.use((config) => {
    if (config && config.headers) {
        const token = localStorage.getItem('token')
        config.headers['Token'] = token ? token : "";
    }
    return config
}, (error) => {
    return Promise.reject(error)
});

createApp(App).use(store).use(router).mount('#app')
