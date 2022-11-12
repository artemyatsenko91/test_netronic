import Image from "next/image";
import styles from './style.module.scss';

const Main = ({title,  descr, btn_text, image, bg_text}) => {
    return (
        <section className={styles.main}>
            <div className="container">
                <div className={styles.main__content}>
                    <h1 className={styles.main__title}>
                        {title}
                    </h1>
                    <p className={styles.main__descr}>
                        {descr}
                    </p>
                    <button className='btn btn_main'>{btn_text}</button>
                    <div className={styles.main__img_block}>

                        <Image
                            src={image}
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
                        {bg_text}
                    </span>
                    <span className={`
                        ${styles.main__bg_text} 
                        ${styles.main__bg_bottext}
                    `}>
                        {bg_text}
                    </span>
                </div>
            </div>
        </section>
    )
}

export default Main;