import React from "react";
import NavStyled from "./NavStyled";

const Nav: React.FC = () => {
    return (
        <NavStyled>
            <a href="/">About</a> <span>&middot;</span> <a href="/">Contact</a> <span>&middot;</span> <a href="/">Term of Use</a> <span>&middot;</span> <a href="/">Privacy Policy</a>
        </NavStyled>
    )
}

export default Nav;