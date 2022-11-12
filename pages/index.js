import Header from "../components/header";
import Main from "../components/MainSection";
import Discount from "../components/DiscoutSection";
import Slider from "../components/SliderSection";
import Timer from "../components/TimerSection";
import DesktopFooter from "../components/Footer/DesktopFooter";
import MobileFooter from "../components/Footer/MobileFooter";
import logo from '../public/images/icons/logo.svg';

export default function Home() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600000);
  return (
    <>
      <Header logo={logo} />
      <Main
        title={
          <>
            <span className='blue_selection'>КАЖДОМУ</span> ПО&nbsp;ЧЕРНОМУ ТАГЕРУ В&nbsp;ЧЕРНУЮ ПЯТНИЦУ!
          </>}
        descr='Только до 26 ноября сэкономьте до 20% при покупке одного из сетов с 12 игровыми комплектами FALCON STANDARD или ECLIPSE.'
        btn_text="Получить скидку!"
        image='/images/main.png'
        bg_text='ЧЕРНАЯ ПЯТНИЦА'
      />
      <Discount />
      <Slider />
      <Timer
        expiryTimestamp={time}
        title={
          <>
            <span className="blue_selection">Успей до окончания</span> Черной&nbsp;Пятницы!
          </>}
        btn_text='Получить скидку!'
      />
      <DesktopFooter />
      <MobileFooter />
    </>
  )
}
