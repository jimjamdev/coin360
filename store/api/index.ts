import Fetch from "../../lib/fetch-api";

const fetchCoins = async(params?: any) => {
    const defaultParams = {
        currency: 'USD',
        updates_from: '1629894793',
        no_charts: true,
        period: '1h',
        // limit: 5, // Limit seems there, no page or offset
        // page: 2,
        ...params
    }
    return Fetch('coins', { params: defaultParams })
}

export { fetchCoins }