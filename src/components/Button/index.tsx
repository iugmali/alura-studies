// @flow 
import * as React from 'react';
import style from './Button.module.scss';

interface Props {
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void,
    children?: React.ReactNode
}

export default function Button({type, onClick, children} : Props) {
    return (
        <button onClick={onClick} className={style.botao} type={type}>
            {children}
        </button>
    );
}