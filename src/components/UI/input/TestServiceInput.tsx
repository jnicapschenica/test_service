import React, { FC } from "react";
import classes from './TestServiceInput.module.css'

interface InputProps {
    value?: string;
    type?: string;
    placeholder?: string;
    checked?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    style?: React.CSSProperties;
}

const TestServiceInput: FC<InputProps> =
    ({
        value,
        type,
        placeholder,
        onChange,
        checked,
        style,
        ...props
    }) => {
        return (
            <input className={classes.myInput} value={value} style={style} checked={checked} type={type} placeholder={placeholder} onChange={onChange} {...props} />
        )
    }

export default TestServiceInput