import { useEffect, useRef, useState } from "react"
import { useOnClickOutside } from "usehooks-ts";
import "./index.scss";
import PopoverProps from "./types";
//
const Popover = ({ children, width, style, className, hidden, button, handleButton, typeClick, PopoverContent }: PopoverProps) => {
    //
    const [show, setShow] = useState(hidden);
    const refDiv = useRef(null);
    const refButton = useRef<HTMLDivElement>(null);
    useOnClickOutside(refDiv, () => {
        setShow(false);
        handleButton && handleButton(true);
    });
    const handleMouseRight = (e: any) => {
        if (e.which === 3) {
            setShow(!show);
            handleButton && handleButton();
        }

        if (typeClick === 'click') {
            setShow(!show);
            handleButton && handleButton();
        }
    };
    useEffect(() => {
        //
        if (refButton.current) {
            refButton.current.removeEventListener(typeClick, handleMouseRight);
            refButton.current.addEventListener(typeClick, handleMouseRight);
        }
        //
    }, [show]);
    //
    return (
        <div ref={refDiv}>
            {PopoverContent ? <PopoverContent isShow={show} /> : (show ? <div className={`popover ${className}`}
                style={style ? { ...style, width } : { width }}>
                {children}
            </div> : <></>)}
            {<div ref={refButton} className="button_popover">{button}</div>}
        </div>
    )
}

export default Popover