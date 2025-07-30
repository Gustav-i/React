import style from "./Cycles.module.css"


export default function Cycles() 
{
  return (
    <div className={style.cycles}>
      <span>Ciclos:</span>
      <div className={style.cycles_dots}>
        <span className={`${style.cycles_dot} ${style.work_time}`}></span>
        <span className={`${style.cycles_dot} ${style.short_breaktime}`}></span>
        <span className={`${style.cycles_dot} ${style.work_time}`}></span>
        <span className={`${style.cycles_dot} ${style.short_breaktime}`}></span>
        <span className={`${style.cycles_dot} ${style.work_time}`}></span>
        <span className={`${style.cycles_dot} ${style.short_breaktime}`}></span>
        <span className={`${style.cycles_dot} ${style.work_time}`}></span>
        <span className={`${style.cycles_dot} ${style.long_breaktime}`}></span>
      </div>
    </div>
  )
}
