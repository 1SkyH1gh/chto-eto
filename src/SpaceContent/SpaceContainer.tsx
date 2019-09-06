import * as React from 'react'
import {FunctionComponent} from "react";
import ReactPlayer from 'react-player'
import styles from './SpaceContainer.module.scss'
export interface SpaceContainerProps {

}
export const SpaceContainer:FunctionComponent<SpaceContainerProps>=props=>{
    return(
        <div className={styles.container}>
            <div className={styles.space}>
                Spacer
            </div>
            <div className={styles.player}>
                <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' width={"100%"} height={"90%"}/>
            </div>
            <div className={styles.playerControl}>PlayerControl</div>
        </div>
    )
}