import Fetch from "../../lib/fetch-api";

const getCoins = (params?: any) => {
    const defaultParams = {
        currency: 'USD',
        updates_from: '1629894793',
        no_charts: true,
        period: '24h',
        ...params
    }
    return Fetch('coins', defaultParams)
}

export { getCoins }