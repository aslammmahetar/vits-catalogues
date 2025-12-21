import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:5000/api",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});

// Request interceptor
instance.interceptors.request.use((config) => {
    if (typeof window !== "undefined") {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
    }
    return config;
});

// Response interceptor for better error handling
instance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            if (typeof window !== "undefined") {
                localStorage.removeItem("token");
                window.location.href = "/auth";
            }
        }
        return Promise.reject(error);
    }
);

export default instance;