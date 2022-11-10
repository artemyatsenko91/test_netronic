import styles from './style.module.scss';
import Image from 'next/dist/client/image';
import slide1 from '../../public/images/slide1.png';
import SetItem from './SetItem';

const SetsData = {
    falcon_set: [
        {
            iconUrl: '../../public/images/icons/tag-f1.svg',
            title: 'Тагер Falcon F1',
            count: '6 pcs'
        },
        {
            iconUrl: '../../public/images/icons/sirius.svg',
            title: 'Станция Sirius',
            count: '6 pcs'
        },
        {
            iconUrl: '../../public/images/icons/tag-f2.svg',
            title: 'Тагер Falcon F2',
            count: '6 pcs'
        },
        {
            iconUrl: '../../public/images/icons/band.svg',
            title: 'Повязка Netronic',
            count: '6 pcs'
        },
        {
            iconUrl: '../../public/images/icons/smart.svg',
            title: 'Контрольная точка Smart',
            count: '6 pcs'
        },
    ],
    galaxy_eclipse_set: [
        {
            iconUrl: '../../public/images/icons/tag-f1.svg',
            title: 'Тагер Falcon F1',
            count: '6 pcs'
        },
    ]
}

const Slider = () => {
    return (
        <section className={styles.slider}>
            <div className="container">
                <div className={styles.slider__image}>
                    <Image
                        src={slide1}
                        alt="FALCON STANDART SET"
                    />
                    <div className={styles.slider__dicount}>-15%</div>
                </div>
                <div className={styles.slider__set_info}>
                    <h2 className={styles.slider__set_title}>
                        <span className='blue_selection'>FALCON STANDART</span>
                        SET
                    </h2>
                    <p className={styles.slider__set_descr}>Премиум тагеры с импульсной отдачей, цветным IPS дисплеем и прочным
                        корпусом.</p>
                    <div className={styles.what_is_included}>
                        {/* <div className={styles.set__item}>
                            <Image
                                src={icon}
                                alt="Тагер Falcon F1"
                            />
                            <div className={styles.item_descr}>
                                <h4 className={styles.item_title}>Тагер Falcon F1</h4>
                                <span className={styles.count_in_set}>6 pcs</span>
                            </div>
                        </div> */}
                        {SetsData.falcon_set.map(item => {
                            <SetItem
                                iconUrl={item.iconUrl}
                                title={item.title}
                                count={item.count}
                            />
                        })}

                    </div>
                    <div className={styles.slider__controls}>
                        <i className="fa-solid fa-circle-chevron-left"></i>
                        <div className={styles.slider__dots}>
                            <div className={`${styles.dot} ${styles.dot_active}`}></div>
                            <div className={styles.dot}></div>
                        </div>
                        <i className="fa-solid fa-circle-chevron-right"></i>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Slider;