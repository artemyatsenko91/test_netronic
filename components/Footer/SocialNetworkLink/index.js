import styles from "./style.module.scss";
import Link from "next/link";

const SocialNetworkLink = ({ url, icon }) => {
    return (
        <li className={styles.networks_icon}>
            <Link href={url} target="_blank">
                <i className={`fa-brands ${icon}`}></i>
            </Link>
        </li>
    )
}

export default SocialNetworkLink;