import MobileFooter from "./MobileFooter";
import DesktopFooter from "./DesktopFooter";

const Footer = ({ privacyPolicy, map, copyright, footerLogo, footerLogoMobile }) => {
    return (
        <>
            <DesktopFooter
                footerLogo={footerLogo}
                privacyPolicy={privacyPolicy}
                map={map}
                copyright={copyright} />
            <MobileFooter
                footerLogoMobile={footerLogoMobile} />
        </>
    )
}

export default Footer;