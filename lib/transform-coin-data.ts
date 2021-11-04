import {isArrayEmpty} from "../lib/is-array-empty";
import {ICoin} from "../interface/coin";
import chunkArray from "../lib/chunk-array";

const transformCoinData = (data: Array<ICoin>, chunkAmount: number = 20) => {
    if (isArrayEmpty(data)) {
        return
    }
    // Remove empty results
    const filtered = data.filter(coin => coin.p !== 0)
    // Too big and slow
    /*const shape = filtered.flatMap(e => (
        {
            s: e.s,
            p: e.p,
            ch: e.ch,
            coins: data.flatMap(e => ({
                s: e.s,
                p: e.p,
                ch: e.ch,
            }))
        }
    ))*/
    return chunkArray(filtered, chunkAmount)
}

export default transformCoinData