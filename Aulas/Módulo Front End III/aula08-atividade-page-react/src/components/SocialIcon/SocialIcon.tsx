import React from "react";
import SocialIconStyled from "./SocialIconStyled";

interface SocialIconProps {
    imgSource: string;
    imgAlt: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({imgSource, imgAlt}) => {
    return <SocialIconStyled src={imgSource} alt={imgAlt} />
}

export default SocialIcon;