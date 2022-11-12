import styles from './style.module.scss';
import Image from 'next/dist/client/image';
import NavMenu from './NavMenu';
// import logo from '../../public/images/icons/logo.svg';
import Link from 'next/link';

const Header = ({logo}) => {

    return (
        <header className={styles.header}>
            <div className='container'>
                <div className={styles.header__wrapper}>
                    <Link href="#">
                        <Image
                            className={styles.header__logo}
                            src={logo}
                            alt="logo"
                            height={28.5}
                        />
                    </Link>
                    <div className={`${styles.header__menu} ${styles.menu}`}>
                        <div className={styles.menu__icon}>
                            <span></span>
                        </div>
                        <NavMenu />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
