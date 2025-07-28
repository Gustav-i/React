import { MainTemplate } from "./MainTemplate"

import Container from "../components/Container"
import CountDown from "../components/CountDown"
import Form from "../components/Form"


export default function Home() 
{
  return (
    <MainTemplate>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <Form />
      </Container>

    </MainTemplate>
  )
}
