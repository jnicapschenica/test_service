import React, { FC, PropsWithChildren } from 'react'
import classes from './TestServiceButton.module.css';

interface ButtonProps extends PropsWithChildren {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    style?: React.CSSProperties;
}

const TestServiceButton: FC<ButtonProps> =
    ({
        onClick,
        children,
        style,
        ...props
    }) => {
        return (
            <button onClick={onClick} style={style} className={classes.myBtn} {...props}>
                {children}
            </button>
        )
    }

export default TestServiceButton