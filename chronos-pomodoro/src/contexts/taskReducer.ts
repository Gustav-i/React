import type { TaskStateModel } from "../models/TaskStateModel"
import { TaskActionTypes, type TaskActionModel } from "./taskActions"


import formatSecondsToMinutes from "../utils/formatSecondsToMinutes"
import getNextCycle from "../utils/getNextCycle"


export function 
  taskReducer( state: TaskStateModel, action: TaskActionModel): TaskStateModel 
{
  switch (action.type) 
  {
    case TaskActionTypes.START_TASK: 
    {
      const newTask = action.payload
      const nextCycle = getNextCycle(state.current_cycle)
      const secondsRemaining = newTask.duration * 60

      return {
        ...state,
        active_task: newTask,
        current_cycle: nextCycle,
        seconds_remaining: secondsRemaining,
        formatted_seconds_remaining: formatSecondsToMinutes(secondsRemaining),
        tasks: [...state.tasks, newTask],
      }
    }
    case TaskActionTypes.INTERRUPT_TASK: 
    {
      return {
        ...state,
        active_task: null,
        seconds_remaining: 0,
        formatted_seconds_remaining: '00:00',
        tasks: state.tasks.map(task => 
        {
          if (state.active_task && state.active_task.id === task.id) 
          {
            return { ...task, interruptDate: Date.now() }
          }
          return task
        }),
      }
    }
    case TaskActionTypes.RESET_STATE: 
    {
      return state
    }
  }

  // Sempre deve retornar o estado
  return state
}