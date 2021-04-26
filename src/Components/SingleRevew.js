import React from "react";
import styled from "styled-components";

const Row = styled.div`
  display: flex;
  font-family: "Roboto Condensed";
  padding-left: 45px;
  /* padding-right: 30px; */
  border-bottom: 1px solid black;
  align-items: center;
  @media screen and (max-width: 800px) {
    display: block;
    padding-top: 20px;
    height: auto;
  }
`;

const Column = styled.div`
  margin-right: 20px;
  padding-right: 24px;
  @media screen and (max-width: 800px) {
    display: block;
    margin-right: 15px;
  }
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <Row style={{ background: "white" }}>
      <Column>Name</Column>
      <Column>Fortnight</Column>
      <Column>Total Pages</Column>
      <Column>Stars</Column>
      <Column>Concluded</Column>
      <Column>Proposed</Column>
  </Row>
);