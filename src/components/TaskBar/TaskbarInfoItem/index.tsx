import { useContext, useState } from "react";
import { TaskbarContext } from "../../../contexts/TaskbarContext/TaskbarContext";
import Popover from "../../Popover";
// type TaskbarInfoItem = {
//     children?: ReactNode,
//     ButtonHandle?: any,
//     style?: Object,
//     typeClick: "mousedown" | "click",
//     className?: string,
//     PopoverContent?: any,
//     icon: TaskbarItemObject,
// };

const TaskbarInfoItem = ({
    children,
    ButtonHandle,
    style,
    typeClick,
    className,
    PopoverContent,
    icon
}: any) => {
    //
    const [showChild, setShowChild] = useState<Boolean>(true);
    const taskbarContext = useContext(TaskbarContext);
    //
    return (
        <li className={`${icon && taskbarContext?.taskbar.openCurrent === icon.id ? 'active' : ''}`}>
            <Popover
                icon={icon}
                style={style}
                className={className}
                button={<ButtonHandle isShow={showChild} icon={icon} />}
                handleButton={(status: any) => {
                    setShowChild(status);
                }}
                typeClick={typeClick}
                PopoverContent={PopoverContent}
            >
                {PopoverContent ? <></> : children}
            </Popover>
        </li>
    );
};

export default TaskbarInfoItem;
