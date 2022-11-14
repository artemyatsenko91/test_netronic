import Countdown, { zeroPad } from "react-countdown";
import styles from "./style.module.scss";

export default function CountDown(props) {
  const afterDaysText = props.textAfterDigits.afterDays;
  const afterHoursText = props.textAfterDigits.afterHours;
  const afterMinutesText = props.textAfterDigits.afterMinutes;
  const afterSecondsText = props.textAfterDigits.afterSeconds;

  const renderer = (props) => {
    return (
      <div className={styles.countdown}>
        <div className={styles.countdown__block}>
          <span id="days">{zeroPad(props.days)} </span>
          {afterDaysText}
        </div>
        <div className={styles.countdown__block}>
          <span id="hours">{zeroPad(props.hours)} </span>
          {afterHoursText}
        </div>
        <div className={styles.countdown__block}>
          <span id="minutes">{zeroPad(props.minutes)} </span>
          {afterMinutesText}
        </div>
        <div className={styles.countdown__block}>
          <span id="seconds">{zeroPad(props.seconds)} </span>
          {afterSecondsText}
        </div>
      </div>
    );
  };

  return <Countdown date={props.date} renderer={renderer} />;
}
