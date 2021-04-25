import React from "react";
import styled from "styled-components";

const Row = styled.div`
  display: flex;
  font-family: "Roboto Condensed";
  padding-left: 45px;
  /* padding-right: 30px; */
  border-bottom: 1px solid black;
  align-items: center;
  height: 36px;
  @media screen and (max-width: 800px) {
    display: block;
    padding-top: 20px;
    height: auto;
  }
`;

const Column = styled.div`
  flex: 0;
  margin-right: 15px;
  padding-right: 24px;
  @media screen and (max-width: 800px) {
    display: block;
    margin-right: 15px;
  }
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <Row style={{ background: "white", flex: 0 }}>
      <Column>Name</Column>
      <Column>Fortnight</Column>
      <Column>TotalPages</Column>
      <Column>Stars</Column>
      <Column>Concluded</Column>
      <Column>Proposed</Column>
  </Row>
);