import styles from './style.module.scss';
import SocialNetworkLink from '../SocialNetworkLink';
import { SocialNetworksData } from '../../../data/pages/BlackFriday';
import Link from 'next/dist/client/link';

const DesktopFooter = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footer_desktop}>
                    <Link href="#">
                        <img src="/images/icons/footer-logo.svg" alt="logo" />
                    </Link>
                    <ul className={styles.footer__social_networks}>
                        {SocialNetworksData?.map((item, index) => (
                            <SocialNetworkLink
                                key={index}
                                url={item.url}
                                icon={item.icon}
                            />
                        ))}
                    </ul>
                    <nav>
                        <ul className={styles.footer__nav}>
                            <li className={styles.nav_link}>
                                <Link href="#">Политика конфиденциальности</Link></li>
                            <li className={styles.nav_link}>
                                <Link href="#">Карта сайта</Link></li>
                        </ul>
                    </nav>
                    <p className={styles.copyright}>Copyright &copy; 2020. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default DesktopFooter;