import React from "react";
import ContentSectionStyled from "./ContentSectionsStyled";

interface DivElementProps {
    title: string;
    subtitle: string;
}

const DivElement: React.FC<DivElementProps> = ({title, subtitle}) => {
    return (
        <ContentSectionStyled>
            <h2>{title}</h2>
            <p>{subtitle}</p>
        </ContentSectionStyled>
    )
}

export default DivElement;