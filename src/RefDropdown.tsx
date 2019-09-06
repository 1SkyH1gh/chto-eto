import * as React from 'react'
import {FunctionComponent, useState} from "react";
import Popover from 'react-tiny-popover'
export interface refProps{
content:JSX.Element,
    trigger:JSX.Element
}

export const RefDropdown:FunctionComponent<refProps>=(props)=>{
    const [isPopoverOpen,setPopover]=useState(false)
    return(
        <Popover
            isOpen={isPopoverOpen}

            padding={10}
            disableReposition

            content={({ position, nudgedLeft, nudgedTop, targetRect, popoverRect }) => (
                <div>
                    {props.content}
                </div>
            )}
        >
            <div onClick={() => setPopover(true)}>
                {props.trigger}
            </div>
        </Popover>
    )
}