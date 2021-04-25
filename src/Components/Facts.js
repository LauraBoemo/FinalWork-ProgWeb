import React from "react";
import styled from "styled-components";


const Line = styled.div`
  padding-left: 45px;
  flex-direction: row;
  display: flex;	
  text-align: left;
	max-width: 900px;
	margin-bottom: 9px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  padding-top: 12px;
  padding-bottom: 12px;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    padding-left: 30px;
  }
`;

const Fact = styled.div`
  flex: 1;
  text-align: left;
  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: row;
  }
`;

const Title2 = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-right: 15px;
`;

const Num = styled.div`
  font-size: 20px;
  font-weight: bold;
  font-family: "Roboto Condensed";
  @media screen and (max-width: 800px) {
    font-size: 14px;
    &:before {
      content: ": ";
    }
  }
`;

const NameBook = styled.div`
  font-size: 20px;
  font-weight: bold;
  font-family: "Roboto Condensed";
  @media screen and (max-width: 800px) {
    font-size: 14px;
    &:before {
      content: ": ";
    }
  }
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <Line>
    <Fact>
      <Title2>Fortnight number</Title2>
      <Num></Num>
    </Fact>
    <Fact>
      <Title2>Current book</Title2>
      <NameBook></NameBook>
    </Fact>
    <Fact>
      <Title2>Completed books</Title2>
      <Num></Num>
    </Fact>
    <Fact>
      <Title2>Total Pages read</Title2>
      <Num></Num>
    </Fact>
  </Line>
);