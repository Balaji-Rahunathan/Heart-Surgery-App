import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import './menu_button.component.scss'

const MenuButton = ({ background, type, onClick }) => {
    const buttonStyle={
        backgroundColor: background,
        boxShadow : background === "white" ? "0px 3px 6px 0px #104157" : "0px 3px 6px 0px #80d7f9"
    }
    const buttonIconStyle = {
        color: background === "white" ? "#00A1FB" : "white"
    }
    return (
        <button 
            className="menu_button" 
            style={buttonStyle} 
            onClick={() => onClick(true)}>

            {
                type === "open" ? (<MenuIcon style={buttonIconStyle} />) : (<CloseIcon style={buttonIconStyle} />)
            }
        </button>
    )
}

export default MenuButton 
