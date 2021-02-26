import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import './menu_button.component.scss'

const MenuButton = ({background, iconColor, type, onClick}) => {
    console.log(background, iconColor, type)
    return (
        <div className="menu_button_container" >
            {
                <button className="menu_button" style={{backgroundColor:background}} onClick={()=>onClick(true)}>
                    {
                        type === "open" ? (<MenuIcon style={{color:iconColor}} />) : (<CloseIcon style={{color:iconColor}}  />)
                    }                    
                </button>
            }

        </div>
    )
}

export default MenuButton 
