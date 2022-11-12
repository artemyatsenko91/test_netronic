import styles from './style.module.scss';
import Image from 'next/dist/client/image';
import KitItem from './KitItem';
import sliderData from '../../data/pages/BlackFriday/SliderData';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const SliderSection = () => {
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
                    {sliderData.map(item => (
                        <div
                            className={styles.slider__kit}
                            key={item.desrc}
                        >
                            <div className={styles.slider__image}>
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    objectFit="cover"
                                    objectPosition="70% 50%"
                                    priority
                                />
                                <div className={styles.slider__dicount}>{item.discount}</div>
                            </div>
                            <div className={styles.slider__set_info}>
                                <h2 className={styles.slider__set_title}>
                                    {item.title}
                                </h2>
                                <p className={styles.slider__set_descr}>{item.desrc}</p>
                                <div className={styles.what_is_included}>
                                    {item.kitData.map(item => (
                                        <KitItem
                                            key={item.src}
                                            src={item.src}
                                            title={item.title}
                                            count={item.count}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>

    )
}

export default SliderSection;