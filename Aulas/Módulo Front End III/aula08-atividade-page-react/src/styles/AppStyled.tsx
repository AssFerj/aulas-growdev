import styled from "styled-components";

const AppStyled = styled.body`
    background-color: ${(props)=>props.theme.light.text};
    color: ${(props)=>props.theme.dark.dark}
`;

export default AppStyled;