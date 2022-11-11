import styles from './style.module.scss';

const SetItem = ({ iconUrl, title, count }) => {
    return (
        <div className={styles.set__item}>
            <img
                src={iconUrl}
                alt={title}
            />
            <div className={styles.item__descr}>
                <h4 className={styles.item__title}>{title}</h4>
                <span className={styles.count_in_set}>{count}</span>
            </div>
        </div>
    )
}

export default SetItem;