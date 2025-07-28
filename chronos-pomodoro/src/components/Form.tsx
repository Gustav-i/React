import { PlayCircleIcon } from 'lucide-react'

import Cycles from './Cycles'
import Button from './Button'
import Input from './Input'


export default function Form() 
{
  return (
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
  )
}
