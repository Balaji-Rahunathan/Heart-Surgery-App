import React from 'react'
import Button from "../../assets/images/Buuton.svg"
import './next_button.component.scss'

const NextButton = (props) => {
    const {onClick,style} = props
    return (
        <div>
            <img src={Button} alt="next_button" className="red-circle4" onClick={onClick} style={style} />
        </div>
    )
}

export default NextButton
