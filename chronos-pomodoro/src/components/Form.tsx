import type { TaskModel } from '../models/TaskModels'

import { PlayCircleIcon, StopCircleIcon } from 'lucide-react'
import { useRef } from 'react'
import { useTaskContext } from '../contexts/useTaskContext'

import Cycles from './Cycles'
import Button from './Button'
import Input from './Input'
import getNextCycle from '../utils/getNextCycle'
import getNextCycleType from '../utils/getNextCycleType'
import formatSecondsToMinutes from '../utils/formatSecondsToMinutes'


export default function Form() 
{
  const { state, setState } = useTaskContext()

  const taskNameInput = useRef<HTMLInputElement>(null)

  // Ciclos
  const nextCycle = getNextCycle(state.current_cycle)
  const nextCycleType = getNextCycleType(nextCycle)

  function handleCreateTask(e: React.FormEvent<HTMLFormElement>) 
  {
    e.preventDefault()

    if (taskNameInput.current === null) return

    const taskName = taskNameInput.current.value.trim()

    if (!taskName) 
    {
      alert("Digite o nome da tarefa: ")
      return
    }

    const newTask: TaskModel = 
    {
      id: Date.now().toString(),
      name: taskName,
      start_date: Date.now(),
      complete_date: null,
      interrupt_date: null,
      duration: state.config[nextCycleType],
      type: nextCycleType
    }

    const secondsRemaining = newTask.duration * 60

    setState(prevState => 
    {
      return {
        ...prevState,
        active_task: newTask,
        current_cycle: nextCycle,
        seconds_remaining: secondsRemaining,
        formatted_seconds_remaining: formatSecondsToMinutes(secondsRemaining),
        tasks: [ ...prevState.tasks, newTask ],
        config: { ...prevState.config }
      }
    })
  }

  function handleInterruptTask() 
  {
    setState(prevState => 
    {
      return {
        ...prevState,
        active_task: null,
        seconds_remaining: 0,
        formatted_seconds_remaining: "00:00",
        tasks: prevState.tasks.map(task => 
        {
          if (prevState.active_task && prevState.active_task.id === task.id) 
          {
            return { ...task, interrupt_date: Date.now() }
          }
          return task
        })
      }
    })  
  }

  return (
    <form onSubmit={handleCreateTask} className="form" action="">

      <div className="form_row">
        <Input 
          id="my_input" 
          type="text"
          label_text="task" 
          placeholder="Digite algo"
          ref={taskNameInput}
          disabled={!!state.active_task}
        />
      </div>

      <div className="form_row">
        <p>Próximo intervalo é de 25 min</p>
      </div>

      {state.current_cycle > 0 && 
        <div className='form_row'>
          <Cycles />
        </div>
      }

      <div className="form_row">
        {!state.active_task 
          ? 
          <Button 
            icon={<PlayCircleIcon />} 
            color="green" 
            aria-label='Iniciar nova tarefa' 
            title='Iniciar nova tarefa'
            type='submit'
            key="submit_btn"
          />
          :
          <Button 
            icon={<StopCircleIcon />} 
            color="red" 
            aria-label='Interromper tarefa' 
            title='Interromper tarefa'
            type='button'
            onClick={handleInterruptTask}
            key="interrupt_btn"
          />
        }
      </div>

    </form>
  )
}
