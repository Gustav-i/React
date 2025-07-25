import type React from "react"
import style from "./heading.module.css"


type headingProps = 
{
  children: React.ReactNode
}

export default function Heading({ children }: headingProps) 
{
  return (
    <>
      <h1 className={style.heading}>{children}</h1>
    </>
  )
}
