import styles from './style.module.scss';
import Link from 'next/link';

const MenuLink = ({ text }) => {
    return (
        <li><Link href="#" className={styles.menu__link}>{text}</Link></li>
    )
}

export default MenuLink;