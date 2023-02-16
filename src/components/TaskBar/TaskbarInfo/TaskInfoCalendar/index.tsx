import { useEffect, useState } from "react";

type TaskInfoCalendarProps = {
    view?: string
}

const TaskInfoCalendar = ({ view }: TaskInfoCalendarProps) => {
    //
    const timeFunc = () => {
        const datetime = new Date().toLocaleString().replace(",", "");
        let arrTime = datetime.split(" ")[1].split(":");
        arrTime.pop();
        return `${arrTime.reduce((prev, cur) => `${prev}:${cur}`, "").substring(1)} ${datetime.split(" ")[2]}`;
    }
    const [time, setTime] = useState<String>(timeFunc());
    useEffect(() => {
        let interval = window.setInterval(() => {
            setTime(timeFunc());
        }, 1000);
        return () => {
            clearInterval(interval);
        }
    }, []);
    //
    return <li>
        <div>
            <span>{time}</span>
            <span>{new Date().toLocaleString().replace(",", "").split(" ")[0]}</span>
        </div>
    </li>
}

export default TaskInfoCalendar;