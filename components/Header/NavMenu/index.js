import styles from './style.module.scss';
import Image from 'next/dist/client/image';
import headerPhone from '../../../public/images/icons/header-phone.svg';

const NavMenu = () => {
    return (
        <nav className={styles.menu__body}>
            <ul className={styles.menu__list}>
                <li><a href="#" className={`${styles.menu__link} ${styles.menu__link_active}`}>Оборудование</a></li>
                <li><a href="#" className={styles.menu__link}>Бизнес</a></li>
                <li><a href="#" className={styles.menu__link}>Новости</a></li>
                <li><a href="#" className={styles.menu__link}>О нас</a></li>
                <li><a href="#" className={styles.menu__link}>Поддержка</a></li>
                <li><a href="#" className={styles.menu__link}>Контакты</a></li>
            </ul>
            <a className={styles.menu__phone} href="#">
                <Image
                    src={headerPhone}
                    alt="phone"
                />
            </a>
        </nav>
    )
}

export default NavMenu;