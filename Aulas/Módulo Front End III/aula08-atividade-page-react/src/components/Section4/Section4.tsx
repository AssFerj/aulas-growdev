import React from "react";
import DivElement from "../ContentSections/ContentSections";
import DivImgSection3Styled from "../ContentSections/DivImgSection3Styled";
import DivSectionStyled from "../ContentSections/DivSectionStyled";
import SectionStylized from "../Section2/SectionStylized";
import ImgBackDiv from "../../images/3.png";

const Section4: React.FC = () => {
    return (
        <SectionStylized>
            <DivSectionStyled>
                <DivElement 
                    title="Lorem Ipsum" 
                    subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                />
            </DivSectionStyled>
            <DivImgSection3Styled source={ImgBackDiv} />
        </SectionStylized>
    )
}

export default Section4;