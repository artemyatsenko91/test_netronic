import styles from './style.module.scss';

const DesktopFooter = () => {
    const screenWidth = window.screen.width;
    console.log(screenWidth);
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footer__wrapper}>
                    <a href="#">
                        <img src="/images/icons/footer-logo.svg" alt="logo" />
                    </a>
                    <ul className={styles.footer__social_networks}>
                        <li className={styles.networks_icon}>
                            <a href="https://www.facebook.com/HRnetronic/" target="_blank">
                                <i className="fa-brands fa-square-facebook"></i>
                            </a>
                        </li>
                        <li className={styles.networks_icon}>
                            <a href="https://www.instagram.com/hr_netronic/" target="_blank">
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                        </li>
                        <li className={styles.networks_icon}>
                            <a href="#" target="_blank">
                                <i className="fa-brands fa-youtube"></i>
                            </a>
                        </li>
                        <li className={styles.networks_icon}>
                            <a href="https://www.linkedin.com/company/netronic-family/mycompany/" target="_blank">
                                <i className="fa-brands fa-linkedin"></i>
                            </a>
                        </li>
                        <li className={styles.networks_icon}>
                            <a href="#" target="_blank">
                                <i className="fa-brands fa-vk"></i>
                            </a>
                        </li>
                    </ul>
                    <nav>
                        <ul className={styles.footer__nav}>
                            <li className={styles.nav_link}><a href="#">Политика конфиденциальности</a></li>
                            <li className={styles.nav_link}><a href="#">Карта сайта</a></li>
                        </ul>
                    </nav>
                    <p className={styles.copyright}>Copyright &copy; 2020. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default DesktopFooter;