import styles from './style.module.scss';
import Link from 'next/link';
import Image from 'next/dist/client/image';

const NavMenu = ({ active, linkNames, phoneIcon }) => {
    return (
        <nav className={
            active
                ? `${styles.header__menu_active}`
                : `${styles.header__menu}`}>
            <ul className={
                active
                    ? `${styles.header__list_active}`
                    : `${styles.header__list}`}>
                {linkNames?.map((item, index) => (
                    <MenuLink
                        key={index}
                        text={item.text}
                    />
                ))}
            </ul>
            <Link className={styles.header__phone} href="#">
                {phoneIcon && <Image
                    src={phoneIcon}
                    alt="phone-icon"
                    height={26}
                />}
            </Link>
        </nav>
    )
}

const MenuLink = ({ text }) => {
    return (
        text &&
        <li>
            <div className="devider">
                <Link href="#" className={styles.header__link}>
                    {text}
                </Link>
            </div>
        </li>
    )
}

export default NavMenu;