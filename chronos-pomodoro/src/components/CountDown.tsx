import { useTaskContext } from "../contexts/useTaskContext"

import style from "./CountDown.module.css"


export default function CountDown() 
{
  const { state, setState } = useTaskContext()

  return (
    <div className={style.container}>
      {state.formatted_seconds_remaining}
    </div>
  )
}
