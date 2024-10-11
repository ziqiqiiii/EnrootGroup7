import React from 'react'
import Image from 'next/image'

type ButtonProps ={
    type: 'button' | 'submit';
    title: string | '';
    icon?: string;
    variant: 'btn_dark_green' | 'btn_green' | 'btn_dark_green_outline' | 'btn_white' | 'btn_white_text';
}

const Button = ({ type, title, icon, variant}: ButtonProps) => {
  return (
    <button
        className={`flexCenter gap-3 ${variant} border rounded-full cursor-pointer`}
        type={type}
    >
        { icon && <Image src={icon} alt={title} width={24} height={24}/> }
        <label className="bold-16 whitespace-nowrap">{title}</label>
    </button>
  )
}

export default Button