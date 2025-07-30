import { TimerIcon } from "lucide-react"

import style from "./Logo.module.css"


export default function Logo() 
{
  return (
    <div className={style.logo}>
      <a className={style.logo_link} href="#">
        <TimerIcon />
        <span>Chronos</span>
      </a>
    </div>
  )
}
