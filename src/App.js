import React, { Component } from "react";
import styled from "styled-components";
import Facts from "./Components/Facts";
import Faq from "./Components/Faq";
import Members from "./Components/Members";
import Review from "./Components/Revew";
import AddButton from "./Components/AddButton"
import IconBook from "./Assets/book.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const AppHeader = styled.div`
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

const GeneralHeader = styled.div`
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

const Title = styled.div`
  font-weight: 700;
  font-family: "Roboto Condensed";
  font-size: 3em;
`;

const Button = styled.div`
  cursor: pointer;
  font-weight: bold;
  padding: 10px 40px;
  border: 1px solid black;
  font-family: "Roboto Condensed";
  color: black;
  &:hover {
    background: black;
    color: white;
  }
  text-decoration: none;
`;

const ButtonContainer = styled.div`
  flex-direction: row;
  display: flex;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Local = styled.div`
	text-align: left;
	max-width: 900px;
	margin-bottom: 15px;
`;

const Icons = styled.div`
  cursor: pointer;
	text-align: right;
	width: 600px;
  margin-bottom: -20px;
  margin-top: -40px;
`;

const IconBookButton = () => (
  <img
    style={{ width: 24, height: 24, marginTop: 15 }}
    src={IconBook}
    alt="AddNewBook"
  /> 
);

class ButtonAddButton extends Component {
  state = {
    add: false,
  };

  render() {
    return (
      <>
        <Local>
            <Icons
            onClick={() => {
              this.setState((prevState) => ({
                add: !prevState.add,
              }));
            }}>  
            <IconBookButton />
            </Icons>
	      </Local>
        {this.state.add ? <AddButton /> : null}
      </>
    );
  }
}

class HeaderButtons extends Component {
  state = {
    faq: false,
    members: false,
  };

  render() {
    return (
      <>
        {this.state.faq ? <Faq /> : null}
        {this.state.members ? <Members /> : null}

        <ButtonContainer>
          <Button
              onClick={() => {
                this.setState((prevState) => ({
                  members: !prevState.members,
                }));
              }}
            >
              Members
            </Button>
          <div style={{ width: 10, height: 10 }} />
          <Button
            onClick={() => {
              this.setState((prevState) => ({
                faq: !prevState.faq,
              }));
            }}
          >
            FAQ
          </Button>
        </ButtonContainer>
      </>
    );
  }
}
class App extends Component {
  render() {
    return (
      <Container>
        <AppHeader>
          <Title>OUR FORTNIGHTLY READINGS</Title>
          <ButtonAddButton />
          <div style={{ height: 20 }} />
          <HeaderButtons />
          <div style={{ height: 20 }} />
        </AppHeader>
        <GeneralHeader>
          <Facts />
          <Review />
        </GeneralHeader>
      </Container>
    );
  }
}

export default App;
