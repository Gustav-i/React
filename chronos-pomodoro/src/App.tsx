import { PlayCircleIcon } from "lucide-react"

import Button from "./components/Button"
import Container from "./components/Container"
import CountDown from "./components/CountDown"
import Cycles from "./components/Cycles"
import Input from "./components/Input"
import Logo from "./components/Logo"
import Menu from "./components/Menu"
import Footer from "./components/Footer"

import "./style/global.css"
import "./style/theme.css"


export default function App()
{
  return (
    <>
      <Container>
        <Logo />
      </Container>
      
      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className="form" action="">

          <div className="form_row">
            <Input 
              id="my_input" 
              type="text"
              label_text="Tarefa" 
              title="Title"
              placeholder="Digite algo"
              disabled
              defaultValue="Disativado"
            />
          </div>

          <div className="form_row">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="form_row">
            <Cycles />
          </div>

          <div className="form_row">
            <Button icon={ <PlayCircleIcon />} color="green" />
            {/* <Button icon={ <StopCircleIcon />} color="red" /> */}
          </div>

        </form>
      </Container>

      <Container>
        <Footer />
      </Container>
    </>
  )
}
