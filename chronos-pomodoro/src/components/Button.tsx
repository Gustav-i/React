import style from "./Button.module.css"


type ButtonProps = 
{
  icon: React.ReactNode
  color?: "green" | "red"
} 
& React.ComponentProps<"button">


export default function Button(
  { icon, color = "green", ...props }: ButtonProps) 
{
  return (
    <>
      <button className={`${style.button} ${style[color]}`} { ...props }>
        {icon}
      </button>
    </>
  )
}
