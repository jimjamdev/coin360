import config from "../config";

async function fetchAPI(path: string, method = 'GET', params = {}) {
    const res = await fetch(`${config.apiUrl}${path}?${params}`, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            // Authorization: `Bearer ${TOKEN}`, Maybe we'll need auth
        },
    })

    const json = await res.json()
    if (json.errors) {
        console.error(json.errors)
        throw new Error('Failed to fetch API')
    }
    return json.data
}

export default fetchAPI