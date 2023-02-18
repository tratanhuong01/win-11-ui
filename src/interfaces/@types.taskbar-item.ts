import { FunctionComponent, ReactNode } from "react";

export default interface TaskbarItemObject {
    id: String,
    image: String,
    name: String,
    isOpen: Boolean,
    UI: FunctionComponent,
    isPreview: Boolean
}