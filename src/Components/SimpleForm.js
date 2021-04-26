import { useState } from 'react';
import { useBooksContext } from '../contexts/BooksContext';
import {
  TheEnd, SectionTitle, LittleText,
  Input, Button
} from '../styles'

export default function SimpleForm() {

  const { addBook } = useBooksContext()

  const [book, setBook] = useState({
    name: '',
    fortnight: '',
    pages: '',
    stars: '',
    concluded: '',
    proposedBy: '',
  })

  const inputChange = (key, value) => {
    setBook(b => ({ ...b, [key]: value }))
  }

  const submitForm = () => {
    addBook(book)
  }

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
              value={book.name}
              onChange={(e) => inputChange('name', e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            <Input
              placeholder="Fortnight"
              name="Fortnight"
              type="number"
              value={book.fortnight}
              onChange={(e) => inputChange('fortnight', Number(e.target.value))}
            />
          </label>
        </div>
        <div>
          <label>
            <Input
              placeholder="Total Pages"
              name="TotalPages"
              type="number"
              value={book.pages}
              onChange={(e) => inputChange('pages', Number(e.target.value))}
            />
          </label>
        </div>
        <div>
          <label>
            <Input
              placeholder="Stars"
              name="Stars"
              type="number"
              value={book.stars}
              onChange={(e) => inputChange('stars', Number(e.target.value))}
            />
          </label>
        </div>
        <div>
          <Input
            placeholder="Concluded"
            name="Concluded"
            type="text"
            value={book.concluded}
            onChange={(e) => inputChange('concluded', e.target.value)}
          />
        </div>
        <div>
          <label>
            <Input
              placeholder="Proposed By"
              name="ProposedBy"
              type="text"
              value={book.proposedBy}
              onChange={(e) => inputChange('proposedBy', e.target.value)}
            />
          </label>
        </div>
        <div>
          <div style={{ height: 10 }} />
          <Button onClick={submitForm}>Submit</Button>
        </div>
      </center>
    </TheEnd>
  );
}