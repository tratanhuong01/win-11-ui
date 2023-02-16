import TaskbarItemObject from "../../../interfaces/@types.taskbar-item";

type TaskbarPreviewProps = {
    icon: TaskbarItemObject,
}

const TaskbarPreview = ({ icon }: TaskbarPreviewProps) => {
    return <>
        {Number(1) === Number(2) && <div className="hover-text" style={{ maxWidth: '12rem', width: 'max-content', marginBottom: '1.5rem' }}>
            {`${icon.name}`}
        </div>}
        <div className="mini">
            <div className="top">
                <img src={icon.image as string} alt="" />
                <p>win-11-ui</p>
                <span>&times;</span>
            </div>
            <div className="content">
                <img src="https://res.cloudinary.com/da4qxqcnf/image/upload/v1667919985/Mini-Images/working_visual_studio_code_i0dx9g.png"
                    alt="" />
            </div>
        </div>
    </>
}

export default TaskbarPreview;