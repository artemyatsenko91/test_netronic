import styles from './style.module.scss';
import Image from 'next/dist/client/image';
import NavMenu from './NavMenu';
import Link from 'next/link';
import { useState } from 'react';

const Header = ({ logo }) => {
    const [menuActive, setMenuActive] = useState(false)

    const handleToggle = () => {
        setMenuActive(!menuActive);
        console.log(styles);
    }
    

    return (
        <header className={styles.header}>
            <div className='container'>
                <div className={styles.header__body}>
                    <Link href="#" className={styles.header__logo}>
                        {logo && <Image
                            src={logo}
                            alt="logo"
                            height={28.5}
                        />}
                    </Link>
                    <div
                        onClick={handleToggle}
                        className={
                            menuActive
                                ? `${styles.header__burger_active}`
                                : `${styles.header__burger}`}>
                    </div>
                    <NavMenu
                        active={menuActive}
                        setMenuActive={setMenuActive}
                    />
                </div>
            </div>
        </header>
    )
}

export default Header;
