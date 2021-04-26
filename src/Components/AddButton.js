import React from 'react';
import styled from 'styled-components';

const Title = styled.h2`
	font-family: 'Roboto Condensed';
	border-bottom: 1px solid #333;
`;

const TheEnd = styled.div`
  background-color: black;
  color: white;
  padding: 10px;
  max-width: 880px;
  a {
    color: white;
  }
`;

const Container = styled.div`
	text-align: left;
	max-width: 900px;
`;


// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
	<Container>
    <TheEnd>
      <Title>Laurinha is working on a submit!</Title>
    </TheEnd>
	</Container>
);
