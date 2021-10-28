import type { NextPage } from 'next'
import Head from 'next/head'
import {getCoins} from '../providers'
import {ICoinData} from "../interface/coin";
import transformCoinData from "../lib/transform-coin-data";
import changeDiff from "../lib/change-diff";
import styles from '../styles/Home.module.scss'

interface ICoinPage {
    coinData: ICoinData
}

const Home: NextPage<ICoinPage> = ({coinData}) => {
  const {data = [], error = ''} = coinData;

  const transformedData = transformCoinData(data);
  const slicedData = transformedData.slice(0, 5); //todo: we want to tie this into a provider so we dont display all data at once. load what only on the screen with onscroll

    console.log('data', slicedData)

  return (
    <div className={styles.container}>
      <Head>
        <title>Coin360</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {error && error}
      <table>
        <tbody>
        {
            slicedData.map(coin => {
                return (
                    <tr key={coin.name}>
                        <td>{coin.name}!</td>
                        {coin.coins.map(c => {
                            const changeComparison = changeDiff(coin.change, c.change)
                            const isNegative = coin.change > c.change
                            const isEmptyCell = coin.name === c.name
                            console.log(changeComparison, c.change)
                            return(
                                <td key={c.name}>
                                    <div className="cell-title">{c.name}</div>
                                    <div className={`cell-info ${isNegative && 'negative'} ${isEmptyCell && 'empty'}`}>
                                        {/*{c.change}%<br />*/}<strong>{isEmptyCell && '-' || changeComparison + '%'}</strong>
                                    </div>
                                </td>
                            )
                        })}
                    </tr>
                )
            })
        }
        {/*{transformedData.map((coin) => {
          return (
              <tr key={coin.s}>
                <td>{coin.s}</td>
                  {transformedData.map((coin) => {
                    return (
                        <td key={coin.s}>
                          <div className="cell-title">{coin.s}</div>
                          <div className="cell-info">{coin.ch}%</div>
                        </td>
                    )
                  })}
              </tr>
          )
        })}*/}
        </tbody>
      </table>
    </div>
  )
}

export async function getStaticProps() {
  const coinData = await getCoins()
  return {
    props: {coinData}, // will be passed to the page component as props
  }
}

export default Home
