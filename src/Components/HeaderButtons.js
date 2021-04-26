import { useState } from "react";
import { ButtonContainer, Button } from '../styles'
import Faq from './Faq'
import Members from './Members'


export default function HeaderButtons() {
  const [faq, setFaq] = useState(false)
  const [members, setMembers] = useState(false)
  return (
    <>
      {faq ? <Faq /> : null}
      {members ? <Members /> : null}

      <ButtonContainer>
        <Button
          onClick={() => setFaq(o => !o)}
        >
          Members
          </Button>
        <div style={{ width: 10, height: 10 }} />
        <Button
          onClick={() => setMembers(o => !o)}
        >
          FAQ
        </Button>
      </ButtonContainer>
    </>
  );
}