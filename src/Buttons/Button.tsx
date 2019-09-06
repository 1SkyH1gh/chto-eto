import * as React from "react";
import {FunctionComponent} from "react";
import classNames from "classnames";
import styles from './ButtonStyles.module.scss'
import {ButtonColor} from "../TypeEnums";
export interface ButtonProps {
color?:string,
    text:string,
    border?:string,
    textColor?:string
}

export const Button:FunctionComponent<ButtonProps>=(props)=>{

    return(
        <div className={styles.button}>
            {props.text}
        </div>
    )
}