import {ICoin} from "../interface/coin";

const transformCoinData = (data: [ICoin]) => {
    if (!data) return

    // Remove empty results
    data && data.filter(coin => coin.p !== 0)
}

export default transformCoinData