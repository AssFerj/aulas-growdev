import React from "react";
import Nav from "../Nav/Nav";
import SocialIcon from "../SocialIcon/SocialIcon";
import FooterStylized from "./FooterStylized";
import faceIcon from '../../images/facebook.svg';
import twitIcon from '../../images/twitter.svg';
import instaIcon from '../../images/instagram.svg';
import CopyStylized from "./CopyStyled";

const Footer: React.FC = () => {
    return (
        <FooterStylized>
            <div>
                <Nav />
                <CopyStylized>&copy; Your Website 2020. All Rights Reserved.</CopyStylized>
            </div>
            <div>
                <SocialIcon imgSource={faceIcon} imgAlt="Facebook"/>
                <SocialIcon imgSource={twitIcon} imgAlt="twitter"/>
                <SocialIcon imgSource={instaIcon} imgAlt="instagram"/>
            </div>
        </FooterStylized>
    )
}

export default Footer;