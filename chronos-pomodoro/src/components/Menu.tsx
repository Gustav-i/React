import { useState, useEffect } from "react"
import { toTitleCase } from "../utils/Utils"
import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from "lucide-react"

import style from "./Menu.module.css"


type Themes = "dark" | "light"

export default function Menu() 
{
  const [theme, setTheme] = useState<Themes>(() => 
  {
    const storageTheme = localStorage.getItem("theme") as Themes || "dark"
    return storageTheme
  })

  function handleThemeChange( e: React.MouseEvent<HTMLAnchorElement, MouseEvent> ) 
  {
    e.preventDefault()
    
    setTheme(prevTheme => 
    {
      const changeTheme = prevTheme === "dark" ? "light" : "dark"
      return changeTheme
    })
  }

  useEffect(() => 
  {
    document.documentElement.setAttribute("data-theme", theme)
    localStorage.setItem("theme", theme)
  }, [theme])
  

  return (
    <nav className={style.menu}>

      <a 
        href="#" 
        className={style.menu_link} 
        aria-label="Ir para Homepage" 
        title="Homepage"
      >
        <HouseIcon />
      </a>

      <a 
        href="#" 
        className={style.menu_link} 
        aria-label="Ver histórico" 
        title="Histórico"
      >
        <HistoryIcon />
      </a>

      <a 
        href="#" 
        className={style.menu_link} 
        aria-label="Configurações" 
        title="Configurações"
      >
        <SettingsIcon />
      </a>

      <a 
        className={style.menu_link} 
        href="#" 
        aria-label={`Mudar para ${theme} mode`} 
        title={`${toTitleCase(theme)} mode`}
        onClick={handleThemeChange}
      >
        {theme === "dark" ? <SunIcon /> : <MoonIcon />}
      </a>
      
    </nav>
  )
}
