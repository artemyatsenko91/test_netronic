import styles from './style.module.scss';
import { useTimer } from 'react-timer-hook';

const TimerSection = ({ expiryTimestamp, title, btn_text }) => {
    const {
        seconds,
        minutes,
        hours,
        days
    } = useTimer({ expiryTimestamp });
    return (
        <section className={styles.timer}>
            <div className={styles.timer__wrapper}>
                <div className="container">
                    <h2 className={styles.timer__title}>
                        {title && title}
                    </h2>
                    <div className={styles.countdown}>
                        <div className={styles.countdown__block}>
                            <span id="days">{days} </span>
                            д.
                        </div>
                        <div className={styles.countdown__block}>
                            <span id="hours">{hours} </span>
                            ч.
                        </div>
                        <div className={styles.countdown__block}>
                            <span id="minutes">{minutes} </span>
                            м.
                        </div>
                        <div className={styles.countdown__block}>
                            <span id="seconds">{seconds} </span>
                            с.
                        </div>
                    </div>
                    <button className="btn btn_timer">{btn_text && btn_text}</button>
                </div>
            </div>
        </section>
    )
}

export default TimerSection;