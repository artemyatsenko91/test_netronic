import styles from './style.module.scss';
import Link from 'next/dist/client/link';

const FooterMenuLink = ({ url, name }) => {
    return (
        <li className={styles.nav_link}>
            <Link href={url}>
                {name}
            </Link>
        </li>
    )
}

export default FooterMenuLink;