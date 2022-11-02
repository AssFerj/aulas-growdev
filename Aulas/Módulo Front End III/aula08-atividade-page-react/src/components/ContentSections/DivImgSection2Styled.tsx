import styled from "styled-components";

interface ImgProps {
    source: string;
}

const DivImgSection2Styled = styled.div<ImgProps>`
    width: 50%;
    height: 30rem;
    background-image: url(${(props)=>props.source});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`;

export default DivImgSection2Styled;