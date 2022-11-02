import styled from "styled-components";
import Theme from "../../config/Theme/Theme";

const HeaderStylized = styled.header`
    padding: 1rem;
    display: flex;
    justify-content: space-evenly;
    background-color: ${Theme.light.main};
`;
export default HeaderStylized;