import { useState } from "react";
import { Local, Icons } from '../styles'
import SimpleForm from './SimpleForm'
import IconBook from "../Assets/book.png";


const IconBookButton = () => (
  <img
    style={{ width: 24, height: 24, marginTop: 15 }}
    src={IconBook}
    alt="AddNewBook"
  />
);

export default function ButtonAddButton() {

  const [add, setAdd] = useState(false)

  return (
    <>
      <Local>
        <Icons
          onClick={() => setAdd(o => !o)}>
          <IconBookButton />
        </Icons>
      </Local>
      {add ? <SimpleForm /> : null}
    </>
  )
}