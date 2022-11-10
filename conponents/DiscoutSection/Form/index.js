import styles from './style.module.scss';

const Form = () => {
    return (
        <form className={styles.discount__form}>
            <div className={styles.form__input_row}>
                <input
                    className={styles.input_field}
                    type="text"
                    name="name"
                    placeholder="Имя"
                />
                <input
                    className={styles.input_field}
                    type="text"
                    name="tel"
                    placeholder="Телефон"
                />
                <input
                    className={styles.input_field}
                    type="text"
                    name="email"
                    placeholder="EMAIL"
                />
            </div>
            <input
                className={styles.btn_submit}
                type="submit"
                value="Получить скидку"
            />
        </form>
    )
}

export default Form;