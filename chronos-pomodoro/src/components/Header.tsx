import type React from "react"
import style from "./Header.module.css"


type HeaderProps = 
{
  children: React.ReactNode
}

export default function Header({ children }: HeaderProps) 
{
  return (
    <header>
      <h1 className={style.header}>{children}</h1>
    </header>
  )
}
