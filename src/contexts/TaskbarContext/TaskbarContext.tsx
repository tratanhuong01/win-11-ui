import { createContext, useState } from "react";
import icons from "../../icons";
import { ContextState, ProviderType, StateType } from "./@types.taskbar";

export const TaskbarContext = createContext<ContextState | null>(null);

export const TaskbarProvider = (props: ProviderType) => {
    //
    const [taskbar, setTaskbar] = useState<StateType>({
        icons: icons,
        openCurrent: ""
    });
    const updateOpenCurrent = (id: String) => {
        const index = [...taskbar.icons].findIndex(item => item.id === id);
        if (index === -1) return;

        setTaskbar(taskbar => {
            return { ...taskbar, openCurrent: id };
        });
    }
    const removeTaskbar = (
        id: String
    ) => {
        let newTaskbars = [...taskbar.icons].filter(item => item.id !== id);
        setTaskbar(taskbar => {
            return { ...taskbar, icons: newTaskbars };
        });
    }
    const updateIsOpen = (id: String) => {
        let index = [...taskbar.icons].findIndex(item => item.id === id);
        if (index === -1) return;

        let newTaskbars = [...taskbar.icons];
        newTaskbars[index].isOpen = true;

        setTaskbar(taskbar => {
            return { ...taskbar, icons: newTaskbars };
        });
    }
    //
    return (
        <TaskbarContext.Provider value={{
            taskbar,
            removeTaskbar,
            updateOpenCurrent,
            updateIsOpen
        }}>
            {props.children}
        </TaskbarContext.Provider>
    )
}