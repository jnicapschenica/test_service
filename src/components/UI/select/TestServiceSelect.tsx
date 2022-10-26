import React, { FC } from "react";
import classes from './TestServiceSelect.module.css'

interface IOption {
    value: string;
    name: string;
}

interface SelectProps {
    value?: string;
    options: IOption[];
    defaultValue: string;
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const testServiceSelect: FC<SelectProps> =
    ({
        options,
        defaultValue,
        value,
        onChange,
        ...props
    }) => {
        return (
            <select
                value={value}
                onChange={onChange}
                className={classes.select}
                >
                <option disabled hidden selected value=''>{defaultValue}</option>
                {options.map(option =>
                    <option key={option.value} value={option.value}>
                        {option.name}
                    </option>
                )}
            </select>
        )
    }

export default testServiceSelect