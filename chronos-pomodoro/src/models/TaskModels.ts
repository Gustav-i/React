import type { TaskStateModel } from "./TaskStateModel"


export type TaskModel = 
{
  id: string
  name: string
  duration: number
  start_date: number
  complete_date: number | null
  interrupted_date: number | null
  type: keyof TaskStateModel["config"]
}
