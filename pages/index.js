import Header from "../components/header";
import MainSection from "../components/MainSection";
import DiscountSection from "../components/DiscoutSection";
import SliderSection from "../components/SliderSection";
import TimerSection from "../components/TimerSection";
import DesktopFooter from "../components/Footer/DesktopFooter";

export default function Home() {
  console.log();
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600000);
  return (
    <>
      <Header />
      <MainSection />
      <DiscountSection />
      <SliderSection />
      <TimerSection expiryTimestamp={time} />
      <DesktopFooter />
    </>
  )
}
