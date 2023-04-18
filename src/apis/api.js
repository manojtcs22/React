import axios from "axios";


const baseURL="http://localhost:8090";
export const getData = (url,options={}) =>{
    return axios.get(`${baseURL}/${url}`, options)
}

export const postData = (url,postObj) => {
    return axios.post(`${baseURL}/${url}`,postObj)
}