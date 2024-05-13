import React from 'react'

export enum ButtonVariant {
    PRIMARY = "primary",
    SECONDARY = "secondary",
    TERTIARY = "tertiary"
}

interface ButtonProps {
    variant?: ButtonVariant;
    children: React.ReactNode
}

const ButtonColorClass = (variant: ButtonVariant) => {
    switch (variant) {
        case ButtonVariant.PRIMARY:
            return " border-solid border-2 border-red-500 bg-red-500"
        case ButtonVariant.SECONDARY:
            return "border-solid border-2 border-green-500 bg-green-500"
        case ButtonVariant.TERTIARY:
            return "border-solid border-2 border-slate-500 text-slate-500"
    }
}

export const Button: React.FC<ButtonProps> = ({ variant = ButtonVariant.PRIMARY, children }) => {
    return (
        <button className={` ${ButtonColorClass(variant)} rounded-sm py-2 px-4 min-w-32 font-bold`}>{children}</button>
    )
}
