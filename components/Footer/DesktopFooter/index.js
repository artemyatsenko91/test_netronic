import styles from './style.module.scss';
import SocialNetworkLink from '../SocialNetworkLink';
import { socialNetworksData } from '../../../data/pages/BlackFriday';
import Link from 'next/dist/client/link';
import FooterMenuLink from '../FooterMenuLink';

const DesktopFooter = ({ copyright, footerLogo, data }) => {
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
                        {socialNetworksData?.map((item, index) => (
                            <SocialNetworkLink
                                key={index}
                                url={item.url}
                                icon={item.icon}
                            />
                        ))}
                    </ul>
                    <nav>
                        <ul className={styles.footer__nav}>
                            {data?.map((item, index) => (
                                <FooterMenuLink
                                    key={index}
                                    url={item.url}
                                    name={item.name}
                                />
                            ))}
                        </ul>
                    </nav>
                    <p className={styles.copyright}>{copyright}</p>
                </div>
            </div>
        </footer>
    )
}

export default DesktopFooter;