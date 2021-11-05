import type { NextPage } from 'next'
import Head from 'next/head'
//redux
import { wrapper } from '../store/store'
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { getCoins, coinData } from "../store/coin/coin.slice";
// interface
import {ICoinData} from "../interface/coin";
// components
import Header from "../components/header";
import CoinList from "../components/coin-list/index";
// styles
import styles from '../styles/Home.module.scss'

interface ICoinPage {
    coins: ICoinData
}

const Home: NextPage<ICoinPage> = ({coins}) => {
    const {data = [], error = ''} = coins;
    const dispatch = useAppDispatch()

    const fetchCoins = ()  => {
        dispatch(getCoins())
    }

    const clientData = useAppSelector(state => state.coins.data)
    const clientError = useAppSelector(state => state.coins.error)

  return (
      <>
          <Header />
            <div className={styles.container}>
              <Head>
                <title>Coin360...</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
              </Head>
              {error && error}
              <CoinList
                  data={clientData || data}
                  error={clientError || error}
                  fetchFunc={fetchCoins}
                  refetchTime={60000} />
            </div>
      </>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(store => async () => {
    /* We want the fetch on the server for SEO and page load speed.
    * Ideally though, we'd have pagination on the serverside, only grab the data for a single page here,
    * and use a fetch hook to dynamically pull each pages data on scroll.
    * This also also helpful for the setInterval as it's problematic trying to do it with this much client side data.
    * */
    const req = await store.dispatch(getCoins())
    const { payload = {} } = req
    return {
        props: {
            coins: { data: payload?.data, error: payload?.error }
        },
    };
});

export default Home
