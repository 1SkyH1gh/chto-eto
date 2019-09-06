import * as React from 'react'
import {FunctionComponent} from "react";
import Icon from '@mdi/react'
import { mdiHomeVariantOutline } from '@mdi/js';
import {ControlItem} from "./ControlItem";
import { mdiSettingsOutline } from '@mdi/js';
import { mdiPlaylistMusicOutline } from '@mdi/js';
import { mdiVideoOutline } from '@mdi/js';
import { mdiForumOutline } from '@mdi/js';
import styles from './Item.module.scss'
export interface ControlPanelProps {

}

export const ControlPanel:FunctionComponent<ControlPanelProps>=()=>{

    return(
      <div className={styles.container}>
          <ControlItem text={"Account"} leftItem={<Icon path={mdiHomeVariantOutline } size={1}/>}/>
          <ControlItem text={"Settings"} leftItem={<Icon path={mdiSettingsOutline } size={1}/>}/>
          <ControlItem text={"Music"} leftItem={<Icon path={mdiPlaylistMusicOutline} size={1}/>}/>
          <ControlItem text={"Videos"} leftItem={<Icon path={mdiVideoOutline} size={1}/>}/>
          <ControlItem text={"Publics"} leftItem={<Icon path={mdiForumOutline } size={1}/>}/>
      </div>
    )
}