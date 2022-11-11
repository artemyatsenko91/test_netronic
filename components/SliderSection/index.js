import styles from './style.module.scss';
import Image from 'next/dist/client/image';
import SetItem from './SetItem';
import FalconKit from '../../data/Slider/FalconKit';
import dataSalesKits from '../../data/Slider';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderSection = () => {
    console.log(dataSalesKits);
    const arrowLeft = (
        <svg width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="25" cy="25.8594" r="25" transform="rotate(-180 25 25.8594)" fill="#C4C4C4" />
            <g clipPath="url(#clip0_1_100)">
                <path d="M27 31.8594L28.41 30.4494L23.83 25.8594L28.41 21.2694L27 19.8594L21 25.8594L27 31.8594Z" fill="white" />
            </g>
            <defs>
                <clipPath id="clip0_1_100">
                    <rect width="24" height="24" fill="white" transform="translate(37 37.8594) rotate(-180)" />
                </clipPath>
            </defs>
        </svg>
    )

    const arrowRight = (
        <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="25.7803" cy="25.8594" r="25" fill="#C4C4C4" />
            <g clipPath="url(#clip0_1_88)">
                <path d="M23.7803 19.8594L22.3703 21.2694L26.9503 25.8594L22.3703 30.4494L23.7803 31.8594L29.7803 25.8594L23.7803 19.8594Z" fill="white" />
            </g>
            <defs>
                <clipPath id="clip0_1_88">
                    <rect width="24" height="24" fill="white" transform="translate(13.7803 13.8594)" />
                </clipPath>
            </defs>
        </svg>
    )

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <section className={styles.slider}>
            <div className="container">
                <Slider {...settings}>
                    {dataSalesKits.map(item => (
                        <>
                            <div className={styles.slider__image}>
                                <Image
                                    src={item.src}
                                    alt={item.title}
                                    fill
                                />
                                <div className={styles.slider__dicount}>{item.discount}</div>
                            </div>
                            <div className={styles.slider__set_info}>
                                <h2 className={styles.slider__set_title}>
                                    <span className='blue_selection'>{item.title}</span>SET
                                </h2>
                                <p className={styles.slider__set_descr}>{item.desrc}</p>
                                <div className={styles.what_is_included}>
                                    {FalconKit?.map(item => (
                                        <SetItem
                                            key={item.src}
                                            iconUrl={item.src}
                                            title={item.title}
                                            count={item.count}
                                        />
                                    ))}
                                </div>
                                <div className={styles.slider__controls}>
                                    <button className={styles.arrow_left}>{arrowLeft}</button>
                                    <div className={styles.slider__dots}>
                                        <div className={`${styles.dot} ${styles.dot_active}`}></div>
                                        <div className={styles.dot}></div>
                                    </div>
                                    <button className={styles.arrow_right}>{arrowRight}</button>
                                </div>
                            </div>
                        </>
                    ))}
                </Slider>
            </div>
        </section>

    )
}

export default SliderSection;