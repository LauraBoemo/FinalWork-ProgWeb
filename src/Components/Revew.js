import React from "react";
import styled from "styled-components";
import { useBooksContext } from "../contexts/BooksContext";

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

// const TitleColumn = styled.div`
//   flex: 10;
//   margin-right: 20px;
//   margin-left: -50px;
//   /* padding-right: 24px; */
//   width: 55px;
// `;

const Column = styled.div`
  flex: 1;
  margin-right: 15px;
  padding-right: 24px;
  width: flex;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const { books } = useBooksContext()
  return (
    <Container>
      {books.map(book => (
        <Row key={book.id} style={{ background: "white", flex: 0 }}>
          <Column>{book.name}</Column>
          <Column>{book.fortnight}</Column>
          <Column>{book.pages}</Column>
          <Column>{'⭐'.repeat(book.stars)}</Column>
          <Column>{book.concluded}</Column>
          <Column>{book.proposedBy}</Column>
        </Row>
      ))}
    </Container>
  )
};