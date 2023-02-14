//
import icons from "../../icons";
import "./index.scss";
import TaskbarInfo from "./TaskbarInfo";
import TaskbarProps from "./types";
import unpin_icon from "../../assets/icons/unpin-icon.png";
import TaskbarInfoItem from "./TaskbarInfoItem";
//

//
type ItemTaskProps = {
    icon: any,
    type: 'show' | 'hidden'
}
//
const TaskBar = (props: TaskbarProps) => {
    return (
        <div className={`taskbar ${props.isShow ? 'active' : ''}`}>
            <ul className="taskbar__center">
                {Object.keys(icons).map((icon, key) =>
                    <TaskbarItemCenter index={key} key={key} icon={icon} icons={icons} />
                )}
            </ul>
            <TaskbarInfo />
        </div>
    )
}

type TaskbarItemCenterProps = {
    index: Number,
    icon: any,
    icons: any
}

const TaskbarItemCenter = ({ icon, icons }: TaskbarItemCenterProps) => {
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
            ButtonHandle={({ isShow }: any) => <>
                <img src={(icons as any)[icon]} alt="" />
                {isShow && <>
                    {Number(1) === Number(2) && <div className="hover-text" style={{ maxWidth: '12rem', width: 'max-content', marginBottom: '1.5rem' }}>
                        {`${icon.substring(0, 1).toUpperCase()}${icon.substring(1, icon.length).toLowerCase()}`}
                    </div>}
                    <div className="mini">
                        <div className="top">
                            <img src={(icons as any)[icon]} alt="" />
                            <p>win-11-ui</p>
                            <span>&times;</span>
                        </div>
                        <div className="content">
                            <img src="https://res.cloudinary.com/da4qxqcnf/image/upload/v1667919985/Mini-Images/working_visual_studio_code_i0dx9g.png"
                                alt="" />
                        </div>
                    </div>
                </>}
            </>
            } typeClick="mousedown"
            PopoverContent={({ isShow }: any) =>
                <ul className={`popover_${isShow ? ' active' : ''}`}>
                    <li>
                        <img src={icons[icon]} alt="" />
                        <span>{`${icon.substring(0, 1).toUpperCase()}${icon.substring(1, icon.length).toLowerCase()}`}</span>
                    </li>
                    <li>
                        <img src={unpin_icon} alt="" />
                        <span>Unpin from taskbar</span>
                    </li>
                </ul>
            }>
        </TaskbarInfoItem>
    )
}

export default TaskBar;