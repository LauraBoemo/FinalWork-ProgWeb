import React from 'react';
import styled from 'styled-components';
import IconLinkedin from "../Assets/linkedin.png";

const SectionTitle = styled.h2`
	font-family: 'Roboto Condensed';
	border-bottom: 1px solid #333;
`;

const SectionNameTitle = styled.h2`
	font-family: 'Roboto Condensed';
`;

const Members = styled.div`
	text-align: left;
	max-width: 900px;
	margin-bottom: 15px;
`;

const Icons = styled.div`
	text-align: right;
	margin-bottom: -20px;
  margin-top: -40px;
`;

const IconLinkedinClass = () => (
  <img
    style={{ width: 24, height: 24, marginTop: 15 }}
    src={IconLinkedin}
    alt="Linkedin"
  /> 
);

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
	<Members>
		<SectionTitle>Club Members</SectionTitle>
    <SectionNameTitle>
      Laura Boemo 
      <Icons>
        <a href="https://www.linkedin.com/in/laura-boemo-956b92193/" rel="noreferrer" target="_blank">
          <IconLinkedinClass />
        </a>
      </Icons>
    </SectionNameTitle>
		<p>
    Laura is a React-Native developer who spends her free time studying and playing with new technologies... 
    and making sites like this one. She is passionate about mathematics, history and psychoanalysis 🐉 - yes, 
    absurdly eclectic. And of course, last but not least, she loves to chat (she talks like hell)! 
		</p>
    <SectionNameTitle>
      Marília Bedoya 
      <Icons>
        <a href="https://www.linkedin.com/in/marilias%C3%A1tirobedoya/" rel="noreferrer" target="_blank">
          <IconLinkedinClass />
        </a>
      </Icons>
    </SectionNameTitle>
		<p>
    Despite having a degree in chemistry, Marília did not limit her genius: she currently works in operations. 
    Precisely for this reason, it contains excellent communication and an enviable receptivity! She enjoys meeting 
    new people and places, she also loves motivational, fantasy and scientific stories; a really diverse soul!... 
    Oh, and she also has a beautiful Husky 🐶.
    </p>
    <div style={{ width: 10, height: 10 }} />
	</Members>
);
