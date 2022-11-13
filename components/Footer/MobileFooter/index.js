import Link from "next/dist/client/link";
import SocialNetworkLink from "../SocialNetworkLink";
import { SocialNetworksData, FeedBackInfoData } from "../../../data/pages/BlackFriday";
import FeedBackInfo from "../FeedBackInfo";
import styles from './style.module.scss';

const MobileFooter = () => {
    const logoSVG = <svg
        width="163"
        height="17"
        viewBox="0 0 163 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M150.312 13.9311C149.566 13.173 148.968 12.3201 148.533 11.3213C148.097 10.3226 147.869 9.28017 147.869 8.1794C147.869 7.05676 148.097 5.99973 148.533 4.99372C148.968 4.01688 149.566 3.15667 150.312 2.4204C151.08 1.66225 151.943 1.09364 152.955 0.663535C153.944 0.233433 155.021 0.00744629 156.158 0.00744629C157.295 0.00744629 158.365 0.211563 159.362 0.641666C160.351 1.07177 161.244 1.66225 162.005 2.41311L160.041 4.30848C158.949 3.24415 157.642 2.74115 156.158 2.74115C155.391 2.74115 154.675 2.88695 154.01 3.14938C153.331 3.43369 152.748 3.82005 152.253 4.33035C151.759 4.81877 151.367 5.39467 151.072 6.04347C150.784 6.71414 150.637 7.40667 150.637 8.16482C150.637 8.92297 150.784 9.61551 151.072 10.2862C151.36 10.9423 151.751 11.5109 152.268 11.9993C152.763 12.5096 153.346 12.896 154.003 13.1803C154.682 13.4427 155.383 13.5885 156.151 13.5885L159.355 15.688C158.365 16.1181 157.288 16.3222 156.151 16.3222C155.014 16.3222 153.944 16.0962 152.947 15.6661C151.943 15.2506 151.08 14.6601 150.312 13.9311Z"
            fill="white"
        />
        <path
            d="M10.9766 0.00878906V9.77723L0 0.00878906V2.74978V4.12757V13.6336L2.74601 16.3235V6.56968L13.7227 16.3235V16.3017V16.2798V0.00878906H10.9766Z"
            fill="white"
        />
        <path
            d="M126.054 0.00744629V9.77588L115.07 0.00744629V2.74844V4.12623V13.6322L117.816 16.3222V6.56834L128.793 16.3222V16.3003V16.2785V0.00744629H126.054Z"
            fill="white"
        />
        <path
            d="M136.958 2.74469L139.704 0.0109863V16.3184L136.958 13.6285V2.74469Z"
            fill="white"
        />
        <path
            d="M60.5091 0.00744629H52.2858H51.9979H43.7747L46.4985 2.71928H50.7652V5.96328V16.3222H53.5112V5.96328V2.71928H57.7852L60.5091 0.00744629Z"
            fill="white"
        />
        <path
            d="M21.8948 6.80859V9.52043H25.3125H35.6101V6.80859H25.3125H21.8948Z"
            fill="white"
        />
        <path
            d="M30.4059 0.00744629H27.1357H21.8873L24.6112 2.71928H27.1357H30.4059H35.61V0.00744629H30.4059Z"
            fill="white"
        />
        <path
            d="M27.1357 13.61H24.6112L21.8873 16.3218H27.1357H30.4059H35.61V13.61H30.4059H27.1357Z"
            fill="white"
        />
        <path
            d="M80.6988 9.68112C81.8356 8.58763 82.4114 7.23901 82.4114 5.67897C82.4114 4.12623 81.8356 2.78489 80.7062 1.67683C79.5842 0.568767 78.2185 0.00744629 76.6536 0.00744629H76.159H68.6813L71.4052 2.71928H76.2107H76.6462C77.4804 2.71928 78.1742 3.00359 78.7648 3.58678C79.3553 4.16997 79.6432 4.85522 79.6432 5.67897C79.6432 6.51002 79.3553 7.20256 78.7648 7.78575C78.189 8.35436 77.5099 8.63137 76.6905 8.63866H71.3978L68.674 11.3505H74.0109L78.595 16.3222H82.3966L77.7018 11.2557C78.8386 11.0516 79.8425 10.5267 80.6988 9.68112Z"
            fill="white"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M98.741 16.3294C103.25 16.3294 106.906 12.674 106.906 8.16472C106.906 7.07644 106.693 6.03789 106.306 5.08846L104.149 7.53747C104.391 9.62818 103.401 11.76 101.463 12.8793C99.5234 13.9988 97.1817 13.7896 95.4918 12.5341L92.2958 13.1775C93.7898 15.0957 96.1214 16.3294 98.741 16.3294ZM91.1763 11.2426C90.7895 10.2927 90.5763 9.25362 90.5763 8.16472C90.5763 3.65547 94.2318 0 98.741 0C101.361 0 103.692 1.23389 105.186 3.15223L101.989 3.79556C100.299 2.541 97.958 2.33221 96.0194 3.45147C94.0802 4.57106 93.0906 6.70368 93.333 8.79492L91.1763 11.2426Z"
            fill="white"
        />
    </svg>

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
                    <Link href="#" className={styles.footer__logo}>
                        <span >{logoSVG}</span>
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
                </div>
            </div>
        </footer>
    )
}

export default MobileFooter;