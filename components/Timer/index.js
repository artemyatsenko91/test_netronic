import styles from './style.module.scss';
import CountDown from './Countdown';

const TimerSection = (props) => {
    return (
        <section className={styles.timer}>
            <div className={styles.timer__wrapper}>
                <div className="container">
                    <h2 className={styles.timer__title}>
                        {props.title}
                    </h2>
                    <CountDown date={props.date} textAfterDigits={props.textAfterDigits}/>
                    <button className="btn btn_timer">{props.btn_text}</button>
                </div>
            </div>
        </section>
    )
}

export default TimerSection;