import Fetch from "../../lib/fetch-api";

// https://coin360.com/api/coins?currency=USD&updates_from=1629894793&period=24h&no_charts=true

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