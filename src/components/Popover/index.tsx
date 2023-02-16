import { useContext, useEffect, useRef, useState } from "react"
import { useOnClickOutside } from "usehooks-ts";
import { TaskbarContext } from "../../contexts/TaskbarContext/TaskbarContext";
import "./index.scss";
import PopoverProps from "./types";
//
const Popover = ({ children, width, style, className, icon, hidden, button, handleButton, typeClick, PopoverContent }: PopoverProps) => {
    //
    const [show, setShow] = useState(hidden);
    const refDiv = useRef(null);
    const refButton = useRef<HTMLDivElement>(null);
    const taskbarContext = useContext(TaskbarContext);
    const handleOutside = () => {
        setShow(false);
        handleButton && handleButton(true);
    }
    useOnClickOutside(refDiv, handleOutside);
    let timeOutScaleItem: any;
    const handleMouseRight = (e: any) => {
        switch (e.which) {
            case 1:
                handleButton && handleButton();
                setShow(false);
                clearTimeout(timeOutScaleItem);
                refButton.current?.classList.remove('active');
                refButton.current?.classList.add('active');
                taskbarContext?.updateOpenCurrent(icon.id);
                taskbarContext?.updateIsOpen(icon.id);

                timeOutScaleItem = setTimeout(() => {
                    refButton.current?.classList.remove('active');
                    clearTimeout(timeOutScaleItem);
                }, 500);
                break;
            case 3:
                setShow(!show);
                handleButton && handleButton();
                break;
            default:
                break;
        }
    };
    useEffect(() => {
        //
        if (refButton.current) {
            refButton.current.removeEventListener(typeClick, handleMouseRight);
            refButton.current.addEventListener(typeClick, handleMouseRight);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [show]);
    //
    return (
        <div ref={refDiv}>
            {PopoverContent ?
                <PopoverContent isShow={show} icon={icon} handleButton={() => {
                    setShow(false);
                    handleButton && handleButton(false);
                    setTimeout(() => {
                        handleButton && handleButton(true);
                    }, 1500);
                }} /> :
                (show ? <div className={`popover ${className}`}
                    style={style ? { ...style, width } : { width }}>
                    {children}
                </div> : <></>)}
            {<div ref={refButton} className="button_popover">{button}</div>}
        </div>
    )
}

export default Popover