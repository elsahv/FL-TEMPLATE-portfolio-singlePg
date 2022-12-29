import styled from "styled-components";

export const Wrapper = styled.div`
  .navbar {
    display: none;
    @media only screen and (max-width: 600px) {
      background-color: teal;
      border-bottom: solid 2px black;
      height: 110px;
      display: flex;
      justify-content: start;
      align-items: center;
    }
    @media only screen and (max-width: 531px) {
      height: 80px;
    }
  }

  .menu-bars {
    margin-left: 2rem;
    font-size: 2rem;
    background: none;
  }

  .nav-menu {
    background-color: teal;
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: -100%;
    transition: 850ms;
    z-index: 100000;
    border-right: solid 2px black;
  }

  .nav-menu.active {
    left: 0;
    transition: 350ms;
  }

  .nav-text {
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 8px 0px 8px 16px;
    list-style: none;
    height: 60px;
  }

  .nav-text a {
    text-decoration: none;
    color: #f5f5f5;
    font-size: 18px;
    width: 95%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 16px;
    border-radius: 4px;
  }

  .nav-text a:hover {
    background-color: #1a83ff;
  }

  .nav-menu-items {
    width: 100%;
  }

  .navbar-toggle {
    background-color: teal;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: start;
    align-items: center;
  }

  span {
    margin-left: 16px;
  }
`;

export const SidebarLogo = styled.div`
  font-size: 30px;
  color: #fff;
  text-shadow: 1px 1px 1px #000;
  display: flex;
  justify-content: center;
  padding: 25px;
  width: 100%;

  @media only screen and (max-width: 531px) {
    font-size: 20px;
  }
`;
