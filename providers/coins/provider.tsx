import React from 'react';
import {fetchCoins} from "../../store/api";
import CoinContext from './context';


const CoinsProvider:React.FunctionComponent = ({ children }) => {
    const coins = fetchCoins()

    const getCoins = () => {};

    return (
        <CoinContext.Provider
            value={{
                data,
                error,
                getCoins
            }}
        >
            {children}
        </CoinContext.Provider>
    );
};

export default CoinsProvider;
