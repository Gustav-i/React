import { PlayCircleIcon } from 'lucide-react'
import { useState } from 'react'

import Cycles from './Cycles'
import Button from './Button'
import Input from './Input'


export default function Form() 
{
  const [taskName, setTaskName] = useState("")

  function handleCreateTask(e: React.FormEvent<HTMLFormElement>) 
  {
    e.preventDefault()

    console.log('DEU CERTO')
  }

  return (
    <form onSubmit={handleCreateTask} className="form" action="">

      <div className="form_row">
        <Input 
          id="my_input" 
          type="text"
          label_text="task" 
          placeholder="Digite algo"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
      </div>

      <div className="form_row">
        <p>Próximo intervalo é de 25 min</p>
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
