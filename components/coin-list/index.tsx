import {FunctionComponent, useEffect, useMemo, useRef, useState} from "react";
// interface
import {ICoin} from "../../interface/coin";
// lib
import changeDiff from "../../lib/change-diff";
import transformCoinData from "../../lib/transform-coin-data";
import debounce from "../../lib/debounce";
// components
import Loader from "../../components/loader";
// styles
import styles from './coin-list.module.scss'


interface ICoinList {
    data: Array<ICoin>,
    error?: string;
    chunkAmount?: number;
    fetchFunc: () => void;
    refetchTime: number
}

const CoinList: FunctionComponent<ICoinList> = ({ data, chunkAmount = 20 , fetchFunc, refetchTime = 10000}) => {

    // Transform and chunk the data
    const transformedData = useMemo(() => {
        return transformCoinData(data, chunkAmount) || [];
    }, [data, chunkAmount])

    const [ loading, setLoading ] = useState(false)
    const [ list, setList ] = useState(transformedData[0]);
    const [ page, setPage ] = useState(0);

    const ref = useRef<HTMLDivElement>(null)

    // Add to data list on scroll
    useEffect(() => {
        setList((prev) => {
            return [
                ...Array.from(
                    // Add to the list
                    new Set([...prev, ...transformedData[page]])
                    // Add only active page
                    // new Set(transformedData[page])
                )
            ]
        })
    }, [transformedData, page])

    // Handle loading
    useEffect(() => {
        setLoading(false)
    }, [list])


    // Handle sideways scroll => page
    const handleScroll = debounce((element: any) => {
        const el = element?.target
        const scrollLeftAmount = el.scrollLeft + el.clientWidth
        const scrollHorizontalWidth = el.scrollWidth
        const scrollDownAmount = el.scrollTop + el.clientHeight
        const scrollVerticalHeight = el.scrollHeight
        if (
            (scrollLeftAmount >= scrollHorizontalWidth) &&
            (list.length < data.length) ||
            (scrollDownAmount >= scrollVerticalHeight) &&
            (list.length < data.length)
        ) {
            setLoading(true)
            setPage((prev) => prev + 1);
        }
        // Also thinking about adding the scroll up/left, and storing only the viewed data in list instead of adding/spreading
    }, 250)

    // Generate grid titles
    const generateTitles = (list: Array<ICoin>) => {
        const titles  = list.map((item) => {
            return {
                title: item.s,
                change: item.ch
            }
        })
        return titles.map(value => {
            return <div key={value.title} className={styles.title}>{value.title} {value.change}%</div>
        })
    }

    // Generate grid
    const generateGrid = (list:Array<ICoin>) => {
        return list?.map((coin, index) => {
            return (
                <div className={styles.row} key={coin.s}>
                    <div className={styles.cellLeft}>
                        <span>{coin.s}</span>
                    </div>
                    {list.map(c => {
                        const changeComparison = changeDiff(coin.ch, c.ch);
                        const isNegative = coin.ch > c.ch;
                        const isEmptyCell = coin.s === c.s;
                        const plusOrMinus = !isNegative ? '+' : '-';
                        return(
                            <div className={styles.cell} key={c.s}>
                                    {/* We can also use classnames, classcat or clsx, but for this example, fine */}
                                <div className={[styles.cellInfo, isNegative && styles.cellInfoNegative, isEmptyCell && styles.cellInfoEmpty].join(' ')}>
                                        <strong>{isEmptyCell && '-' || plusOrMinus + changeComparison + '%'}</strong>
                                </div>
                            </div>
                        )
                    })}
                </div>
            )
        }) || 'no data'
    }

    useEffect(() => {
        const interval = setInterval(() => {
            fetchFunc && fetchFunc()
        }, refetchTime);

        return () => clearInterval(interval);
    }, [fetchFunc, refetchTime])

    return (
        <>
            <section className={styles.section}>
                { loading && <Loader /> }
                <article className={styles.container} ref={ref} onScroll={handleScroll}>
                    <header className={styles.titleWrapper}>
                    { generateTitles(list)}
                    </header>
                    { generateGrid(list) }
                </article>
            </section>
        </>
    );
}

export default CoinList;