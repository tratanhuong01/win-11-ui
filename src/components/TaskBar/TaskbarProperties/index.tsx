import TaskbarItemObject from "../../../interfaces/@types.taskbar-item";
import unpin_icon from "../../../assets/icons/unpin-icon.png";
import { useContext } from "react";
import { TaskbarContext } from "../../../contexts/TaskbarContext/TaskbarContext";

type TaskbarPropertiesProps = {
    isShow: Boolean,
    icon: TaskbarItemObject,
    handleButton: () => void
};

const TaskbarProperties = ({ isShow, icon, handleButton }: TaskbarPropertiesProps) => {
    //
    const taskbarContext = useContext(TaskbarContext);
    //
    return <ul className={`popover_${isShow ? ' active' : ''}`}>
        <li onClick={() => {
            taskbarContext?.updateOpenCurrent(icon.id);
            taskbarContext?.updateIsOpen(icon.id);
            handleButton();
        }}>
            <img src={icon.image as string} alt="" />
            <span>{`${icon.name}`}</span>
        </li>
        <li onClick={() => {
            taskbarContext?.removeTaskbar(icon.id)
        }}>
            <img src={unpin_icon} alt="" />
            <span>Unpin from taskbar</span>
        </li>
    </ul >
}

export default TaskbarProperties;