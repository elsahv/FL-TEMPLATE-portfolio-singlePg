import styled from "styled-components";

export const Header = styled.header`
  overflow: hidden;
  width: 500px;
  height: 100%;
  position: fixed;
  left: 0;
  border-right: solid 1px teal;
  background-color: #3aa1aa;
  z-index: 1000;
  text-decoration: none;

  @media only screen and (max-width: 1024px) {
    width: 450px;
  }
  @media only screen and (max-width: 834px) {
    width: 300px;
  }

  @media only screen and (max-width: 600px) {
    top: 0;
    position: relative;
    width: 100%;
    height: 100vh;
    background: teal;
    border-bottom: solid 1px #000;
  }
`;

export const Menu = styled.div`
  height: 100%;
  width: 100%;

  @media only screen and (max-width: 834px) {
    padding-left: 0px;
  }
`;

export const HeaderItems = styled.div`
  padding-left: 15px;
  padding-top: 50px;
  p {
    font-size: 22px;
    opacity: 0.8;
    padding: 2px;
  }
  @media only screen and (max-width: 1024px) {
    p {
      font-size: 32px;
      margin: 10px 5px;
    }
  }
  @media only screen and (max-width: 768px) {
    p {
      font-size: 22px;
    }
  }
`;

export const Logo = styled.h1`
  font-size: 32px;
  // background: green;
  color: #fff;
  text-decoration: none;
  text-shadow: 1px 1px 1px #000;

  @media only screen and (max-width: 1024px) {
    padding-top: 10px;
    font-size: 55px;
  }

  @media only screen and (max-width: 834px) {
    font-size: 40px;
  }
`;

export const SmIcons = styled.div`
  font-size: 30px;
  display: flex;
  padding-top: 5px;
  padding-left: 5px;
  a {
    color: #000;
    margin: 0 3px;
  }
  @media only screen and (max-width: 1024px) {
    font-size: 40px;
    margin: 10px 0;
  }
  @media only screen and (max-width: 768px) {
  }
`;

export const AboutImgWrapper = styled.div`
  width: 670px;
  grid-area: ls;
  border-right: solid 2px black;
  padding-top: 405px;
  @media only screen and (max-width: 1024px) {
    padding-top: 785px;
  }
  @media only screen and (max-width: 834px) {
    padding-top: 575px;
  }
  @media only screen and (max-width: 810px) {
    padding-top: 395px;
  }
  @media only screen and (max-width: 800px) {
    padding-top: 595px;
  }

  @media only screen and (max-width: 600px) {
    padding: 0;
  }
`;

export const MobileIntro = styled.div`
  display: none;
  @media only screen and (max-width: 600px) {
    display: block;
  }
`;
