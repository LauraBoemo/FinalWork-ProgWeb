import React, { Component } from "react";
import Facts from "./Components/Facts";
import Review from "./Components/Revew";
import SingleReview from "./Components/SingleRevew";
// import AddBook from "./Components/AddBook";
// import AddButton from "./Components/AddButton"
import ButtonAddButton from './Components/ButtonAddButton'
import HeaderButtons from './Components/HeaderButtons'

import {
  Container, AppHeader, Title, Counter, GeneralHeader
} from './styles'
import { BooksContextProvider } from "./contexts/BooksContext";

class App extends Component {
  render() {
    return (
      <BooksContextProvider>
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
      </BooksContextProvider>
    );
  }
}

export default App;
