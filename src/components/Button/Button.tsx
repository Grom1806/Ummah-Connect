import React from 'react'
import { NavLink } from 'react-router-dom'

type ButtonProps = {
  children: React.ReactNode
  to?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  variant?: 'primary' | 'secondary' | 'outline' | 'danger'
  disabled?: boolean
  className?: string
}

const buttonVariants = {
	base: 'inline-block px-6 py-3 rounded-lg text-base font-semibold text-center cursor-pointer transition-all duration-300 no-underline ',
	primary:
		'bg-[#6baf76] text-white hover:bg-[#5a9d65] hover:scale-105 active:bg-[#4b8c56] active:scale-95',
	secondary:
		'bg-[linear-gradient(90deg,_#f2f2f2_60%,_#e9ecef_100%)] text-[#333] shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-[#e0e0e0] relative overflow-hidden hover:bg-[linear-gradient(90deg,_#e0e0e0_60%,_#f2f2f2_100%)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 hover:scale-105 active:bg-[#d1d5db] active:shadow-[0_1px_4px_rgba(0,0,0,0.04)] active:scale-95',
	outline:
		'bg-transparent border-2 border-[#6baf76] text-[#6baf76] shadow-[0_2px_8px_rgba(107,175,118,0.08)] hover:bg-[linear-gradient(90deg,_#f0fff4_60%,_#e6f9ec_100%)] hover:text-[#4b8c56] hover:shadow-[0_4px_16px_rgba(107,175,118,0.16)] hover:border-[#4b8c56] hover:-translate-y-0.5 hover:scale-105 active:bg-[#dff2e3] active:text-[#357a4b] active:border-[#357a4b] active:shadow-[0_1px_4px_rgba(107,175,118,0.08)] active:scale-95',
	danger:
		'bg-[linear-gradient(90deg,_#e74c3c_60%,_#ff6f61_100%)] text-white shadow-[0_2px_8px_rgba(231,76,60,0.08)] border-none hover:bg-[linear-gradient(90deg,_#c0392b_60%,_#e74c3c_100%)] hover:shadow-[0_4px_16px_rgba(231,76,60,0.16)] hover:-translate-y-0.5 hover:scale-105 active:bg-[#b53224] active:shadow-[0_1px_4px_rgba(231,76,60,0.08)] active:scale-95',
	disabled: 'opacity-50 pointer-events-none',
}

const Button: React.FC<ButtonProps> = ({
  children,
  to,
  onClick,
  type = 'button',
  variant = 'primary',
  disabled = false,
}) => {
  const variantClass = buttonVariants[variant] || ''
  const disabledClass = disabled ? buttonVariants.disabled : ''
  const buttonClass = `${buttonVariants.base} ${variantClass} ${disabledClass}`

  if (to) {
    return (
      <NavLink to={to} className={buttonClass}>
        {children}
      </NavLink>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClass}
    >
      {children}
    </button>
  )
}

export default Button
