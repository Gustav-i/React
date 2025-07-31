import { useTaskContext } from "../contexts/useTaskContext"

import getNextCycle from "../utils/getNextCycle"
import getNextCycleType from "../utils/getNextCycleType"

import style from "./Cycles.module.css"


export default function Cycles() 
{
  const { state } = useTaskContext()

  const cycleStep = Array.from({ length: state.current_cycle })

  const cycleDescriptionMap = 
  {
    work_time: "foco",
    short_break_time: "descanso curto",
    long_break_time: "descanso longo"
  }

  return (
    <div className={style.cycles}>

      <span>Ciclos:</span>

      <div className={style.cycles_dots}>

        {cycleStep.map((_, index) => 
          {
            const cycle = getNextCycle(index)
            const cycleType = getNextCycleType(cycle)

            return (
              <span
                key={cycle}
                className={`${style.cycles_dot} ${style[cycleType]}`}
                aria-label={`Indicador de ciclo de ${cycleDescriptionMap[cycleType]}`}
                title={`Indicador de ciclo de ${cycleDescriptionMap[cycleType]}`}
              >
              </span>
            )
          })
        }

        {/* <span className={`${style.cycles_dot} ${style.work_time}`}></span>
        <span className={`${style.cycles_dot} ${style.short_breaktime}`}></span>
        <span className={`${style.cycles_dot} ${style.work_time}`}></span>
        <span className={`${style.cycles_dot} ${style.short_breaktime}`}></span>
        <span className={`${style.cycles_dot} ${style.work_time}`}></span>
        <span className={`${style.cycles_dot} ${style.short_breaktime}`}></span>
        <span className={`${style.cycles_dot} ${style.work_time}`}></span>
        <span className={`${style.cycles_dot} ${style.long_breaktime}`}></span> */}
      </div>

    </div>
  )
}
