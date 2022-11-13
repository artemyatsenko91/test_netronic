import Link from "next/dist/client/link";
import SocialNetworkLink from "../SocialNetworkLink";
import { SocialNetworksData, FeedBackInfoData } from "../../../data/pages/BlackFriday";
import FeedBackInfo from "../FeedBackInfo";
import styles from './style.module.scss';

const MobileFooter = ({ footerLogoMobile }) => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footer__mobile}>
                    {FeedBackInfoData.map((item, index) => (
                        <FeedBackInfo
                            key={index}
                            field_name={item.field_name}
                            field_value={item.field_value}
                            data={item.data}
                            style_name={item.style_name}
                        />
                    ))}
                    {footerLogoMobile && (
                        <Link href="#" className={styles.footer__logo}>
                            <img src={footerLogoMobile} alt="logo" />
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
                </div>
            </div>
        </footer>
    )
}

export default MobileFooter;