import Image from 'next/image';
import styles from './style.module.scss';

const Main = ({ title, descr, btn_text, image, bg_text, alt }) => {
    return (
        <section className={styles.main}>
            <div className='container'>
                <div className={styles.main__content}>
                    <h1 className={styles.main__title}>{title && title}</h1>
                    <p className={styles.main__descr}>{descr && descr}</p>
                    <button className='btn btn_main'>{btn_text}</button>
                    <div className={styles.main__img_block}>
                        {image && (
                            <Image
                                className={styles.main__img}
                                src={image}
                                alt={alt}
                                fill
                                priority
                            />
                        )}
                    </div>
                    <span
                        className={`
                        ${styles.main__bg_text} 
                        ${styles.main__bg_toptext}
                    `}
                    >
                        {bg_text && bg_text}
                    </span>
                    <span
                        className={`
                        ${styles.main__bg_text} 
                        ${styles.main__bg_bottext}
                    `}
                    >
                        {bg_text && bg_text}
                    </span>
                </div>
            </div>
        </section>
    );
};

export default Main;
