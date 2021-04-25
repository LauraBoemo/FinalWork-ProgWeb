import React from 'react';
import styled from 'styled-components';

const Title = styled.h2`
	font-family: 'Roboto Condensed';
	border-bottom: 1px solid #333;
`;

const SubText = styled.div`
  max-width: 150px;
`;

const Column = styled.div`
align-items: center;
background-color: black;
color: white;
padding: 20px;
max-width: 150px;
a {
  color: white;
}
`; 

const TheEnd = styled.div`
  background-color: black;
  color: white;
  padding: 40px;
  max-width: 880px;
  a {
    color: white;
  }
`;

const Members = styled.div`
	text-align: left;
	max-width: 900px;
`;

const AlignButton = styled.div`
text-align: left;
`;

const Button = styled.div`
  margin-top: 5px;
  cursor: pointer;
  font-weight: bold;
  padding: 10px 40px;
  margin-left: 8px;
  border: 1px solid black;
  font-family: "Roboto Condensed";
  color: white;
  &:hover {
    background: white;
    color: black;
  }
  text-decoration: none;
`;


// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
	<Members>
    <TheEnd>
      <Title>New book addition form</Title>
      <Column>
        <form>
          <SubText>Book Name:</SubText> <input type="text" id = "message"/>
          <SubText>Total Fortnight:</SubText> <input type="number" id = "totalfortnight"/>
          <SubText>Total Pages:</SubText> <input type="number" id = "totalpages"/>
          <SubText>Stars:</SubText> <input type="number" id = "stars"/>
          <SubText>Concluded:</SubText> <input type="text" id = "concluded"/>
          <SubText>Proposed:</SubText> <input type="text" id = "proposed"/>
        </form>
        <AlignButton>
          <Button onclick="showMessage()" value="submit">
              Submit
          </Button>
          <input type="button" onclick="showMessage()" value="submit" />
        </AlignButton>
      </Column>
    </TheEnd>
	</Members>
);
