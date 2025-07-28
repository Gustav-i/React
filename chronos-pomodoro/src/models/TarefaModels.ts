import type { TarefaStateModel } from "./TarefaStateModel"


export type TarefaModel = 
{
  id: string
  name: string
  duration: number
  start_date: number
  complete_date: number | null
  interrupted_date: number | null
  type: keyof TarefaStateModel["config"]
}
