import { ReactNode } from "react";

type PopoverProps = {
    children?: ReactNode,
    width?: string,
    style?: object,
    className?: string,
    hidden?: boolean,
    button?: ReactNode,
    handleButton?: Function,
    typeClick: 'mousedown' | 'click',
    PopoverContent?: any
};

export default PopoverProps;