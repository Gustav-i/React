import type { TaskStateModel } from "../models/TaskStateModel"
import type { TaskActionModel } from "./taskActions"

import { createContext } from "react"
import { initialTaskState } from "./initialTaskState"


type TaskContextProps = 
{
  state: TaskStateModel
  dispatch: React.Dispatch<TaskActionModel>
}

const initialContextValue = 
{
  state: initialTaskState,
  dispatch: () => {},
}

export const TaskContext = createContext<TaskContextProps>(initialContextValue)
