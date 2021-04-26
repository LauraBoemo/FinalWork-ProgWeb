import React from "react";
import styled from "styled-components";
import Greeting from "../App";

const Container = styled.div`
  display: column;
`;


const Row = styled.div`
  display: flex;
  font-family: "Roboto Condensed";
  padding-left: 45px;
  border-bottom: 1px solid black;
  align-items: center;
  height: flex;
  color: grey;
  @media screen and (max-width: 800px) {
    display: block;
    padding-top: 20px;
    height: auto;
  }
`;

const TitleColumn = styled.div`
  flex: 10;
  margin-right: 20px;
  margin-left: -50px;
  /* padding-right: 24px; */
  width: 55px;
`;

const Column = styled.div`
  flex: 1;
  margin-right: 15px;
  padding-right: 24px;
  width: flex;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <Container>
    <Greeting/>
    <Row style={{ background: "white", flex: 0 }}>
        <Column>The 48 Laws of Power</Column>
        <Column>1</Column>
        <Column>457</Column>
        <Column>⭐⭐⭐</Column>
        <Column>No</Column>
        <Column>Marília</Column>
    </Row>
    <Row style={{ background: "white", flex: 0 }}>
        <Column>Perfume: The history of a Murderer</Column>
        <Column>2</Column>
        <Column>216</Column>
        <Column>⭐⭐</Column>
        <Column>Yes</Column>
        <Column>Laura</Column>
    </Row>
  </Container>

);