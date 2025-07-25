import style from "./Container.module.css"


type ContainerProps = 
{
  children: React.ReactNode
}

export default function Container({children}: ContainerProps) 
{
  return (
    <div className={style.container}>
      <div className={style.content}>
        <section>{children}</section>
      </div>
    </div>
  )
}
