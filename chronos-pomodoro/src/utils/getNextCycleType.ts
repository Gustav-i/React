import type { TaskModel } from "../models/TaskModels"


export default function getNextCycleType( current_cycle: number): TaskModel["type"]
{
  if (current_cycle % 8 === 0) 
  {
    return "long_break_time"  
  }
  else if (current_cycle % 2 === 0) 
  {
    return "short_break_time"  
  }
  else 
  {
    return "work_time"
  }
}
