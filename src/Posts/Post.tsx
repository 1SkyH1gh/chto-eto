import * as React from 'react'
import {FunctionComponent} from "react";
 import ava from '../ava.jpg'
import Icon from '@mdi/react'
import { mdiThumbUpOutline } from '@mdi/js';
import { mdiCommentOutline } from '@mdi/js';
import { mdiCommentQuoteOutline } from '@mdi/js';
import { mdiAlertOutline } from '@mdi/js';
import { mdiAccountMultiplePlusOutline } from '@mdi/js';

import styles from './PostStyles.module.scss'
export interface PostProps {
    name:string,
    tag:string,
    content:string
}

export const Post:FunctionComponent<PostProps>=(props)=>{
    return(
        <div className={styles.newpost}>
            <div className={styles.info}>
            <img src={ava} className={styles.ava}/>


                <span className={styles.name}>{props.name}</span>
                <span className={styles.tag}>{props.tag}</span>
            </div>
            <div className={styles.content}>
                <p>{props.content}</p>
            </div>
            <div className={styles.action}>
                    <Icon path={mdiThumbUpOutline} size={1}/>
                <Icon path={mdiCommentOutline} size={1}/>
                <Icon path={mdiCommentQuoteOutline} size={1}/>
                <Icon path={mdiAlertOutline} size={1}/>
                <Icon path={mdiAccountMultiplePlusOutline} size={1}/>
            </div>
        </div>
    )
}