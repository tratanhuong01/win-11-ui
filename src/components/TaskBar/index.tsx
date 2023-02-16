//
import "./index.scss";
import TaskbarInfo from "./TaskbarInfo";
import TaskbarProps from "./types";
import TaskbarInfoItem from "./TaskbarInfoItem";
import TaskbarItemObject from "../../interfaces/@types.taskbar-item";
import { useContext } from "react";
import { TaskbarContext } from "../../contexts/TaskbarContext/TaskbarContext";
import TaskbarProperties from "./TaskbarProperties";
import TaskbarIcon from "./TaskbarIcon";
//

//
type ItemTaskProps = {
    icon: any,
    type: 'show' | 'hidden'
}
//
const TaskBar = ({ isShow }: TaskbarProps) => {
    //
    const taskbarContext = useContext(TaskbarContext);
    //
    return (
        <div className={`taskbar ${isShow ? 'active' : ''}`}>
            <ul className="taskbar__center">
                {taskbarContext?.taskbar.icons.map((icon, key) =>
                    <TaskbarItemCenter index={key} key={key} icon={icon} />
                )}
            </ul>
            <TaskbarInfo />
        </div>
    )
}

type TaskbarItemCenterProps = {
    index: Number,
    icon: TaskbarItemObject
}

const TaskbarItemCenter = ({ icon }: TaskbarItemCenterProps) => {
    //
    const list = ((): Array<ItemTaskProps> => {
        const temp: Array<ItemTaskProps> = [];

        return temp;
    })();
    //  
    return (
        <TaskbarInfoItem
            style={{
                bottom: '100%',
                marginBottom: '0.8rem',
                left: '50%',
                transform: `translateX(-50%)`,
                width: '20rem',
            }}
            icon={icon}
            ButtonHandle={TaskbarIcon}
            typeClick="mousedown"
            PopoverContent={TaskbarProperties}>
        </TaskbarInfoItem>
    )
}

export default TaskBar;