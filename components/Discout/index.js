import styles from './style.module.scss';
import Form from './Form';
import Image from 'next/image';
import LeftRibons from '../../public/images/left-ribons.png';
import RightRibons from '../../public/images/right-ribons.png';

const Discount = ({ title, descr, alt }) => {
    return (
        <>
            <section className={styles.discount}>
                <div className={styles.discount__wrapper}>
                    <div className="container">
                        <div className={styles.discount__content}>
                            <h2 className={styles.discount__title}>
                                {title && title}
                            </h2>
                            <div className={styles.discount__descr}>
                                <p>
                                    {descr && descr}
                                </p>
                            </div>
                            <Form />
                        </div>
                    </div>
                    {LeftRibons && <Image
                        className={styles.left_ribons}
                        alt={alt}
                        src={LeftRibons}
                        objectFit='contain'
                    />}
                    {RightRibons && <Image
                        className={styles.right_ribons}
                        alt={alt}
                        src={RightRibons}
                        objectFit='contain'
                    />}
                </div>
            </section>
        </>
    )
}

export default Discount;