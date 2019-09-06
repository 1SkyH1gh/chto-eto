import * as React from 'react'
import {FunctionComponent} from "react";
import avatar from '../ava.jpg'
import {Button} from "../Buttons/Button";
import styles from './User.module.scss'
export interface UserProps{
    name:string,
    verifield?:JSX.Element,
    tag:string,
    status?:string
}

export const User:FunctionComponent<UserProps>=(props)=>{
    return(
        <div className={styles.user}>
            <img src={avatar} className={styles.avatar}/>
            <div className={styles.descr}>


                    <p className={styles.name}>{props.name}</p>
                    <p >{props.verifield}</p>


                    <p className={styles.tag}>{props.tag}</p>
                    <p className={styles.status}>{props.status}</p>

            </div>
            <div className={styles.follow}>
                <Button text={"Follow"}/>
            </div>
        </div>
    )
}