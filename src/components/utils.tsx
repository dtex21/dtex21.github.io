import { ReactElement } from 'react'
import { Tooltip } from 'antd'
import { TooltipPlacement } from 'antd/es/tooltip'

export interface IFunctionalIcon {
    id: string
    title: string;
    content: ReactElement;
}

export const changeLanguageAnimationDelay = 200 //in ms

export const createTooltip = (icon: IFunctionalIcon, placement?: TooltipPlacement) => {
    return (
        <Tooltip key={icon.id} title={icon.title} placement={placement ?? "right"} arrow={false}>
            {icon.content}
        </Tooltip>
    )
}   