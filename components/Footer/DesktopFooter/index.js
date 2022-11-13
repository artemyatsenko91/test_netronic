import styles from './style.module.scss';
import SocialNetworkLink from '../SocialNetworkLink';
import { SocialNetworksData } from '../../../data/pages/BlackFriday';
import Link from 'next/dist/client/link';

const DesktopFooter = ({ privacyPolicy, map, copyright, footerLogo }) => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footer_desktop}>
                    {footerLogo && (
                        <Link href="#">
                            <img src={footerLogo} alt="logo" />
                        </Link>
                    )}
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
                                <Link href="#">{privacyPolicy}</Link></li>
                            <li className={styles.nav_link}>
                                <Link href="#">{map}</Link></li>
                        </ul>
                    </nav>
                    {copyright}
                    <p className={styles.copyright}>{copyright}</p>
                </div>
            </div>
        </footer>
    )
}

export default DesktopFooter;