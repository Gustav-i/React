import type { TaskModel } from '../models/TaskModels'

import { useRef } from 'react'
import { useTaskContext } from '../contexts/useTaskContext'
import { TaskActionTypes } from '../contexts/task_Actions'
import { PlayCircleIcon, StopCircleIcon } from 'lucide-react'

import Input from './Input'
import Cycles from './Cycles'
import Button from './Button'
import getNextCycle from '../utils/getNextCycle'
import getNextCycleType from '../utils/getNextCycleType'


export default function Form() 
{
  const { state, dispatch } = useTaskContext()
  const taskNameInput = useRef<HTMLInputElement>(null)

  // ciclos
  const nextCycle = getNextCycle(state.current_cycle)
  const nextCyleType = getNextCycleType(nextCycle)

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) 
  {
    event.preventDefault()

    if (taskNameInput.current === null) return

    const taskName = taskNameInput.current.value.trim()

    if (!taskName) 
    {
      alert('Digite o nome da tarefa')
      return
    }

    const newTask: TaskModel = 
    {
      id: Date.now().toString(),
      name: taskName,
      start_date: Date.now(),
      complete_date: null,
      interrupt_date: null,
      duration: state.config[nextCyleType],
      type: nextCyleType,
    }

    dispatch({ type: TaskActionTypes.START_TASK, payload: newTask })
  }

  function handleInterruptTask() 
  {
    dispatch({ type: TaskActionTypes.INTERRUPT_TASK })
  }

  return (
    <form onSubmit={handleCreateNewTask} className='form' action=''>
      <div className='form_row'>
        <Input
          label_text='Tarefa'
          id='meuInput'
          type='text'
          placeholder='Digite algo'
          ref={taskNameInput}
          disabled={!!state.active_task}
        />
      </div>

      <div className='form_row'>
        <p>Próximo intervalo é de 25min</p>
      </div>

      {state.current_cycle > 0 && (
        <div className='form_row'>
          <Cycles />
        </div>
      )}

      <div className='form_row'>
        {!state.active_task &&
          <Button
            aria-label='Iniciar nova tarefa'
            title='Iniciar nova tarefa'
            type='submit'
            icon={<PlayCircleIcon />}
            key='botao_submit'
          />
        }

        {!!state.active_task &&
          <Button
            aria-label='Interromper tarefa atual'
            title='Interromper tarefa atual'
            type='button'
            color='red'
            icon={<StopCircleIcon />}
            onClick={handleInterruptTask}
            key='botao_button'
          />
        }
      </div>
    </form>
  )
}