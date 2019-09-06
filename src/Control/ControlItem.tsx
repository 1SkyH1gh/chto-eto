import * as React from 'react'
import {FunctionComponent} from "react";
import  styles from './Item.module.scss'
export interface ControlItemProps {
    leftItem?:JSX.Element
    text:string
}

export const ControlItem:FunctionComponent<ControlItemProps>=(props)=>{
    return(
        <div className={styles.item}>
            {props.leftItem}
            <p>{props.text}</p>
        </div>
    )
}