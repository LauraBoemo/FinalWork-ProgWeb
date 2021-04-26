import { createContext, useContext, useState } from "react";

export const BooksContext = createContext([])

export function BooksContextProvider({ children }) {
  const [nextId, setNextId] = useState(3)
  const [books, setBooks] = useState([
    {
      id: 1,
      name: 'The 48 Laws of Power',
      fortnight: 1,
      pages: 457,
      stars: 2,
      concluded: 'No',
      proposedBy: 'Marília',
    },
    {
      id: 2,
      name: 'Perfume: The history of a Murderer',
      fortnight: 2,
      pages: 216,
      stars: 3,
      concluded: 'Yes',
      proposedBy: 'Laura',
    }
  ])

  function addBook(book) {
    const bookAlreadyAdded = books.find(b => b.name === book.name)
    if (!bookAlreadyAdded) {
      setBooks([...books, { id: nextId, ...book }])
      setNextId(o => o + 1)
    }
  }

  return <BooksContext.Provider value={{
    books,
    addBook
  }}>
    {children}
  </BooksContext.Provider>
}

export const useBooksContext = () => useContext(BooksContext)