import styles from './style.module.scss';
import KitItem from '../KitItem';

const KitInfo = ({ kitData, title, descr }) => {
    return (
        <div className={styles.slider__kit_info}>
            <h2 className={styles.slider__kit_title}>
                {title}
            </h2>
            <p className={styles.slider__kit_descr}>{descr}</p>
            <div className={styles.what_is_included}>
                {kitData?.map(item => (
                    <KitItem
                        key={item.src}
                        src={item.src}
                        title={item.title}
                        count={item.count}
                    />
                ))}
            </div>
        </div>
    )
}

export default KitInfo;