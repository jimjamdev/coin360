import {ChangeEvent} from "react";
import {isArrayEmpty} from "../../lib/is-array-empty";

// styles
import styles from './select.module.scss'

interface IOption {
    value: number | string;
    text: string;
}

interface ISelect {
    name: string;
    options?: Array<IOption>
    defaultValue?: number | string;
    onChange?: (e: ChangeEvent<HTMLSelectElement>) => void
}


const Select = ({ name = 'select', options = [], defaultValue = '', onChange } : ISelect) => {
    return (
        <select name={name} onChange={onChange} defaultValue={defaultValue} className={styles.select}>
            {!isArrayEmpty(options) && options?.map((option: IOption) => {
                return <option key={option?.value} value={option?.value}>{option?.text}</option>
            })}
        </select>
    )
}


export default Select