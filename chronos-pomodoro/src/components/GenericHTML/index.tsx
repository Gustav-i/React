import style from "./style.module.css"


type GenericHTMLProps = 
{
  children: React.ReactNode
}

export default function GenericHTML({ children } : GenericHTMLProps) 
{
  return (
    <div className={style.generic_html}>{children}</div>
  )
}
