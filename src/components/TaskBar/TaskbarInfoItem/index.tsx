import { FunctionComponent, ReactNode, useState } from "react";
import Popover from "../../Popover";

type TaskbarInfoItem = {
    children?: ReactNode,
    ButtonHandle: ReactNode,
    style?: Object,
    typeClick: 'mousedown' | 'click',
    className?: String,
    PopoverContent?: any
}

const TaskbarInfoItem = ({ children, ButtonHandle, style, typeClick, className, PopoverContent }: any) => {
    //
    const [showChild, setShowChild] = useState<Boolean>(true);
    //
    return (
        <li>
            <Popover style={style} className={className || ''} button={<ButtonHandle isShow={showChild} />} handleButton={(status: any) => {
                setShowChild(status);
            }} typeClick={typeClick}
                PopoverContent={PopoverContent}>
                {PopoverContent ? <></> : children}
            </Popover>
        </li>
    )
}

export default TaskbarInfoItem;