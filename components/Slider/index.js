import styles from './style.module.scss';
import Image from 'next/dist/client/image';
import Slider from "react-slick";
import KitInfo from './KitInfo';
import "slick-carousel/slick/slick.css";
import { sliderData } from "../../data/pages/BlackFriday";

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
                <div className="slider__content">
                    <Slider {...settings}>
                        {sliderData?.map((item, index) => (
                            <div
                                className={styles.slider__kit}
                                key={index}
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
                                <KitInfo
                                    key={index}
                                    title={item.title}
                                    descr={item.descr}
                                    kitData={item.kitData}
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default SliderSection;