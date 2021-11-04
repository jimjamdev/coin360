import Image from 'next/image'
import styles from './header.module.scss'

const Header = () => {
    return(
        <header className={styles.header}>
            <div className={styles.headerLogo}>
                <Image alt="Coin360" src="/logo.svg" width={120} height={16} />
            </div>
        </header>
    )
}

export default Header