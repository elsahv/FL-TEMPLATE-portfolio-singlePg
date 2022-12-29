import styled from "styled-components";

export const PortfolioGrid = styled.div`
  opacity: 0.9;
  padding: 10px 40px;
  // background: pink;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1em;

  @media only screen and (max-width: 1024px) {
    padding: 30px 10px;
    grid-template-columns: 1fr;
  }
  @media only screen and (max-width: 834px) {
    padding: 30px 30px;
  }
`;

export const Sq = styled.div`
  background: teal;
  padding: 20px;
  border: solid 2px black;
  font-size: 18px;
`;

export const Button = styled.button`
  background: aquamarine;
  border: 1px solid teal;
  padding: 0px 10px 1px;
  font-size: 18px;
  display: flex;
  margin: 15px 5px 5px;
  border: solid 1px #000;
  a {
    text-decoration: none;
    color: #000;
    padding: 5px;
  }
`;

export const Icon = styled.div`
  font-size: 25px;
  padding-left: 20px;
`;

export const IconWrapper = styled.div`
  padding-top: 6px;
`;
