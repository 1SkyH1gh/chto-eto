import * as React from 'react'
import {FunctionComponent} from "react";
import styles from './Header.module.scss'
export interface HeaderProps{

}

export const Header:FunctionComponent<HeaderProps>=()=>{
    return(
        <div className={styles.header}>
           <div className={styles.control}>
                <div className={styles.controlBlock}>Home</div>
                <div className={styles.controlBlock}>Main</div>
                <div className={styles.controlBlock}>Settings</div>
           </div>
            <div className={styles.form}>
                <form>
                    <input placeholder={"search"} className={styles.input}/>
                </form>
            </div>
        </div>
    )
}