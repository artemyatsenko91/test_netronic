import styles from './style.module.scss';
import Form from './Form';
import Image from 'next/image';
import LeftRibons from '../../public/images/left-ribons.png';
import RightRibons from '../../public/images/right-ribons.png';

const DiscountSection = () => {
    return (
        <>
            <section className={styles.discount}>
                <div className={styles.discount__wrapper}>
                    <div className="container">
                        <div className={styles.discount__content}>
                            <h2 className={styles.discount__title}>
                                <span className="blue_selection">СКИДКА НА&nbsp;ЧЕРНУЮ ПЯТНИЦУ</span>
                            </h2>
                            <div className={styles.discount__descr}>
                                <p>
                                    Только с 15 до 26 ноября - поспешите оставить заявку и мы обязательно свяжемся
                                    с вами!
                                </p>
                            </div>
                            <Form />
                        </div>
                    </div>
                    <Image
                        className={styles.left_ribons}
                        alt='ribons'
                        src={LeftRibons}
                        objectFit='contain'
                    />
                    <Image
                        className={styles.right_ribons}
                        alt='ribons'
                        src={RightRibons}
                        objectFit='contain'
                    />
                </div>
            </section>
        </>
    )
}

export default DiscountSection;