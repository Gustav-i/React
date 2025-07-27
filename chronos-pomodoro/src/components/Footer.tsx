import style from "./Footer.module.css"


export default function Footer() 
{
  return (
    <footer className={style.footer}>
      <a href="#" target="_blank">
        Entenda como funciona a técnica pomodoro
      </a>

      <a href="#" target="_blank">
        Chronos Pomodoro &copy; - 2025
      </a>
    </footer>
  )
}
