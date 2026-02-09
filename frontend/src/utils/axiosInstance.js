import axios from "axios";
import { BASE_URL } from "./apiPath";

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
        Accept : "application/json"
    },
});

// Request Intercepter

axiosInstance.interceptors.request.use(
    (config)=>{
        const accessToken = localStorage.getItem("token");
        if (accessToken){
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error)=> Promise.reject(error)
);

// Response Interceptor

axiosInstance.interceptors.response.use(
    (response)=> response,

    (error) => {
        // Handel common error Globally

        if(error.response){
            if(error.response.status === 401){
                // Rediret to login Page
                window.location.href = "/login";
            } else if (error.response.status === 500){
                console.error("Server Error. Please try again later")
            }else if(error.code === "ECANNABORTED"){
                console.error("Request timeout. Please try again")
            }
        }
        return Promise.reject(error)
    }
);

export default axiosInstance