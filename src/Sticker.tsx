import * as React from 'react'
import {FunctionComponent} from "react";
import styles from './StickerStyles.module.scss'
import { mdiCommentQuoteOutline } from '@mdi/js';
export interface StickerProps{
taskName?:string,
    status:string,
    statusIcon:JSX.Element,
    value:number,
    valueGrow:number

}

export const Sticker:FunctionComponent<StickerProps>=(props)=>{
    return(
        <div className={styles.sticker}>
            <div className={styles.task_icon}>
                <span>{props.taskName}</span>
                {props.statusIcon}
                
            </div>
            <div className={styles.status}>
                <div className={styles.pow}/>
                {props.status}
            </div>
            <div className={styles.value}>
                {props.value}
                <span className={styles.grow}>{props.valueGrow}</span>
            </div>
        </div>
    )
}