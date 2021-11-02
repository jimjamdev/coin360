import axios from 'axios'
import config from "../config";
import errorStatus from "../providers/error-status";
// We could probably just use axios to make this cleaner


const axiosInit = axios.create({
    baseURL: config.apiUrl
});

async function fetchAPI(url: string, params = {}) {


   const res = await axiosInit(url, {params})

    if (!res.statusText) {
        const error = { error: errorStatus[res.status]}
        //throw new Error(errorStatus[res.status])
        return JSON.stringify(error)
    }

    return res.data


}

export default fetchAPI