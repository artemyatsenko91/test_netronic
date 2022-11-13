import SocialNetworkLink from "../SocialNetworkLink";
import Link from "next/dist/client/link";
import styles from './style.module.scss';

const FeedBackInfo = ({ field_name, field_value, data }) => {
    return (
        <div className={styles.footer__feedback}>
            <div className={styles.feedback__block}>
                <span className={styles.feedback__field_name}>
                    {field_name}
                </span>
                {field_name === 'Email'
                    ? (
                        <Link
                            className={styles.feedback__email}
                            href={`mailto:${field_value}`}
                        >{field_value}
                        </Link>
                    )
                    : (
                        <Link
                            className={styles.feedback__phone_number}
                            href={`tel:${field_value}`}
                        >{field_value}
                        </Link>
                    )}
            </div>
            {data && (
                <ul className={styles.feedback__messengers}>
                    {data.map((item, index) => (
                        <SocialNetworkLink
                            key={index}
                            url={item.url}
                            icon={item.icon}
                        />
                    ))}
                </ul>
            )}
        </div>
    )
}

export default FeedBackInfo;