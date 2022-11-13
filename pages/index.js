import Header from "../components/Header";
import Main from "../components/Main";
import Discount from "../components/Discout";
import Slider from "../components/Slider";
import Timer from "../components/Timer";
import logo from '../public/images/icons/logo.svg';
import { SliderData } from "../data/pages/BlackFriday";
import { LinkNames } from "../data/pages/BlackFriday";
import Footer from "../components/Footer";

const textAfterDigits = {
  afterDays: 'д.',
  afterHours: 'ч.',
  afterMinutes: 'м.',
  afterSeconds: 'c.',
}

export default function Home() {
  return (
    <>
      <Header logo={logo} linkNames={LinkNames} />
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
      <Discount
        title={
          <span className="blue_selection">СКИДКА НА&nbsp;ЧЕРНУЮ ПЯТНИЦУ</span>
        }
        descr="Только с 15 до 26 ноября - поспешите оставить заявку и мы обязательно свяжемся
        с вами!"
      />
      <Slider sliderData={SliderData} />
      <Timer
        date="2022-11-24T00:00:00"
        textAfterDigits={textAfterDigits}
        title={
          <>
            <span className="blue_selection">Успей до окончания</span> Черной&nbsp;Пятницы!
          </>}
        btn_text='Получить скидку!'
      />
      <Footer
        footerLogo='/images/icons/footer-logo.svg'
        footerLogoMobile='/images/icons/fotter-mob-logo.svg'
        privacyPolicy='Политика конфиденциальности'
        map='Карта сайта'
        copyright={
          `Copyright © ${new Date().getFullYear()}. All Rights Reserved.`
        } />
    </>
  )
}
