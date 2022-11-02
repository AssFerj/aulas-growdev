import React from "react";
import { Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Theme from "../../config/Theme/Theme";
import HeaderStylized from "./HeaderStylized";

const Header: React.FC = () => {
    return (
        <ThemeProvider theme={Theme}>
            <HeaderStylized>
                <Link to={"https://www.growdev.com.br"}>GROWDEV</Link>
                <Link to={"https://www.google.com.br"}>GOOGLE</Link>
                <Link to={"mailto:assisjuniorwm@gmail.com"}>CONTATO</Link>
            </HeaderStylized>
        </ThemeProvider>
    )
}
export default Header;