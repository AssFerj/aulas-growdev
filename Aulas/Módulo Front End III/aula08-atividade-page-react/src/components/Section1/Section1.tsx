import React from "react";
import Card from "../Card/Card";
import Section1Stylized from "./Section1Stylized";
import icon1 from '../../images/computer.svg';
import icon2 from '../../images/servers.svg';
import icon3 from '../../images/check.svg';

const Section1: React.FC = () => {
    return (
        <Section1Stylized>
            <Card 
                imgSource={icon1}
                imgAlt="Icon1" 
                title="Somente para desktop" 
                subtitle="Vamos aprender, como utilizar um framework." 
            />
            <Card 
                imgSource={icon2}
                imgAlt="Icon2" 
                title="Criado com componentes" 
                subtitle="Utilizamos o Styled Components." 
            />
            <Card 
                imgSource={icon3}
                imgAlt="Icon3" 
                title="Fácil aproveitamento" 
                subtitle="Estamos no caminho." 
            />
        </Section1Stylized>
    )
}

export default Section1;