import axios from "axios"

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout:10000,
    withCredentials:true
})

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        return Promise.reject({
            message: error.response?.data?.message || error.message,
            status: error.response?.status,
        });
    }
);

export default axiosInstance;