import * as React from "react";

type ButtonProps = {
    title?: string
    children?: React.ReactNode
    onClick?: () => void
    className?: string
    disabled?: boolean
};

export const Button = ({title, children,  onClick, className, disabled}: ButtonProps) => {
    return (
        <button
            className={className}
            onClick={onClick}
            disabled={disabled}
        >{title || children}
        </button>
    );
};