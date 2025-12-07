import { ReactElement } from 'react'
import { Tooltip } from 'antd'
import { TooltipPlacement } from 'antd/es/tooltip'

export interface IFunctionalIcon {
    title: string;
    content: ReactElement;
}

export const createTooltip = (icon: IFunctionalIcon, placement?: TooltipPlacement) => {
    return (
        <Tooltip title={icon.title} placement={placement ?? "right"} arrow={false}>
            {icon.content}
        </Tooltip>
    )
}   