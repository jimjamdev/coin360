import { createContext } from 'react';
import {ICoin} from "../../interface/coin";

export type CoinsContextType = {
    data?: [ ICoin ];
    error: string;
    getCoins: () => void;
};

const CoinContext = createContext<CoinsContextType>({
    // @ts-ignore
    data: [],
    error: '',
    getCoins: () => {},
});

export default CoinContext;
