import search from "./assets/icons/search-icon.png";
import windows from "./assets/icons/windows-icon.png";
import facebook from "./assets/icons/facebook-icon.png";
import calendar from "./assets/icons/calendar-icon.png";
import calculator from "./assets/icons/calculator-icon.png";
import edge from "./assets/icons/edge-icon.png";
import mail from "./assets/icons/mail-icon.png";
import setting from "./assets/icons/setting-icon.png";
import photo from "./assets/icons/photo-icon.png";
import chrome from "./assets/icons/chrome-icon.png";
import vscode from "./assets/icons/visual-studio-code-icon.png";
import folder from "./assets/icons/folder-icon.png";
import { v4 } from 'uuid';

const icons = [
    {
        id: v4(),
        image: windows,
        name: "Windows",
        isOpen: false,
    },
    {
        id: v4(),
        image: search,
        name: "Search",
        isOpen: false,
    },
    {
        id: v4(),
        image: facebook,
        name: "Facebook",
        isOpen: false,
    },
    {
        id: v4(),
        image: calculator,
        name: "Calcalator",
        isOpen: false,
    },
    {
        id: v4(),
        image: calendar,
        name: "Calendar",
        isOpen: false,
    },
    {
        id: v4(),
        image: edge,
        name: "Edge",
        isOpen: false,
    },
    {
        id: v4(),
        image: mail,
        name: "Mail",
        isOpen: false,
    },
    {
        id: v4(),
        image: setting,
        name: "Setting",
        isOpen: false,
    },
    {
        id: v4(),
        image: photo,
        name: "Photo",
        isOpen: false,
    },
    {
        id: v4(),
        image: chrome,
        name: "Chrome",
        isOpen: false,
    },
    {
        id: v4(),
        image: vscode,
        name: "VSCode",
        isOpen: false,
    },
    {
        id: v4(),
        image: folder,
        name: "Folder",
        isOpen: false,
    },
]

export default icons;