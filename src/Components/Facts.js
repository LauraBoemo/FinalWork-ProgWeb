import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useBooksContext } from "../contexts/BooksContext";


const Line = styled.div`
  flex-direction: row;
  display: flex;	
  text-align: center;
	max-width: 900px;
	margin-bottom: 5px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  padding-top: 10px;
  padding-bottom: 10px;
  /* padding-right: 10px;
  padding-left: 60px; */
  @media screen and (max-width: 800px) {
    flex-direction: column;
    /* padding-left: 30px; */
  }
`;

const Fact = styled.div`
  flex: 1;
  text-align: left;
  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: row;
  }
`;

const Title2 = styled.div`
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  margin-right: 20px;
  margin-left: 20px;
`;

const Num = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  font-family: "Roboto Condensed";
  color: grey;
  margin-right: 20px;
  margin-left: 20px;
  @media screen and (max-width: 800px) {
    font-size: 14px;
    &:before {
      content: ": ";
    }
  }
`;

const NameBook = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  font-family: "Roboto Condensed";
  color: grey;
  @media screen and (max-width: 800px) {
    font-size: 14px;
    &:before {
      content: ": ";
    }
  }
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default function Facts() {
  const { books } = useBooksContext()
  const [facts, setFacts] = useState({
    fortnight: 0,
    noCompleted: 0,
    totalPages: 0
  })


  useEffect(() => {
    const readBooks = books.filter(book => book.concluded === 'Yes').reduce((sum, book) => {
      return {
        fortnight: sum.fortnight + book.fortnight,
        noCompleted: sum.noCompleted + 1,
        totalPages: sum.totalPages + book.pages
      }
    }, facts)
    setFacts(readBooks)
  }, [books])

  return (
    <Line>
      <Fact>
        <Title2>Fortnight number</Title2>
        <Num>{facts.fortnight}</Num>
      </Fact>
      <Fact>
        <Title2>Current book</Title2>
        <NameBook>The 48 Laws of Power</NameBook>
      </Fact>
      <Fact>
        <Title2>Completed books</Title2>
        <Num>{facts.noCompleted}</Num>
      </Fact>
      <Fact>
        <Title2>Total Pages read</Title2>
        <Num>{facts.totalPages}</Num>
      </Fact>
    </Line>

  );
}