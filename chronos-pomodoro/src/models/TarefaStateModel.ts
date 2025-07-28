import type { TarefaModel } from "./TarefaModels"


export type TarefaStateModel = 
{
  tarefas: TarefaModel[]
  seconds_remaining: number
  formatted_seconds_remaining: string
  active_tarefa: TarefaModel | null
  current_cycle: number
  
  config: 
  {
    work_time: number
    short_break_time: number
    long_break_time: number
  }
}
