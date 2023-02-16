import { ReactNode } from "react"
import TaskbarItemObject from "../../interfaces/@types.taskbar-item"

export interface StateType {
    icons: Array<TaskbarItemObject>,
    openCurrent: String
}

export type ContextState = {
    taskbar: StateType,
    removeTaskbar: (id: String) => void,
    updateOpenCurrent: (id: String) => void,
    updateIsOpen: (id: String) => void
}

export type ProviderType = {
    children: ReactNode
}

