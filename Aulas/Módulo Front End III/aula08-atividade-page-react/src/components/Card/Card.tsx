import React from "react";
import CardStylized from "./CardStylized";
import ImgStylized from "./ImgStyled";

interface CardProps {
    imgSource: string;
    imgAlt: string;
    title: string;
    subtitle: string;
}

const Card: React.FC<CardProps> = ({imgSource, imgAlt, title, subtitle}) => {
    return (
        <CardStylized>
            <ImgStylized src={imgSource} alt={imgAlt} />
            <h2>{title}</h2>
            <p>{subtitle}</p>
        </CardStylized>
    )
}

export default Card;