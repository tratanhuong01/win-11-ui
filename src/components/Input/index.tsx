import { useState } from "react";
import "./index.scss";
import InputProp from "./types";
//
const Input = ({ type, className, style, placeholder, search, name, icon }: InputProp) => {
    //
    const [typeState, setTypeState] = useState(type);
    const [loading, setLoading] = useState<boolean>(false);
    //
    return (
        <div>
            <div className={`input input__${icon && type !== "password" ?
                "innerLeft" : type !== "password" ? search : "innerRight"}`}>
                <div className="input__container">
                    {((search && search !== "button" && type !== "password") || icon) &&
                        <i className={icon || "fa-solid fa-magnifying-glass"} />}
                    <input type={typeState}
                        className={className || ''}
                        style={style}
                        placeholder={placeholder}
                        name={name}
                        spellCheck={false}
                        disabled={loading}
                    />
                    {type === "password" && <i
                        onClick={() => setTypeState(typeState === "password" ? "text" : "password")}
                        style={{ cursor: "pointer" }}
                        className={`fa-solid fa-eye${typeState === "password" ? "-slash" : ""}`}
                    />}
                </div>
                {search === "button" && <button onClick={() => {
                    if (loading) return;
                    setLoading(true);
                }} className={loading ? "disabled" : ""} type="button">
                    <i className={`fa-solid ${loading ? "fa-circle-notch rotate-360" : "fa-magnifying-glass"}`} />
                </button>}
            </div>
            <p className="input__error"></p>
        </div>
    )
}

export default Input