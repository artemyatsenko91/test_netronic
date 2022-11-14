import MobileFooter from "./MobileFooter";
import DesktopFooter from "./DesktopFooter";

const Footer = ({ copyright, footerLogo, footerLogoMobile, data}) => {
    return (
        <>
            <DesktopFooter
                data={data}
                footerLogo={footerLogo}
                copyright={copyright} />
            <MobileFooter
                footerLogoMobile={footerLogoMobile} />
        </>
    )
}

export default Footer;