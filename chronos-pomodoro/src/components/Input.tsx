import style from "./Input.module.css"


type InputProps = 
{
  id: string
  label_text?: string
} 
& React.ComponentProps<"input">


export default function Input(
  { id, label_text, type, ...props }: InputProps) 
{
  return (
    <>
      {label_text && <label htmlFor={id}>{label_text}</label>}
      <input 
        className={style.input} 
        id={id} 
        type={type}
        
        {...props} 
      />
    </>
  )
}
