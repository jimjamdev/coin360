import Fetch from "../../lib/fetch";

const getCoins = (params?: any) => {
    return Fetch('coins', params)
}

export { getCoins }