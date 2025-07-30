import type { TaskStateModel } from "../models/TaskStateModel"


export const initialTaskState: TaskStateModel = 
{
  tasks: [],
  seconds_remaining: 0,
  formatted_seconds_remaining: '00:00',
  active_task: null,
  current_cycle: 0,
  config: {
    work_time: 25,
    short_break_time: 5,
    long_break_time: 15,
  },
}
