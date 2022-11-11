import Image from "next/image";
import MainImage from '../../public/images/main.png';
import styles from './style.module.scss';

const MainSection = () => {
    return (
        <section className={styles.main}>
            <div className="container">
                <div className={styles.main__content}>
                    <h1 className={styles.main__title}>
                        <span className='blue_selection'>КАЖДОМУ</span> ПО ЧЕРНОМУ ТАГЕРУ В&nbsp;ЧЕРНУЮ ПЯТНИЦУ!
                    </h1>
                    <p className={styles.main__descr}>
                        Только до 26 ноября сэкономьте до 20% при покупке одного из сетов с 12 игровыми комплектами FALCON STANDARD или
                        ECLIPSE.
                    </p>
                    <button className='btn btn_main'>Получить скидку!</button>
                    <div className={styles.main__img_block}>

                        <Image
                            src={MainImage}
                            alt="Black-Friday"
                            fill
                            objectFit="cover"
                            objectPosition="70% 50%"
                            priority
                        />
                    </div>
                    <span className={`
                    ${styles.main__bg_text} 
                    ${styles.main__bg_toptext}
                    `}>
                        ЧЕРНАЯ ПЯТНИЦА
                    </span>
                    <span className={`
                    ${styles.main__bg_text} 
                    ${styles.main__bg_bottext}
                    `}>
                        ЧЕРНАЯ ПЯТНИЦА
                    </span>
                </div>
            </div>
        </section>
    )
}

export default MainSection;