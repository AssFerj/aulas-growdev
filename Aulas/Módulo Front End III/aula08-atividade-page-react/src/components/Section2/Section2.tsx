import React from "react";
import ContentSection from "../ContentSections/ContentSections";
import DivImgSection1Styled from "../ContentSections/DivImgSection1Styled";
import DivSectionStyled from "../ContentSections/DivSectionStyled";
import SectionStylized from "./SectionStylized";
import ImgBackDiv from "../../images/1.png";

const Section2: React.FC = () => {
    return (
        <SectionStylized>
            <DivSectionStyled>
                <ContentSection 
                    title="Lorem Ipsum" 
                    subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." 
                />
            </DivSectionStyled>
            <DivImgSection1Styled source={ImgBackDiv} />
        </SectionStylized>
    )
}

export default Section2;