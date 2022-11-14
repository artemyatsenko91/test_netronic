import styles from './style.module.scss';
import Image from 'next/image';
import Slider from 'react-slick';
import KitInfo from './KitInfo';
import 'slick-carousel/slick/slick.css';

const SliderKits = ({ sliderData, next, prev }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: (
            <div>
                <div className='next-slick-arrow'>
                    <Image src={next} alt='nextArr' />
                </div>
            </div>
        ),
        prevArrow: (
            <div>
                <div className='next-slick-arrow'>
                    <Image src={prev} alt='nextArr' />
                </div>
            </div>
        ),
    };
    return (
        <section className={styles.slider}>
            <div className='container'>
                <div className='slider__content'>
                    <Slider {...settings}>
                        {sliderData?.map((item, index) => (
                            <div className={styles.slider__kit} key={index}>
                                <div className={styles.slider__img_block}>
                                    <Image
                                        className={styles.slider__img}
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        priority
                                    />
                                    <div className={styles.slider__dicount}>
                                        {item.discount}
                                    </div>
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
    );
};

export default SliderKits;
