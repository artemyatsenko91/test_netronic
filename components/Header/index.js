import styles from './style.module.scss';
import Image from 'next/image';
import NavMenu from './NavMenu';
import Link from 'next/link';
import { useState } from 'react';

const Header = ({ logo, linkNames, phoneIcon }) => {
    const [openBurgerMenu, setOpenBurgerMenu] = useState(false);

    const handleToggle = () => {
        setOpenBurgerMenu(!openBurgerMenu);
    };

    return (
        <header className={styles.header}>
            <div className='container'>
                <div className={styles.header__body}>
                    <Link href='#' className={styles.header__logo}>
                        {logo && <Image src={logo} alt='logo' />}
                    </Link>
                    <div
                        onClick={handleToggle}
                        className={
                            openBurgerMenu
                                ? styles.header__burger_active
                                : styles.header__burger
                        }
                    />
                    <NavMenu
                        linkNames={linkNames}
                        active={openBurgerMenu}
                        phoneIcon={phoneIcon}
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;
