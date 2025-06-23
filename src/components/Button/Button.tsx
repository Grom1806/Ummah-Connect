import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Button.module.scss'

type ButtonProps = {
  children: React.ReactNode
  to?: string               // для ссылок
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  variant?: 'primary' | 'secondary' | 'outline' | 'danger'
  disabled?: boolean
  className?: string
}

const Button: React.FC<ButtonProps> = ({
  children,
  to,
  onClick,
  type = 'button',
  variant = 'primary',
  disabled = false,
  className = ''
}) => {
  const buttonClass = `${styles.button} ${styles[variant]} ${disabled ? styles.disabled : ''} ${className}`

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
