import React, { useState } from "react";
import Link from "next/link";


import {
  Navbar,
  NavbarContainer,
  Logo,
  Menu,
  UnList,
  List,
  NavLink,
  GetStarted,
  Hamburger,
  CloseMenu
} from "./HeaderStyles";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  console.log(isOpen)
  return (
    <Navbar>
      <NavbarContainer>
        <Logo>
          <Link href="/" passHref>
            <span>Growin</span>
          </Link>
        </Logo>
        <Menu isOpen={isOpen}>
          <UnList isOpen={isOpen}>
            <List>
              <Link href="/" passHref>
                <NavLink>Home</NavLink>
              </Link>
            </List>
            <List>
              <Link href="/" passHref>
                <NavLink>About</NavLink>
              </Link>
            </List>
            <List>
              <Link href="/" passHref>
                <NavLink>Services</NavLink>
              </Link>
            </List>
            <List>
              <Link href="/" passHref>
                <NavLink>Portfolio</NavLink>
              </Link>
            </List>
            <List>
              <Link href="/" passHref>
                <NavLink>Team</NavLink>
              </Link>
            </List>
            <List>
              <Link href="/" passHref>
                <NavLink>Blog</NavLink>
              </Link>
            </List>
            <List>
              <Link href="/" passHref>
                <NavLink>Contact</NavLink>
              </Link>
            </List>
            <List>
              <Link href="/" passHref>
                <NavLink>DropDown</NavLink>
              </Link>
            </List>
            <List>
              <Link href="/" passHref>
                <GetStarted>GEt Started</GetStarted>
              </Link>
            </List>
          </UnList>
          <Hamburger onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
            <span></span>
            <span></span>
            <span></span>
          </Hamburger>
          <CloseMenu onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
            <span></span>
            <span></span>
          </CloseMenu>
        </Menu>
      </NavbarContainer>
    </Navbar>
  );
};

export default Header;
