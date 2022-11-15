import React from "react";
import LinkStyled from "./LinkStyled";
import NavStyled from "./NavStyled";

const Nav: React.FC = () => {
    return (
        <NavStyled>
            <LinkStyled href="/">About <span>&middot;</span> </LinkStyled>
            <LinkStyled href="/">Contact <span>&middot;</span> </LinkStyled>
            <LinkStyled href="/">Term of Use <span>&middot;</span> </LinkStyled>
            <LinkStyled href="/">Privacy Policy</LinkStyled>
        </NavStyled>
    )
}

export default Nav;