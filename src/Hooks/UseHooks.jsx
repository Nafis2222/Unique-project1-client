import axios from "axios";

export const axiosPublic = axios.create({
    baseURL: "https://unique-project1-server.vercel.app/",

})
const UseHooks = () => {
    return axiosPublic
};

export default UseHooks;