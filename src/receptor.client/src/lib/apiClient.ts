import axios from "axios";
import {authService} from "../Services/authService.ts";

const apiClient = axios.create({
    baseURL: "http://localhost:5249/api",
    headers: {
        "Content-Type": "application/json",
    }
});

apiClient.interceptors.request.use((config) => {
    const token = authService.getToken();

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
})

export default apiClient;