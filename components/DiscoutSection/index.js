import styles from './style.module.scss';
import Form from './Form';

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
                            <Form/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DiscountSection;