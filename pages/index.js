import Header from "../components/Header";
import Main from "../components/Main";
import Discount from "../components/Discout";
import Slider from "../components/Slider";
import Timer from "../components/Timer";
import logo from '../public/images/icons/logo.svg';
import { linkNames } from "../data/pages/BlackFriday";
import Footer from "../components/Footer";
import phoneIcon from '../public/images/icons/header-phone.svg';
import { footerMenuLinksData } from "../data/pages/BlackFriday";

const textAfterDigits = {
  afterDays: 'д.',
  afterHours: 'ч.',
  afterMinutes: 'м.',
  afterSeconds: 'c.',
}

export default function Home() {
  return (
    <>
      <Header logo={logo} linkNames={linkNames} phoneIcon={phoneIcon}/>
      <Main
        title={
          <>
            <span className='blue_selection'>КАЖДОМУ</span> ПО&nbsp;ЧЕРНОМУ ТАГЕРУ В&nbsp;ЧЕРНУЮ ПЯТНИЦУ!
          </>}
        descr='Только до 26 ноября сэкономьте до 20% при покупке одного из сетов с 12 игровыми комплектами FALCON STANDARD или ECLIPSE.'
        btn_text="Получить скидку!"
        image='/images/main.png'
        bg_text='ЧЕРНАЯ ПЯТНИЦА'
        alt='Black Friday'
        objectPosition="70% 50%"
      />
      <Discount
        title={
          <span className="blue_selection">СКИДКА НА&nbsp;ЧЕРНУЮ ПЯТНИЦУ</span>
        }
        descr="Только с 15 до 26 ноября - поспешите оставить заявку и мы обязательно свяжемся
        с вами!"
        alt='ribons'
      />
      <Slider />
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
        data={footerMenuLinksData}
        footerLogo='/images/icons/footer-logo.svg'
        footerLogoMobile='/images/icons/fotter-mob-logo.svg'
        copyright={
          `Copyright © ${new Date().getFullYear()}. All Rights Reserved.`
        } />
    </>
  )
}
