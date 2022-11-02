import React from "react";
import DivElement from "../ContentSections/ContentSections";
import DivImgSection2Styled from "../ContentSections/DivImgSection2Styled";
import DivSectionStyled from "../ContentSections/DivSectionStyled";
import SectionStylized from "../Section2/SectionStylized";
import ImgBackDiv from "../../images/2.png";

const Section3: React.FC = () => {
    return (
        <SectionStylized>
            <DivImgSection2Styled source={ImgBackDiv} />
            <DivSectionStyled>
                <DivElement 
                    title="Lorem Ipsum" 
                    subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                />
            </DivSectionStyled>
        </SectionStylized>
    )
}

export default Section3;