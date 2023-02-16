import { ReactNode } from "react";
import TaskbarItemObject from "../../interfaces/@types.taskbar-item";

type PopoverProps = {
    children?: ReactNode,
    width?: string,
    style?: object,
    className?: string,
    hidden?: boolean,
    button?: ReactNode,
    handleButton?: Function,
    typeClick: 'mousedown' | 'click',
    PopoverContent?: any,
    icon: TaskbarItemObject
};

export default PopoverProps;