import Fetch from "../../lib/fetch-api";

const getCoins = (params?: any) => {
    const defaultParams = {
        currency: 'USD',
        updates_from: '1629894793',
        no_charts: true,
        period: '1h',
        ...params
    }
    return Fetch('coins', defaultParams)
}

export { getCoins }