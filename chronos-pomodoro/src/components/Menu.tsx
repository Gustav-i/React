import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from "lucide-react"
import style from "./Menu.module.css"


export default function Menu() 
{
  return (
    <nav className={style.menu}>

      <a className={style.menu_link} href="#">
        <HouseIcon />
      </a>

      <a className={style.menu_link} href="#">
        <HistoryIcon />
      </a>

      <a className={style.menu_link} href="#">
        <SettingsIcon />
      </a>

      <a className={style.menu_link} href="#">
        <SunIcon />
      </a>
      
    </nav>
  )
}
