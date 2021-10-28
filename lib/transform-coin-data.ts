import {ICoin} from "../interface/coin";

const transformCoinData = (data: Array<ICoin>) => {
    // Remove empty results
    const filtered = data.filter(coin => coin.p !== 0)
    return filtered.flatMap(e => (
        {
            name: e.s,
            price: e.p,
            change: e.ch,
            coins: data.flatMap(e => ({
                name: e.s,
                price: e.p,
                change: e.ch,
            }))
        }
    ))
}

export default transformCoinData