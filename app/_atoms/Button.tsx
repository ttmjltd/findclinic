import { ButtonProps } from "../types"

const Button: React.FC<ButtonProps> = ({label, icon, variation}) => {
  return (
    <button className={variation == "narrow-light" ? "flex px-3 py-2 text-md rounded-lg bg-neutral text-secondary" : variation == "narrow-dark" ? "flex px-3 py-2 text-md rounded-lg bg-secondary text-white" : variation == "broad-light" ? "flex px-20 py-2 text-md rounded-lg bg-neutral text-secondary" : variation == "broad-dark" ? "flex px-20 py-2 text-md rounded-lg bg-secondary text-white" : "" } >
      {icon ? <span className='mr-2 size-5'>{icon}</span> : ""}
      
      <span>{label}</span>

    </button>
  )
}

export default Button