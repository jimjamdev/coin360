import config from "../config";
import errorStatus from "../providers/error-status";
// We could probably just use axios to make this cleaner
async function fetchAPI(path: string, params = {}) {

    const res = await fetch(`${config.apiUrl}${path}?${params && new URLSearchParams( params ) .toString()}`)
    if (res.ok) {
        const json = await res.json()
        return {
            data: json.data
        }
    } else {
        return {error: errorStatus[res.status]}
    }


}

export default fetchAPI