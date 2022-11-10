import styles from './style.module.scss';
import Image from 'next/dist/client/image';

const SetItem = ({ iconUrl, title, count }) => {
    console.log(iconUrl, title, count);
    return (
        <div class={styles.set__item}>
            <Image
                src={iconUrl}
                alt={title}
            />
            <div class={styles.item__descr}>
                <h4 class={styles.item__title}>{title}</h4>
                <span class={styles.count_in_set}>{count}</span>
            </div>
            <span class={styles.count_in_set}>{count}</span>
        </div>
    )
}

export default SetItem;