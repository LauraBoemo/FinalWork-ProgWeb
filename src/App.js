import React, { Component, useState } from "react";
import styled from "styled-components";
import Facts from "./Components/Facts";
import Faq from "./Components/Faq";
import Members from "./Components/Members";
import Review from "./Components/Revew";
import SingleReview from "./Components/SingleRevew";
import AddBook from "./Components/AddBook";
import AddButton from "./Components/AddButton"
import IconBook from "./Assets/book.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  font-family: "Roboto Condensed";
  border: 0;
  outline: 0;
  background: transparent;
  color: white;
  font-size: 1em;
  border-bottom: 1px solid white;
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
  color: grey;
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
  margin-bottom: -80px;
  margin-top: -48px;
`;

const Counter = styled.div`
  opacity: 0.5;
  font-family: "Roboto Condensed";
  margin-top: -15px;
`;

const LittleText = styled.div`
  opacity: 0.4;
  font-family: "Roboto Condensed";
  margin-top: -18px;
  font-size: 1em;
  margin-bottom: 15px;
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

const SectionTitle = styled.h2`
	font-family: 'Roboto Condensed';
	border-bottom: 1px solid #333;
`;

const IconBookButton = () => (
  <img
    style={{ width: 24, height: 24, marginTop: 15}}
    src={IconBook}
    alt="AddNewBook"
  /> 
);

// const SimpleForm = () => {
//   const [value, setValue] = useState("")
//   const changeName = () => {
//      setValue("some value changed")
//   }
//   return (
//     <>
//     {value.length > 0 && <div>{value}</div>}
//     <button onClick={changeName}>Change Name</button>
//     </>
//   )
// } 

class SimpleForm extends Component {
 
  constructor() {
    super();
    this.state = {
    };
    this.onInputchange = this.onInputchange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  onInputchange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  onSubmitForm() {
      console.log(this.state)
  }
  
  render() {
    const { items } = this.state;
    
    return (
      <TheEnd>
        <SectionTitle>Form: Add new book</SectionTitle>
        <center>
        <LittleText>Yeah, secret button! ✨</LittleText>
        <div>
          <label>
            <Input 
              placeholder="Book Name"
              name="BookName"
              type="text"
              value={this.state.bookname}
              onChange={this.onInputchange}
              />
          </label>
        </div>
        <div>
          <label>
            <Input
              placeholder="Fortnight"
              name="Fortnight"
              type="number"
              value={this.state.fortnight}
              onChange={this.onInputchange}
            />
          </label>
        </div>
        <div>
          <label>
            <Input
              placeholder="Total Pages"
              name="TotalPages"
              type="number"
              value={this.state.number}
              onChange={this.onInputchange}
              />
          </label>
        </div>
        <div>
          <label>
            <Input
              placeholder="Stars"
              name="Stars"
              type="number"
              value={this.state.stars}
              onChange={this.onInputchange}
              />
          </label>
        </div>
        <div>
          <label>
            <Input
              placeholder="Concluded"
              name="Concluded"
              type="text"
              value={this.state.concluded}
              onChange={this.onInputchange}
              />
          </label>
        </div>
        <div>
          <label>
            <Input
              placeholder="Proposed By"
              name="ProposedBy"
              type="text"
              value={this.state.proposedby}
              onChange={this.onInputchange}
              />
          </label>
        </div>
        <div>
            <div style={{ height: 10 }} />
            <Button onClick={this.onSubmitForm}>Submit</Button>
        </div>
        </center>
      </TheEnd>
    );
  }
}

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
        {this.state.add ? <SimpleForm  /> : null}
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
          <Counter>MADE WITH 💜 BY LAURA BOEMO - 04/2021</Counter>
          <ButtonAddButton />
          <div style={{ height: 20 }} />
          <HeaderButtons />
          <div style={{ height: 20 }} />
        </AppHeader>
        <GeneralHeader>
          <Facts />
          <SingleReview />
          <Review />
        </GeneralHeader>
      </Container>
    );
  }
}

export default App;
