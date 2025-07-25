import style from "./DefaultInput.module.css"


type DefaultInputProps = 
{
  id: string
  label_text?: string
} 
& React.ComponentProps<"input">


export default function DefaultInput(
  { id, label_text, type, ...rest }: DefaultInputProps) 
{
  return (
    <>
      {label_text && <label htmlFor={id}>{label_text}</label>}
      <input className={style.input} id={id} type={type} {...rest} />
    </>
  )
}
