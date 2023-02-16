import { useContext } from "react";
import { TaskbarContext } from "../../../contexts/TaskbarContext/TaskbarContext";
import TaskbarItemObject from "../../../interfaces/@types.taskbar-item";
import TaskbarPreview from "../TaskbarPreview";

type TaskbarIconProps = {
    isShow: Boolean,
    icon: TaskbarItemObject
}

const TaskbarIcon = ({ icon, isShow }: TaskbarIconProps) => {
    //
    const taskbarContext = useContext(TaskbarContext);
    //
    return <>
        <img src={icon.image as string} alt="" />
        {icon.isOpen && <div className={`line ${taskbarContext?.taskbar.openCurrent === icon.id ? 'active' : ''}`}>
        </div>}
        {isShow && <TaskbarPreview icon={icon} />}
    </>
}

export default TaskbarIcon;