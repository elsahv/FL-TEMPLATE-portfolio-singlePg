import styled from "styled-components";

export const IntroSection = styled.div`
  opacity: 0.8;
  background: teal;
  padding: 35px;
  grid-area: rs;
  margin-top: 40px;
  h4 {
    font-size: 30px;
    color: #000;
    padding-bottom: 10px;
    display: flex;
  }
  p {
    font-size: 22px;
    color: #000;
  }
  a {
    color: #000;
    text-decoration: underline;
    margin: 0 8px;
  }
  a:hover {
    color: aquamarine;
    transition: 2s;
  }
  @media only screen and (max-width: 1024px) {
    h4 {
      font-size: 27px;
    }
    p {
      font-size: 20px;
    }
  }
  @media only screen and (max-width: 834px) {
    margin-left: 40px;
    margin-top: 50px;
  }
  @media only screen and (max-width: 768px) {
    margin-left: 10px;
    // margin-top: 50px;
  }
  @media only screen and (max-width: 600px) {
    margin-top: 40px;
  }
`;
