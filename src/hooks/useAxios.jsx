import axios from "axios";

const axiosInstance= axios.create({
    baseURL: "https://study-partner-api-server.vercel.app"
})

const useAxios = () => {

    return axiosInstance;
}

export default useAxios;