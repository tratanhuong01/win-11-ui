import icons from "../../../icons";
import TaskbarInfoItem from "../TaskbarInfoItem";
import TaskInfoCalendar from "./TaskInfoCalendar";

//
const TaskbarInfo = () => {
    return (
        <ul className="taskbar__info">
            <TaskbarInfoItem style={{
                bottom: '100%',
                marginBottom: '0.8rem',
                left: '50%',
                transform: `translateX(-50%)`,
                width: '20rem',
            }} className='' ButtonHandle={({ isShow }: any) => <>
                {isShow && <div className="hover-text" style={{ whiteSpace: 'nowrap' }}>
                    Show hidden icons
                </div>}
                <i className='bx bx-chevron-left'></i>
            </>}
                typeClick="click"
            >
                <div className="list">
                    {icons.map((icon, key) =>
                        <div key={key}>
                            <img src={icon.image} key={key} alt='' />
                            <div className="hover-text" style={{ whiteSpace: 'nowrap' }}>
                                {`${icon.name}`}
                            </div>
                        </div>
                    )}
                </div>
            </TaskbarInfoItem>
            <li>
                <div className="hover-text" style={{ maxWidth: '12rem', width: 'max-content' }}>
                    You device need to restart to install updates. <br />
                    Select a time to restart.
                </div>
                <i className='bx bx-sync'></i>
            </li>
            <li>
                <span>ENG</span>
                <div className="hover-text" style={{ width: 'max-content' }}>
                    <div style={{ padding: '0.3rem' }}>
                        English (United States)<br />
                        ENG
                        <br />
                        <br />
                        To switch input methods, press Window key + space.
                    </div>
                </div>
            </li>
            <li>
                <div>
                    <i className='bx bx-wifi' ></i>
                </div>
                <div>
                    <i className='bx bx-volume-full' ></i>
                </div>
            </li>
            <TaskInfoCalendar />
            <li onClick={() => {
                if (!document.fullscreenElement) {
                    document.documentElement.requestFullscreen();
                } else {
                    if (document.exitFullscreen) {
                        document.exitFullscreen();
                    }
                }
            }}>
                &nbsp;&nbsp;&nbsp;
            </li>
        </ul>
    )
}

export default TaskbarInfo;