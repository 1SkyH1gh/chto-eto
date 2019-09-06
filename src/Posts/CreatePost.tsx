import * as React from "react";
import {FunctionComponent} from "react";
import styles from './PostStyles.module.scss'
import {ControlItem} from "../Control/ControlItem";
import { mdiEyeOutline } from '@mdi/js';
import { mdiUpdate } from '@mdi/js';
import { mdiCalendarBlankOutline } from '@mdi/js';
import { mdiCamera } from '@mdi/js';
import { mdiMusicNotePlus } from '@mdi/js';
import { mdiVideoPlus } from '@mdi/js';
import { mdiFileDocumentBoxPlusOutline } from '@mdi/js';
import { mdiEmoticonHappyOutline } from '@mdi/js';
import Icon from '@mdi/react'
import ava from '../ava.jpg'
import {Button} from "../Buttons/Button";
import {ButtonColor} from "../TypeEnums";
export interface CreatePostProps {

}

export const CreatePost:FunctionComponent<CreatePostProps>=()=>{
    return(
        <div className={styles.Post}>
            <div className={styles.avatar_message}>
                <div className={styles.avaBlock}>
                    <img src={ava} className={styles.ava}/>
                </div>
                <form className={styles.form}>
                    <input className={styles.input} placeholder="how are you?"/>
                </form>
            </div>
            <div className={styles.configPost}>
                    <ControlItem text={"Poster"} leftItem={<Icon path={mdiCalendarBlankOutline} size={1}/>}/>
                    <ControlItem text={"Date send"} leftItem={<Icon path={mdiUpdate} size={1}/>}/>
                    <ControlItem text={"Visibility"} leftItem={<Icon path={mdiEyeOutline} size={1}/>}/>
            </div>
            <div className={styles.footer}>
                <div className={styles.smilesPost}>
                    <Icon path={mdiCamera} size={1}/>
                    <Icon path={mdiMusicNotePlus} size={1}/>
                    <Icon path={mdiFileDocumentBoxPlusOutline} size={1}/>
                    <Icon path={mdiVideoPlus} size={1}/>
                    <Icon path={mdiEmoticonHappyOutline} size={1}/>

                </div>
                <div className={styles.send}>
                    <Button text={"Create"} />
                </div>
            </div>
        </div>
    )
}