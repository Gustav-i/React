import Container from "./components/Container"
import CountDown from "./components/CountDown"
import DefaultInput from "./components/DefaultInput"
import Logo from "./components/Logo"
import Menu from "./components/Menu"

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
            <DefaultInput 
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
            <p>Ciclos</p>
            <p>🟢 🔴 🟢 🔴 🟢 🔴 🟢</p>
          </div>

          <div className="form_row">
            <button>Enviar</button>
          </div>

        </form>
      </Container>
    </>
  )
}
