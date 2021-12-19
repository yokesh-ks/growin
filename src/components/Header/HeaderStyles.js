import styled from "styled-components";

export const Navbar = styled.div`
  background: ${(props) => props.theme.colors.navbg};
  transition: all 0.5s;
  z-index: 997;
  height: 80px;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 100;
`;

export const NavbarContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;

  @media ${(props) => props.theme.breakpoints.sm} {
    max-width: 540px;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 720px;
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    max-width: 960px;
  }
  @media ${(props) => props.theme.breakpoints.xl} {
    max-width: 1140px;
  }
  @media ${(props) => props.theme.breakpoints.xxl} {
    max-width: 1320px;
  }
`;

export const Logo = styled.h1`
  font-size: 28px;
  margin: 0;
  padding: 0;
  line-height: 1;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;

  span {
    color: white;
  }
`;

export const Menu = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 991px) {
    position: ${({ isOpen }) => (isOpen ? "fixed" : "relative")};
    overflow: hidden;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: ${({ isOpen }) =>
      isOpen ? "rgba(17, 17, 17, 0.9)" : "transparent"};
    transition: 0.3s;
    z-index: 999;
  }
`;

// Breakpoints need to change max according to bootstrap
export const UnList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  align-items: center;

  @media (max-width: 991px) {
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};
    position: absolute;
    top: 55px;
    right: 15px;
    bottom: 15px;
    left: 15px;
    padding: 10px 0;
    background-color: #fff;
    overflow-y: auto;
    transition: 0.3s;
  }
`;

export const List = styled.li`
  white-space: nowrap;
  padding: 10px 0 10px 22px;
`;

export const NavLink = styled.a`
  padding: 0 4px;
  font-size: 14px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
  white-space: nowrap;
  transition: 0.3s;
  text-transform: uppercase;
  position: relative;

  &:hover {
    color: #fff;
  }
  
  @media (max-width: 991px) {
    padding: 10px 20px;
    color: #2a2a2a;
    font-size: 15px;
  }
`;

export const GetStarted = styled.a`
  padding: 8px 25px;
  margin-left: 12px;
  border-radius: 4px;
  color: #fff;
  font-weight: 400;
  border: 2px solid #5c9f24;
  transition: 0.3s;
  text-transform: uppercase;
  position: relative;

  &:hover {
    color: #fff;
    background: #5c9f24;
  }

  @media (max-width: 991px) {
    margin-left: 0px;
    margin-right: 12px;
    display: block;
    color: #5c9f24;
  }
`;

export const Hamburger = styled.div`
  width: 28px;
  height: 28px;
  padding: 4px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  display: none;

  @media (max-width: 991px) {
    display: ${({ isOpen }) => (isOpen ? "none" : "flex")};
  }

  span {
    width: 100%;
    height: 3px;
    background-color: white;
    border-radius: 2px;
  }
`;

export const CloseMenu = styled.div`
  width: 28px;
  height: 28px;
  padding: 4px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  display: none;
  position: absolute;
  top: 15px;
  right: 15px;

  @media (max-width: 991px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  }

  span {
    width: 100%;
    height: 3px;
    background-color: #5c9f24;
    border-radius: 2px;
  }
  span:first-child {
    transform: rotate(45deg) translate(-3px, 11px);
  }
  span:nth-child(2) {
    transform: rotate(-45deg) translate(0, -15px);
  }
`;
