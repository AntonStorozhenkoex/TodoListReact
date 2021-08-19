import React from "react";
import '../../index.css'

const ButtonFooter = ({onClick, title}) => {
    return (
        <button className='footerButton' onClick={onClick}>{title}</button>
    )
}

export default ButtonFooter;