import type { TaskModel } from "./TaskModels"


export type TaskStateModel = 
{
  tasks: TaskModel[]
  seconds_remaining: number
  formatted_seconds_remaining: string
  active_task: TaskModel | null
  current_cycle: number
  
  config: 
  {
    work_time: number
    short_break_time: number
    long_break_time: number
  }
}
