import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  font-family: "Roboto Condensed";
  border: 0;
  outline: 0;
  background: transparent;
  color: white;
  font-size: 1em;
  border-bottom: 1px solid white;
`;

export const AppHeader = styled.div`
  background-color: white;
  align-items: center;
  justify-content: center;
  color: black;
  margin: auto;
  padding-left: 30px;
  padding-right: 30px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const GeneralHeader = styled.div`
  align-items: center;
  justify-content: center;
  padding-left: 30px;
  padding-right: 30px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Title = styled.div`
  font-weight: 700;
  font-family: "Roboto Condensed";
  font-size: 3em;
`;


export const Button = styled.div`
  cursor: pointer;
  font-weight: bold;
  padding: 10px 40px;
  border: 1px solid black;
  font-family: "Roboto Condensed";
  color: grey;
  &:hover {
    background: black;
    color: white;
  }
  text-decoration: none;
`;

export const ButtonContainer = styled.div`
  flex-direction: row;
  display: flex;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const Local = styled.div`
	text-align: left;
	max-width: 900px;
	margin-bottom: 15px;
`;

export const Icons = styled.div`
  cursor: pointer;
	text-align: right;
	width: 600px;
  margin-bottom: -80px;
  margin-top: -48px;
`;

export const Counter = styled.div`
  opacity: 0.5;
  font-family: "Roboto Condensed";
  margin-top: -15px;
`;

export const LittleText = styled.div`
  opacity: 0.4;
  font-family: "Roboto Condensed";
  margin-top: -18px;
  font-size: 1em;
  margin-bottom: 15px;
`;

export const TheEnd = styled.div`
  background-color: black;
  color: white;
  padding: 10px;
  max-width: 880px;
  a {
    color: white;
  }
`;

export const SectionTitle = styled.h2`
	font-family: 'Roboto Condensed';
	border-bottom: 1px solid #333;
`;