import React from "react";
import { HiMoon, HiOutlineMoon } from "react-icons/hi";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  height: 70px;
  width: 100vw;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  position: absolute;
  top: 0;
  box-shadow: 1px 1px 24px 0 rgba(0, 0, 0, 0.1);
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Navbar = ({ theme, setTheme }) => {
  const changeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <Nav>
      <Container>
        <h3>Where in the world?</h3>
      </Container>
      <Container onClick={changeTheme}>
        {theme === "dark" ? <HiMoon /> : <HiOutlineMoon />}
        <h5 style={{ marginLeft: "10px" }}>Dark Mode</h5>
      </Container>
    </Nav>
  );
};

export default Navbar;
